<script>
	import Card from "$lib/components/primitives/Card.svelte";
	import NavBar from "$lib/components/primitives/NavBar.svelte";
    import "@material/web/iconbutton/icon-button"

	import { stackBack } from "$lib/navigation";
</script>
<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }
</style>

<NavBar>
    <md-icon-button on:click={() => stackBack()}><md-icon>arrow_back</md-icon></md-icon-button>
</NavBar>
<div class="container">
    <Card color="surface-container-highest">
        Create an invoice
    </Card>
    <Card color="surface-container-highest">
        Import an offer
    </Card>
    <Card color="surface-container-highest">
        Reclaim an offer
    </Card>
</div>