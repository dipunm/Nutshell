<script lang="ts">
	import { createPortal } from "$lib/portals";

    export let name: string;
    let handle: HTMLDivElement;

    const contents = createPortal(name);
    let olderContents = $contents;
    $: {
        if (Array.isArray(olderContents)) {
            olderContents.forEach(el => el.remove());
        }

        if (Array.isArray($contents)) {
            $contents.reverse().forEach(el => handle?.insertAdjacentElement('afterend', el));
        }

        olderContents = $contents;
    }
</script>

<div style="display: none;" bind:this={handle}></div>