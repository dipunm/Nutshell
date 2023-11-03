<script>
	import Card from "$lib/components/primitives/CardOld.svelte";
</script>
<style>
    .container {
        display: grid;
        grid-template-columns: 2;
        grid-template-rows: 2;
    }
</style>

<div class="container">
    <Card color="surface-container-highest">
        Create an offer
    </Card>
    <Card color="surface-container-highest">
        Pay an invoice
    </Card>
    <Card color="surface-container-highest">
        Sweep funds
    </Card>
</div>