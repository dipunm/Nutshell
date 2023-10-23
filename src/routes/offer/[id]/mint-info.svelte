<script lang="ts">
    import "@material/web/chips/suggestion-chip"

    export let action: () => void;
</script>
<style>
    h1 {
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    
    p {
        color: var(--md-sys-color-on-tertiary-tint );
        font-weight: 500;
        padding-bottom: 0.25rem;
        margin-bottom: 0.25rem;
        opacity: 60%;

        overflow-x: auto;
    }

    p.body-small {
        margin-bottom: 1.5rem;
    }
</style>

<h1 class="title-medium">Deposited with the following mint:</h1>
<p class="body-small">https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC</p>
<!-- <md-suggestion-chip on:click={action} label="What's a mint?"></md-suggestion-chip> -->
<dl>
    <dt class="title-medium">
        Transferring to:
    </dt>
    <dd class="body-small">
        Mint A
    </dd>
</dl>
<h1 class="title-medium">Transferring to:</h1>
<p class="body-small">Mint A</p>
<md-suggestion-chip  on:click={action} label="Transfer to another mint"></md-suggestion-chip>
