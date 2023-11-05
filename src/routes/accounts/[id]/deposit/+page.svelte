<script>
	import Card from "$lib/components/primitives/Card.svelte";
    import "@material/web/iconbutton/icon-button"

	import Portal from "$lib/components/primitives/Portal.svelte";
</script>
<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }

    h1 {
        margin: 0 1rem;
    }
</style>

<Portal target="content-appbar">
    <h1 class="headline-small">Deposit</h1>
</Portal>

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