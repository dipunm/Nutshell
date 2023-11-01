<script lang="ts">

	import NavBar from "$lib/components/NavBar.svelte";
	import Details from "./details.svelte";
    import {type Html5QrcodeResult, Html5Qrcode} from "html5-qrcode";
    import '@material/web/button/filled-button';

    function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        alert(`Code matched = ${decodedText} ${decodedResult}`);
    }

    function onScanFailure(error: string) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
        alert(`Code scan error = ${error}`);
    }

    function startCamera() {
        const scanner = new Html5Qrcode('reader');
        scanner.start({ facingMode: "environment" }, { fps: 10 }, onScanSuccess, onScanFailure);
    }
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
        margin: 2rem;
        padding: 2rem;
        border: 1px solid var( --md-sys-color-outline );
    }

    #reader {
        display:flex;
        align-items: center;
        justify-content: center;
    }
</style>

<div class="container" data-sveltekit-noscroll data-sveltekit-keepfocus>
    <NavBar />
    <!-- <Card color="tertiary" height="12rem">
        <img class="hero" src="{assets}/offer-hero.png" alt="">
    </Card> -->
    <section class="details">
        <Details />
    </section>

    <div class="cam-window">
        <div id="reader">
            <md-filled-button on:click={startCamera}>Click here to start camera</md-filled-button>
        </div>
    </div>
</div>