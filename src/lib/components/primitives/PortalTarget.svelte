<script lang="ts">
	import { createPortal } from "$lib/portals";

    function insertAfter(newNode: ChildNode, referenceNode: Element) {
        if (referenceNode.nextSibling) {
            // If there's a next sibling, insert before it
            referenceNode.parentNode!.insertBefore(newNode, referenceNode.nextSibling);
        } else {
            // Otherwise, append at the end of the parent
            referenceNode.parentNode!.appendChild(newNode);
        }
    }


    export let name: string;
    let handle: HTMLDivElement;

    const contents = createPortal(name);
    let olderContents = $contents;
    $: {
        if ((handle ?? false) && olderContents !== $contents) {
            if (Array.isArray(olderContents)) {
                olderContents.forEach(el => el.remove());
            }

            if (Array.isArray($contents)) {
                $contents.reverse().forEach(el => {
                    insertAfter(el, handle);
                });
            }

            olderContents = $contents;
        }
    }
</script>

<div style="display: none;" bind:this={handle}></div>