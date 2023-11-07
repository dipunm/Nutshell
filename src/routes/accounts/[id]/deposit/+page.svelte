<script>
	import Card from "$lib/components/primitives/Card.svelte";
    import "@material/web/iconbutton/icon-button"
    import "@material/web/icon/icon"

	import Portal from "$lib/portals/Portal.svelte";
	import { stackPopUrl } from "$lib/navigation";
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
    <md-icon-button href={$stackPopUrl}><md-icon>arrow_back</md-icon></md-icon-button>
</Portal>
<Portal target="content-appbar">
    <h1 class="headline-small">Deposit</h1>
</Portal>

<div class="container-grid">
    <Card color="surface-container-high" href="#">
        <div class="card-inner">
            <h1 class="headline-small">Create an invoice</h1>
            <p>Request a payment on the Bitcoin Lightning Network</p>
            <md-icon class="icon">bolt</md-icon>
        </div>
    </Card>
    <Card color="surface-container-high" href="{base}/offer/offline" preserveStack>
        <div class="card-inner">
            <h1 class="headline-small">Import an offer</h1>
            <p>Scan or import a mint offer</p>
            <md-icon class="icon">file_download</md-icon>
        </div>
    </Card>
    <Card color="surface-container-high" href="#">
        <div class="card-inner">
            <h1 class="headline-small">Reclaim an offer</h1>
            <p>Take back an unclaimed offer</p>
            <md-icon class="icon">undo</md-icon>
        </div>
    </Card>
</div>