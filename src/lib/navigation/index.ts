import { goto, beforeNavigate } from "$app/navigation";
import { page } from "$app/stores";
import { get, writable } from "svelte/store";

const initializeHistoryStack = async () => {
    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        const stack = [getRelativeUrl(window.location)];
        await goto(window.location.toString(), {
            replaceState: true,
            state: {
                ...history.state,
                stack
            }
        });
    }
}

export const stackPopUrl = writable('');
page.subscribe((p) => {
    if (!p?.url) return;
    
    if (p.url.search !== '' || p.url.hash !== '') {
        stackPopUrl.set(p.url.pathname);
    } else {
        stackPopUrl.set(p.url.pathname.replace(/\/[^/]+\/?$/, ''));
    }
});

const getRelativeUrl = (url: URL | Location) => `${url.pathname}${url.search}${url.hash}`;

export const activateNavigationStackBehaviour = () => {
    initializeHistoryStack();
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

            nav.cancel()
            await stackGo(nav.to.url.toString());
        }
    });
}

export async function stackBack() {
    return await stackGo(get(stackPopUrl));
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
    const extras = {} as { keepFocus?: boolean, noScroll?: boolean };
    if (commonIndex === -1) {
        // go back to start and replace.
        backCount = stack.length - 1;
        replace = true;
        extras.keepFocus = false;
        extras.noScroll = false;
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