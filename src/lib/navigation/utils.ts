export function getOptionState(value: string | null) {
    switch (value) {
        case '':
        case 'true':
            return true;
        case 'off':
        case 'false':
        default:
            return false;
    }
}

export function getRouterOptions(element: Element) {
    let keep_focus: string | null = null;
    let noscroll: string | null = null;
    let reload: string | null = null;

    let node = element as Element | null;
    while (node && node !== document.documentElement) {
		if (keep_focus === null) keep_focus = node.getAttribute(`data-sveltekit-keepfocus`);
		if (noscroll === null) noscroll = node.getAttribute(`data-sveltekit-noscroll`);
		if (reload === null) reload = node.getAttribute(`data-sveltekit-reload`);

		node = node.assignedSlot ?? node.parentNode as Element;
        if (node?.nodeType === 11) node = (node as Node as ShadowRoot).host
	}

    return {
		keepFocus: getOptionState(keep_focus),
		noScroll: getOptionState(noscroll),
		reload: getOptionState(reload),
	};
}

export const getRelativeUrl = (url: URL | Location) => `${url.pathname}${url.search}${url.hash}`;

export function promoteToElement(target: EventTarget): target is Element {
    return true;
}

export function isHistoryStateInitialized(state: unknown): state is { stack: string[], preservedIndexes?: number[] } {
    return (
        typeof state === 'object' && 
        state !== null &&
        'stack' in state && 
        Array.isArray(state.stack) &&
        state.stack.length > 0
    )
}

export function assertHistoryStateInitialized(state: unknown): asserts state is { stack: string[], preservedIndexes?: number[] } {
    if (isHistoryStateInitialized(state)) {
        throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
    }
}

export function matchesCurrentOrigin(url: URL) {
    return url.protocol === window.location.protocol && url.host === window.location.host;
}