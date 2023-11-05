<script lang="ts">
	import { bindToPortal, appendToPortal } from "$lib/portals";
	import { onDestroy, tick } from "svelte";

    let container: HTMLDivElement;
    export let target: string;
    let observer: MutationObserver;
    let key = 0;

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
            bindToPortal(target, content);
            tick().then(() => {
                if (container ?? false) {
                    setObserver(new MutationObserver(() => {
                        forceRerender();
                    }));

                    setupObserver(container);
                }
            });
        } else {
            bindToPortal(target, null);
        }
    }

    onDestroy(() => {
        observer?.disconnect();
        bindToPortal(target, null);
    });
    
</script>

<div style="display:none;" bind:this={container}>
    {#if key === 0}
    <slot />
    {/if}
</div>
