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
    let replace_state: string | null = null;

    let node = element as Element | null;
    while (node && node !== document.documentElement) {
		if (keep_focus === null) keep_focus = node.getAttribute(`data-sveltekit-keepfocus`);
		if (noscroll === null) noscroll = node.getAttribute(`data-sveltekit-noscroll`);
		if (reload === null) reload = node.getAttribute(`data-sveltekit-reload`);
		if (replace_state === null) replace_state = node.getAttribute(`data-sveltekit-replacestate`);

		node = node.assignedSlot ?? node.parentNode as Element;
        if (node?.nodeType === 11) node = (node as Node as ShadowRoot).host
	}

    return {
		keepFocus: getOptionState(keep_focus),
		noScroll: getOptionState(noscroll),
		reload: getOptionState(reload),
		replaceState: getOptionState(replace_state)
	};
}