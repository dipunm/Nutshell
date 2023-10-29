<script>
	import PageLayout from "./PageLayout.svelte";

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
<PageLayout>
<div class="container">
    <div class="circle">
        Select a mint on the left.
    </div>
</div>
</PageLayout>