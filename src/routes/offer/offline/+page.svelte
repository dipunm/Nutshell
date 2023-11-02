<script lang="ts">

	import NavBar from "$lib/components/NavBar.svelte";
	import Details from "./details.svelte";
    import {type Html5QrcodeResult, Html5Qrcode} from "html5-qrcode";
    import '@material/web/button/filled-button';
    import '@material/web/progress/linear-progress';

    function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        alert(`Code matched = ${decodedText} ${JSON.stringify(decodedResult)}`);
    }

    function onScanFailure(error: string) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
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
        margin: 1rem;
        padding: 1rem;
        border: 1px solid var( --md-sys-color-outline );
    }
    
    .progress {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    <NavBar />
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