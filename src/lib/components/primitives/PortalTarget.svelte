<script lang="ts">
	import { observePortal } from "$lib/portals";

    export let name: string;
    let handleStart: HTMLDivElement;
    let handleEnd: HTMLDivElement;

    const contents = observePortal(name);
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

<div hidden={true} style="display: none;" bind:this={handleStart}></div>
<div hidden={true} style="display: none;" bind:this={handleEnd}></div>