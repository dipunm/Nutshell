<script lang="ts">
	import { assets } from "$app/paths";
	import Card from "$lib/components/Card.svelte";


	import NavBar from "$lib/components/NavBar.svelte";
	import { onMount } from "svelte";
	import Details from "./details.svelte";
    import {Html5QrcodeScanner, type Html5QrcodeResult, Html5Qrcode} from "html5-qrcode";

    function onScanSuccess(decodedText: string, decodedResult: Html5QrcodeResult) {
        // handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    function onScanFailure(error: string) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
    }

    onMount(async () => {
        const cameras = await Html5Qrcode.getCameras();
        cameras.find(c => alert(c.label));

        const html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: {width: 250, height: 250} },
            /* verbose= */ false
        );
    
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    })

</script>
<style>
    .container {
        padding: 0 1rem 3rem 1rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 1000px;
    }

    /* img.hero {
        bottom: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    } */
</style>

<div class="container" data-sveltekit-noscroll data-sveltekit-keepfocus>
    <NavBar />
    <!-- <Card color="tertiary" height="12rem">
        <img class="hero" src="{assets}/offer-hero.png" alt="">
    </Card> -->
    <section class="details">
        <Details />
    </section>

    <div id="reader"></div>
</div>