import { goto, beforeNavigate } from "$app/navigation";

const absoluteTest = /^(?:[a-z+]+:)?\/\//i

export const initializeHistoryStack = async () => {
    const stack = [getRelativeUrl(window.location)];
    await goto(window.location.toString(), {
        replaceState: true,
        state: {
            ...history.state,
            stack
        }
    });
    console.log('initialized stack::', history.state.stack);
}

const getRelativeUrl = (url: URL | Location) => `${url.pathname}${url.search}${url.hash}`;

export const configureNavHandling = () => beforeNavigate(async nav => {
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
    
            nav.cancel()
            await stackGo(nav.to.url.toString());
        }
    });

export async function stackBack() {
    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        throw new Error(`History API not properly configured!`);
    }

    if (window.location.search !== '' || window.location.hash !== '') {
        await stackGo(window.location.pathname);
    } else {
        await stackGo(window.location.pathname.replace(/\/[^/]+\/?$/, ''));
    }
}

export async function stackGo(url: string, opts: {
    replaceState?: boolean;
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
} = {}) {
    const newUrl = new URL(url, window.location.href);
    if (
        newUrl.protocol !== window.location.protocol ||
        newUrl.host !== window.location.host
    ) {
        throw new Error('Navigating away from site, cannot be performed by stackGo.');
    }

    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        throw new Error(`History API not properly configured!`);
    }

    const { stack } = history.state as { stack: string[] };

    const newPath = getRelativeUrl(newUrl);

    // find common path match in history stack.
    let commonIndex = stack.findLastIndex(path => newPath.startsWith(path));
    
    // keep traversing history stack until no qs found
    while (true) {
        if (commonIndex < 0) 
            break;

        let commonPathHasQS = new URL(stack[commonIndex], 
            window.location.href).search !== '';

        if (!commonPathHasQS) {
            break;
        }

        commonIndex--;
    }

    let backCount = 0;
    let replace = false;
    if (commonIndex === -1) {
        // go back to start and replace.
        backCount = stack.length - 1;
        replace = true;
    } else {
        backCount = stack.length - commonIndex - 1;
        if (stack[commonIndex] === newPath) {
            // go back if necessary to page and just "refresh" (replace)
            replace = true;
        } else if (backCount === 1) {
            // shortcut if we will go back 1 and forward 1
            backCount = 0;
            replace = true;
        }
    }

    const go = async () => {
        const newStack = replace ? 
            [...stack.slice(0, commonIndex), getRelativeUrl(newUrl)] : 
            [...stack.slice(0, commonIndex + 1), getRelativeUrl(newUrl)];

        console.log('go:::', newStack);
        debugger;
        await goto(url, {        
            ...(opts ?? {}),
            replaceState: replace,
            state: {
                ...history.state,
                ...(opts?.state ?? {}),
                stack: newStack
            }
        
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