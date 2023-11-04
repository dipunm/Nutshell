<script>
    import { assets } from "$app/paths";
	import NavBar from "../primitives/NavBar.svelte";

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
    <NavBar>
        <slot name="navbar" />
    </NavBar>
    <slot />
</div>