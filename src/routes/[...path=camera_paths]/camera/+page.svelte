<script lang="ts">

	import AppBar from "$lib/components/primitives/AppBar.svelte";
	import Details from "./details.svelte";
    import {type Html5QrcodeResult, Html5Qrcode} from "html5-qrcode";
    import '@material/web/button/filled-button';
    import '@material/web/progress/linear-progress';
    import '@material/web/icon/icon';
    import '@material/web/iconbutton/icon-button';
	import { navCanPopStack } from "$lib/navigation";
	import { onDestroy, onMount } from "svelte";

    function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        alert(`Code matched = ${decodedText} ${JSON.stringify(decodedResult)}`);
    }

    function onScanFailure(error: string) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        // This is quite noisy!
        // console.warn(`Code scan error = ${error}`);
    }

    let scanner: Html5Qrcode;
    async function startCamera() {
        await scanner?.stop();
        scanner = new Html5Qrcode('reader');
        await scanner.start({ facingMode: "environment" }, { fps: 10 }, onScanSuccess, onScanFailure);
    }

    onDestroy(async () => await scanner?.stop())
</script>
<style>
    .container {
        padding: 0 1rem 3rem 1rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 1000px;
    }

    .cam-window {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid var( --md-sys-color-outline );
    }
    
    .progress {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem
    }

    .progress md-linear-progress {
        width: 70%;
    }

    #reader {
        display:flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="container" data-sveltekit-noscroll data-sveltekit-keepfocus>
    <AppBar>
        {#if navCanPopStack()}
            <md-icon-button class="backbutton" href="router:pop-stack" data-><md-icon>arrow_back</md-icon></md-icon-button>
        {/if}
    </AppBar>

    <!-- <Card color="tertiary" height="12rem">
        <img class="hero" src="{assets}/offer-hero.png" alt="">
    </Card> -->
    <section class="details">
        <Details />
    </section>

    <div class="cam-window">
        <div class="progress">
            <md-linear-progress value={4/6} four-color={true} />
            (4 out of 6)
        </div>
        <div id="reader">
            <md-filled-button on:click={startCamera}>Click here to start camera</md-filled-button>
        </div>
    </div>
</div>