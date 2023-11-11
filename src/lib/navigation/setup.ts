import { beforeNavigate, goto } from "$app/navigation";
import { writable, type Readable, get } from "svelte/store";
import { getRelativeUrl, isHistoryStateInitialized, matchesCurrentOrigin, promoteToElement } from "./utils";
import type { MaybePromise } from "@sveltejs/kit";

const container = document.documentElement; // TODO: allow this to be overridden for library purposes.
export const createClickedAnchorTracker = () => {
    const lastClickedLink = writable<HTMLAnchorElement | SVGAElement | null>(null);
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
    return lastClickedLink as Readable<HTMLAnchorElement | SVGAElement | null>;
}

export type AnchorInterceptHandler = (e: { 
    url: URL, 
    anchor: HTMLAnchorElement | SVGAElement | null, 
    preventDefault: () => void 
}) => MaybePromise<void>

export function interceptAnchorSameOrigin(handler: AnchorInterceptHandler, { lastClickedAnchor } : { lastClickedAnchor: Readable<HTMLAnchorElement | SVGAElement | null>}) {
    beforeNavigate(async nav => {
        if (nav.type === 'link') {
            if (nav.to === null) return;
            if (!matchesCurrentOrigin(nav.to.url)) {
                // navigating away from site.
                return;
            }

            const anchor = get(lastClickedAnchor);
            await handler({ url: nav.to.url, anchor, preventDefault: () => nav.cancel() });
        }
    });   
}

export function interceptAnchorWithProtocol(
    handler: AnchorInterceptHandler, 
    { protocol, lastClickedAnchor }: {
        protocol: string,
        lastClickedAnchor: Readable<HTMLAnchorElement | SVGAElement | null>,
    }) {

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
          // Execute the handler and pass the URL
          const anchor = get(lastClickedAnchor);
          handler({ url: new URL(href, window.location.href), anchor, preventDefault: () => {
            event.preventDefault();
            event.stopImmediatePropagation();  
          } });
        }
    });
}