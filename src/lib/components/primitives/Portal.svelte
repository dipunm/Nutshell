<script lang="ts">
	import { openPortal, type Portal } from "$lib/portals";
	import { onDestroy, tick } from "svelte";

    let container: HTMLDivElement;
    export let target: string;
    let observer: MutationObserver;
    let key = 0;
    let portal: Portal | null;
    function portalToTarget(target: string) {
        portal?.close();
        portal = openPortal(target);
    }
    $: portalToTarget(target);

    async function forceRerender() {
        // By forcing the component to remove all
        // contents and then re-render them, we
        // force all subcomponents to update
        key = 1;
        await tick();
        key = 0
    }

    function setObserver(val: MutationObserver) {
        observer = val;
    }

    function disconnectObserver() {
        observer?.disconnect();
    }

    function setupObserver(container: HTMLDivElement) {
        observer.observe(container, { childList: true, subtree: true });
    }

    $: {
        disconnectObserver();
        if (container?.childNodes ?? false) {
            const content = [...container.childNodes];
            portal?.tunnel(content);
            tick().then(() => {
                if (container ?? false) {
                    setObserver(new MutationObserver(() => {
                        forceRerender();
                    }));

                    setupObserver(container);
                }
            });
        } else {
            portal?.clear();
        }
    }

    onDestroy(() => {
        observer?.disconnect();
        portal?.close();
    });
    
</script>

<div style="display:none;" bind:this={container}>
    {#if key === 0}
    <slot />
    {/if}
</div>
