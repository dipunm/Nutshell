<script>
	import { assets } from "$app/paths";
	import Card from "../primitives/Card.svelte";
</script>
<style>
    img.hero {
        bottom: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

</style>
<Card height="12rem">
    <img class="hero" src="{assets}/offer-hero.png" alt="
        Cash falling from the sky with a large Bitcoin representative coin front and center.
    "/>
</Card>