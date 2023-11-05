<script>

	import Portal from "$lib/portals/Portal.svelte";

</script>
<style>
    .circle {
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-on-color-surface);
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 3rem;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
    
</style>

<Portal target="content-appbar-start"></Portal>
<div class="container">
    <div class="circle">
        Open a wallet via the left panel.
    </div>
</div>
