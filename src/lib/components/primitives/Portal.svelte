<script lang="ts">
	import { bindToPortal } from "$lib/portals";

    let container: HTMLDivElement;
    export let target: string;
    $: {
        if (container?.children ?? false) {
            bindToPortal(target, [...container.children]);
        } else {
            bindToPortal(target, null);
        }
    }
</script>

<div style="display:none;" bind:this={container}>
    <slot />
</div>