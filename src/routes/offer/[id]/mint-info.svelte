<script lang="ts">
    import "@material/web/button/filled-tonal-button"
    import "@material/web/icon/icon"
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
        margin-bottom: 0.5rem;
        opacity: 60%;

        overflow-x: auto;
    }

    p.body-medium {
        margin-bottom: 1rem;
    }

    md-filled-tonal-button {
        align-self: stretch;
    }
</style>

<h1 class="title-medium">Deposited at mint:</h1>
<p class="body-medium">
    https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC</p>
<md-filled-tonal-button href="?modal=true">What's a mint<md-icon slot="icon">help_outline</md-icon></md-filled-tonal-button>

