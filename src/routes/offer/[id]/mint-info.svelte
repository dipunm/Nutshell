<script lang="ts">
	import NavBar from "$lib/components/primitives/NavBar.svelte";
	import Portal from "$lib/components/primitives/Portal.svelte";
    import "@material/web/button/filled-tonal-button"
    import "@material/web/icon/icon"
    import "@material/web/iconbutton/icon-button"
	import WhatIsAMint from "./what-is-a-mint.svelte";
	import { stackBack, stackPopUrl } from "$lib/navigation";
	import Modal from "$lib/components/primitives/Modal.svelte";
	import { page } from "$app/stores";
</script>

<h1 class="title-medium">Deposited at mint:</h1>
<p class="body-medium">
    https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC</p>
<md-filled-tonal-button href="?modal=true">What's a mint<md-icon slot="icon">help_outline</md-icon></md-filled-tonal-button>

<Portal target="modal">
    <Modal condition={() => $page.url.searchParams.has('modal')} on:close={() => stackBack()}>
        <div class="modal-container">
            <NavBar>
                <md-icon-button href={$stackPopUrl}>
                    <md-icon>arrow_back</md-icon>
                </md-icon-button>
                <h1 class="headline-small">What is a mint?</h1>
            </NavBar>
            <div class="contents">
                <WhatIsAMint />
            </div>
        </div>
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


    .modal-container {
        padding: 1rem;
        width: 90vw;
        height: fit-content;
        max-width: 600px;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 500px) {
        .modal-container {
            width: 100vw;
            height: 100%;
            background-color: var(--md-sys-color-surface);
            max-height: none;
            position: fixed;
        }
    }

    .modal-container h1 {
        margin: 0 1rem;
    }

    .modal-container .contents {
        padding: 1rem; 
        margin-right: -1rem;
        padding-right: 2rem;
        overflow-y: auto
    }
</style>