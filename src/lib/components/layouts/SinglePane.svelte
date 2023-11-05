<script>
    import { assets } from "$app/paths";
	import AppBar from "../primitives/AppBar.svelte";

</script>
<style>
    .container {
        padding: 0 1rem 3rem 1rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 1000px;
    }
</style>
<div class="container">
    <AppBar>
        <slot name="appbar" />
    </AppBar>
    <slot />
</div>