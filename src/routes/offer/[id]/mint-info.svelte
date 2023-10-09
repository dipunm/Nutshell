<script lang="ts">
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
</style>

<h1 class="title-medium">Deposited with the following mint:</h1>
<p class="body-small">https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC</p>
<div style="height:0.5rem"></div>
<md-suggestion-chip on:click={action} label="What's a mint?"></md-suggestion-chip>
