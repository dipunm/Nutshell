import { goto, beforeNavigate } from "$app/navigation";
import { page } from "$app/stores";
import { get, writable } from "svelte/store";
import { getOptionState, getRelativeUrl, getRouterOptions } from "./utils";

const container = document.documentElement; // TODO: allow this to be overridden for library purposes.
const lastClickedLink = writable<HTMLAnchorElement | SVGAElement | null>(null);
const initClickedAnchorTracker = () => {
    container.addEventListener('click', (event) => {
        // Adapted from Sveltekit
        // https://github.com/sveltejs/kit/blob/ce4fd764e271b1a461979dfaf9698af6f36e3714/packages/kit/src/runtime/client/client.js#L1508
        // License https://github.com/sveltejs/kit/blob/master/LICENSE
        if (event.button || event.which !== 1) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (event.defaultPrevented) return;

        // composedPath() takes into account the encapsulation of shadow DOM.
        let anchorElement = event.composedPath()[0] as Element | null;
        while (anchorElement && anchorElement !== container) {
            if (anchorElement.nodeName.toUpperCase() === 'A' && anchorElement.hasAttribute('href')) {
                break;
            }
    
            anchorElement = anchorElement.assignedSlot ?? anchorElement.parentNode as Element;
        }
        if (anchorElement?.nodeType === 11) anchorElement = (anchorElement as Node as ShadowRoot).host;
        lastClickedLink.set(anchorElement as HTMLAnchorElement | SVGAElement | null);
    }, { passive: true, capture: true });
}

function interceptAnchorWithProtocol(protocol: string, handler: (url: URL) => void) {
    container.addEventListener('click', function(event) {
        let element = event.composedPath()[0] as ParentNode | null;
    
        // Traverse up to find the closest anchor if the target is not the anchor itself
        while (element && element.nodeName !== 'A') {
          element = element.parentNode;
          if (element === container) break;
        }
    
        // If no anchor is found, exit the function
        if (!element || element.nodeName !== 'A' || !promoteToElement(element)) return;
    
        // Parse the URL from the href attribute
        const href = element.getAttribute('href');
        if (href && href.startsWith(`${protocol}`)) {
          // Prevent the default link behavior
          event.preventDefault();
          event.stopImmediatePropagation();
    
          // Execute the handler and pass the URL
          handler(new URL(href, window.location.href));
        }
      });
}

const initializeHistoryStack = async () => {
    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        const stack = [getRelativeUrl(window.location)];
        await goto(window.location.toString(), {
            replaceState: true,
            state: {
                ...history.state,
                stack,
                preservedIndexes: [],
            }
        });
    }
}

const stackPopUrl = writable('');
page.subscribe((p) => {
    if (!p?.url) return;
    
    if (p.url.search !== '' || p.url.hash !== '') {
        stackPopUrl.set(p.url.pathname);
    } else {
        stackPopUrl.set('/' + (p.url.pathname.replace(/\/[^/]+\/?$/, '')).replace(/^\//, ''));
    }
});

export function stackContainsParent() {
    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
    }

    return history.state.stack.length > 1;
}

export const activateNavigationStackBehaviour = () => {
    initializeHistoryStack();
    initClickedAnchorTracker();
    interceptAnchorWithProtocol('router:', async (url) => {
        switch (url.pathname) {
            case 'pop-stack':
                return await stackBack();                        
            default: 
                throw new Error(`Unable to handle router command, URI was unrecognized: '${url.toString()}'.`);
        }
    });

    beforeNavigate(async nav => {
        // introduce form handling when necessary
        if (nav.type === 'link' /*|| nav.type === 'form'*/) {
            if (nav.to === null) return;
            if (
                nav.to.url.protocol !== window.location.protocol ||
                nav.to.url.host !== window.location.host
            ) {
                // navigating away from site.
                return;
            }

            const anchor = get(lastClickedLink);
            const {
                preserveStack = false, 
                reload = false,
                keepFocus = false,
                noScroll = false,
                replaceState = false
            } = anchor === null ? {} : {
                preserveStack: getOptionState(anchor?.getAttribute('data-preserve-stack') ?? 'false'),
                ...getRouterOptions(anchor)
            };

            // Allow normal link behaviour. We can't inject history state in a reload anyway.
            if (reload) return;

            nav.cancel();
            await stackGoInternal(nav.to.url.toString(), { 
                preserveStack, 
                keepFocus,
                noScroll,
                replaceState,
            });
        }
    });
}

export async function stackBack() {
    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
    }

    if (history.state.stack.length > 1) {
        return await stackGoInternal(history.state.stack[history.state.stack.length - 2], {breakPreserves: true});
    } else {
        return await stackGoInternal(get(stackPopUrl), {breakPreserves: true});
    }
}

export async function stackGo(url: string, opts: {
    replaceState?: boolean;
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
    preserveStack?: boolean
} = {}) {
    stackGoInternal(url, opts);
}

async function stackGoInternal(url: string, opts: {
    replaceState?: boolean;
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
    preserveStack?: boolean;
    breakPreserves?: boolean;
} = {}) {
    const newUrl = new URL(url, window.location.href);
    if (
        newUrl.protocol !== window.location.protocol ||
        newUrl.host !== window.location.host
    ) {
        throw new Error('Navigating away from site, cannot be performed by stackGo.');
    }

    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
    }

    if (opts.preserveStack && opts.breakPreserves) {
        throw new Error(`Options 'preserveStack' and 'breakPreserves' cannot both be true.`)
    }

    const { stack, preservedIndexes = [] } = history.state as { stack: string[], preservedIndexes?: number[] };

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