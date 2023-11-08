<script>
	import Card from "$lib/components/primitives/Card.svelte";
    import "@material/web/iconbutton/icon-button"
    import "@material/web/icon/icon"

	import Portal from "$lib/portals/Portal.svelte";
	import { base } from "$app/paths";
</script>
<style>
    .container-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 14rem));
        gap: 2rem;
        justify-content: center;
        /* margin: 0 auto; */
    }

    .card-inner {
        padding: 1.5rem;
        min-height: 20em;
        max-width: 14rem;
    }

    .container-grid p {
        margin: 0 0.5rem;
    }

    h1 {
        margin: 0 0.5rem;
    }

    .icon {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        font-size: 4rem;
        width: 4rem;
        height: 4rem;
    }
</style>

<Portal target="content-appbar-start">
    <md-icon-button href="router:pop-stack"><md-icon>arrow_back</md-icon></md-icon-button>
</Portal>
<Portal target="content-appbar">
    <h1 class="headline-small">Spend</h1>
</Portal>

<div class="container-grid">
    <Card color="primary" href="{base}/camera" preserveStack>
        <div class="card-inner">
            <h1 class="headline-small">Pay an invoice</h1>
            <p>Request a payment on the Bitcoin Lightning Network</p>
            <md-icon class="icon">qr_code_scanner</md-icon>
        </div>
    </Card>
    <Card color="primary" href="#">
        <div class="card-inner">
            <h1 class="headline-small">Create an offer</h1>
            <p>Scan or import a mint offer</p>
            <md-icon class="icon">file_upload</md-icon>
        </div>
    </Card>
    <Card color="primary" href="#">
        <div class="card-inner">
            <h1 class="headline-small">Sweep wallet</h1>
            <p>Take back an unclaimed offer</p>
            <md-icon class="icon">clear_all</md-icon>
        </div>
    </Card>
</div>