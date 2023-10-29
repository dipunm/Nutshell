<script>
	import NavBar from "$lib/components/NavBar.svelte";
</script>
<style>
    .nav {
        padding: 1rem 0;
    }
</style>
<section class="nav">
    <NavBar>
        <slot name="nav"></slot>
    </NavBar>
</section>

<slot></slot>