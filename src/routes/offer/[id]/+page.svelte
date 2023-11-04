<script lang="ts">
    import { base } from '$app/paths';
	import "@material/web/button/filled-button"
    import "@material/web/icon/icon"
	import Card from '$lib/components/primitives/Card.svelte';
	import SinglePane from '$lib/components/layouts/SinglePane.svelte';
	import MintInfo from '$modules/offer/mint-info.svelte';
	import Amount from '$modules/offer/amount.svelte';
</script>

<SinglePane>
    <section class="details">
        <h1 class="headline-small">You received an offer for:</h1>
    </section>
    <section>
        <Card color="surface-container-highest">
            <md-icon slot="icon" style="color: #F7931A;">currency_bitcoin</md-icon>
            <Amount />
            <MintInfo />
        </Card>
    </section>
    <section class="calltoaction">
        <md-filled-button href={`${base}/accounts`}>Claim the offer</md-filled-button>
    </section>
</SinglePane>

<style>
    section {
        margin-bottom: 3rem;
        text-align: center;
    }
    .details {
        padding: 0 1rem;
    }    
</style>
