import { goto } from "$app/navigation";

function stackNavigate(stackId: string, url?: string, opts: {
    replaceState?: boolean;
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
} = {}) {
    const currentState = history.state;
    const depth = currentState?.stackId === stackId ? (currentState?.depth ?? 1) + 1 : 1

    goto(
        url ?? window.location.toString(), 
        {
            keepFocus: true,
            noScroll: true,
            ...opts,
            state: {
                stackId,
                depth
            }
        }
    );
}

function gotoAsStack(path: string, opts: {
    replaceState?: boolean;
    noScroll?: boolean;
    keepFocus?: boolean;
    invalidateAll?: boolean;
    state?: any;
} = {}) {
    const currentPath = window.location.pathname.split(/\//g);
    const newPath = path.split(/\//g);
    const commonPath = newPath.slice(0, newPath.findIndex((seg, i) => currentPath[i] !== seg));
    const pastPaths = (history.state?.history ?? []) as string[];
    const commonPastIndex = pastPaths.indexOf('/' + commonPath.join('/'));

    const go = () => goto(path, {
        keepFocus: true,
        noScroll: true, 
        ...(opts ?? {}),
        state: {
            ...(opts?.state ?? {}),
            history: [ ...(history.state?.history ?? []), path ]
        }
    });

    if (commonPastIndex !== -1) {
        const handler = () => {
            window.removeEventListener('popstate', handler);
            go();
        }
        window.addEventListener('popstate', handler);
        history.go(pastPaths.length - commonPastIndex);
    } else {
        go();
    }
}

