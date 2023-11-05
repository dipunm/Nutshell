<script lang="ts">
	import { createPortal } from "$lib/portals";

    export let name: string;
    let handleStart: HTMLDivElement;
    let handleEnd: HTMLDivElement;

    const contents = createPortal(name);
    $: {
        if ((handleStart ?? false) && (handleEnd ?? false)) {
            while(handleStart.nextSibling !== handleEnd) {
                handleStart.nextSibling?.remove();
            }

            if (Array.isArray($contents)) {
                $contents.forEach(el => {
                    handleEnd.parentNode!.insertBefore(el, handleEnd);
                });
            }
        }
    }
</script>

<div style="display: none;" bind:this={handleStart}></div>
<div style="display: none;" bind:this={handleEnd}></div>