<script lang="ts">
	import Portal from "$lib/portals/Portal.svelte";
    import "@material/web/button/filled-tonal-button"
    import "@material/web/icon/icon"
    import "@material/web/iconbutton/icon-button"
	import WhatIsAMint from "./what-is-a-mint.svelte";
	import { stackBack } from "$lib/navigation";
	import Modal from "$lib/components/primitives/Modal.svelte";
	import { page } from "$app/stores";
</script>

<h1 class="title-medium">Deposited at mint:</h1>
<p class="body-medium">
    https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC</p>
<md-filled-tonal-button href="?modal=true">What's a mint<md-icon slot="icon">help_outline</md-icon></md-filled-tonal-button>

<Portal target="target:modal">
    <Modal condition={() => $page.url.searchParams.has('modal')} on:close={() => stackBack()}>
        <svelte:fragment slot="appbar-start">
            <md-icon-button href="router:pop-stack">
                <md-icon>arrow_back</md-icon>
            </md-icon-button>
        </svelte:fragment>
        <svelte:fragment slot="appbar-title">What is a mint?</svelte:fragment>
        <WhatIsAMint />
    </Modal>
</Portal>

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
        opacity: 75%;

        overflow-x: auto;
    }

    p.body-medium {
        margin-bottom: 1rem;
    }

    md-filled-tonal-button {
        align-self: stretch;
    }
</style>