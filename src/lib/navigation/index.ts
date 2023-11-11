import { goto, beforeNavigate } from "$app/navigation";
import { get, type Readable } from "svelte/store";
import { assertHistoryStateInitialized, getOptionState, getRelativeUrl, getRouterOptions, isHistoryStateInitialized, matchesCurrentOrigin, promoteToElement } from "./utils";
import { createClickedAnchorTracker, type AnchorInterceptHandler, interceptAnchorWithProtocol, interceptAnchorSameOrigin } from "./setup";
import { page } from "$app/stores";


function getPopUrl () {
    const url = get(page).url;
    if (url.search !== '' || url.hash !== '') {
        return url.pathname;
    } else {
        return url.pathname.replace(/\/[^/]+\/?$/, '');
    }
}

async function initializeHistoryStack() {
    if (!isHistoryStateInitialized(history.state)) {
        const stack = [getRelativeUrl(window.location)];
        return await goto(window.location.toString(), {
            replaceState: true,
            state: {
                ...history.state,
                stack,
                preservedIndexes: [],
            }
        });
    }
}

const handleRouterLinkIntercept: AnchorInterceptHandler = async ({ url, preventDefault }) => {
    switch (url.pathname) {
        case 'pop-stack':
            preventDefault();
            return await navPopStack();
        default: 
            throw new Error(`Unable to handle router command, URI was unrecognized: '${url.toString()}'.`);
    }
}


const anchorHandler: AnchorInterceptHandler = async ({ url, anchor, preventDefault }) => {
    const {
        preserveStack = false, 
        reload = false,
        keepFocus = false,
        noScroll = false,
    } = anchor === null ? {} : {
        preserveStack: getOptionState(anchor?.getAttribute('data-preserve-stack') ?? 'false'),
        ...getRouterOptions(anchor)
    };

    // Allow normal link behaviour. We can't inject history state in a reload anyway.
    if (reload) return;

    preventDefault();
    await navPushStackInternal(url.toString(), { 
        preserveStack, 
        keepFocus,
        noScroll,
    });
}

export function activateNavigationStackBehaviour() {
    initializeHistoryStack();
    const lastClickedAnchor = createClickedAnchorTracker();
    interceptAnchorWithProtocol(
        handleRouterLinkIntercept, 
        { protocol: 'router:', lastClickedAnchor }
    );
    interceptAnchorSameOrigin(
        anchorHandler, 
        { lastClickedAnchor }
    );
}

export function navCanPopStack() {
    assertHistoryStateInitialized(history.state);
    return history.state.stack.length > 1;
}

export async function navPopStack() {
    assertHistoryStateInitialized(history.state);

    if (history.state.stack.length > 1) {
        return await navPushStackInternal(history.state.stack[history.state.stack.length - 2], {breakPreserves: true});
    } else {
        return await navPushStackInternal(getPopUrl(), {breakPreserves: true});
    }
}

export async function navPushStack(url: string, opts: {
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
    preserveStack?: boolean
} = {}) {
    navPushStackInternal(url, opts);
}

async function navPushStackInternal(url: string, opts: {
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
    preserveStack?: boolean;
    breakPreserves?: boolean;
} = {}) {
    const newUrl = new URL(url, window.location.href);
    if (!matchesCurrentOrigin(newUrl)) {
        throw new Error('Navigating away from site cannot be performed by navPushStack.');
    }

    assertHistoryStateInitialized(history.state);

    if (opts.preserveStack && opts.breakPreserves) {
        throw new Error(`Options 'preserveStack' and 'breakPreserves' cannot both be true.`)
    }

    const { stack, preservedIndexes = [] } = history.state

    const [preservedCount, mutableStack] = (() => {
        if (opts.breakPreserves) {
            return [0, stack.slice(0)];
        } else {
            let preservedCount = 0;
            if (opts.preserveStack) {
                // preserve the whole stack
                preservedCount = stack.length;
            } else if (preservedIndexes.length > 0) {
                // preserve upto the last index value
                preservedCount = preservedIndexes[preservedIndexes.length - 1] + 1
            }

            return [
                preservedCount,
                stack.slice(preservedCount)
            ];
        }
    })()

    const newPath = getRelativeUrl(newUrl);

    // find common path match in history stack.
    let commonIndex = mutableStack.findLastIndex(path => newPath.startsWith(path));
    
    // keep traversing history stack until no qs found
    while (true) {
        if (commonIndex < 0) 
            break;

        let commonPathHasQS = new URL(mutableStack[commonIndex], 
            window.location.href).search !== '';

        if (!commonPathHasQS) {
            break;
        }

        commonIndex--;
    }

    let backCount = 0;
    let replace = false;
    let sameUrl = false
    if (commonIndex === -1 && mutableStack.length > 0) {
        // go back to start and replace.
        backCount = mutableStack.length - 1;
        replace = true;
    } else if (commonIndex === -1) {
        // nothing to go back to, current position is preserved, move forward.
        backCount = 0;
        replace = false;
    } else {
        backCount = mutableStack.length - commonIndex - 1;
        sameUrl = mutableStack[commonIndex] === newPath
        if (sameUrl) {
            // go back if necessary to page and just "refresh" (replace)
            replace = true;
        } else if (backCount === 1) {
            // shortcut if we will go back 1 and forward 1
            backCount = 0;
            replace = true;
        }
    }

    const go = async () => {
        // The number of items left in the stack after truncating (history.back) replace logic accounted for.
        const remainderCount = commonIndex + (sameUrl ? 0 : 1);
        const newStack = [
            ...stack.slice(0, preservedCount), 
            ...mutableStack.slice(0, remainderCount), 
            getRelativeUrl(newUrl)
        ];

        const newPreservedIndexes = [
            ...(opts.breakPreserves ? 
                preservedIndexes.filter(i => i < remainderCount) :
                preservedIndexes),
            ...(opts.preserveStack ? [preservedCount + remainderCount - 1] : [])
        ];
        
        await goto(url, {        
            ...(opts ?? {}),
            replaceState: replace,
            state: {
                ...history.state,
                ...(opts?.state ?? {}),
                stack: newStack,
                preservedIndexes: newPreservedIndexes,
            },
        });
    };

    if (backCount > 0) {
        // use popstate event to ensure correct order of actions.
        const handler = () => {
            window.removeEventListener('popstate', handler);
            go();
        }
        window.addEventListener('popstate', handler);
        history.go(-backCount);
    } else {
        await go();
    }
}
