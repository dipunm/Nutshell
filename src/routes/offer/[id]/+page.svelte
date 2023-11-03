<script lang="ts">
    import { assets, base } from '$app/paths';
    import { page } from "$app/stores";
	import { afterNavigate, goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import "@material/web/button/filled-button"
    import "@material/web/iconbutton/icon-button"
    import "@material/web/icon/icon"
	import Card from '$lib/components/primitives/CardOld.svelte';
	import NavBar from '$lib/components/primitives/NavBar.svelte';
	import Details from './details.svelte';
	import MintInfo from './mint-info.svelte';
	import WhatIsAMint from './what-is-a-mint.svelte';
	import { stackBack } from '$lib/navigation';
	import SinglePane from '$lib/components/layouts/SinglePane.svelte';
	import CashHero from '$lib/components/modules/CashHero.svelte';
    
    let modal: HTMLDialogElement;

    afterNavigate(() => {
        if($page.url.searchParams.get('modal')) {
            if (!modal.open) {
                modal.showModal();
            }
        } else {
            if (modal.open) {
                modal.close();
            }
        }
    });

    onMount(() => {
        const onClose = (e: Event) => {
            if ($page.url.searchParams.has('modal')) {
                stackBack();
            }
        };
        modal.addEventListener('close', onClose);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });

        return () => {
            modal.removeEventListener('close', onClose);
        }
    });
</script>

<style>
    .details {
        padding: 0 16px;
        margin-bottom: 3rem;
    }
    
    .calltoaction { 
        align-self: center;
    }




    dialog::backdrop {
        background-color: rgba(0,0,0, 0.8);
    }
    
    dialog {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border-radius: 1.5rem;
        border: none;
        padding: 0;
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

    .modal-container h1 {
        margin: 0 1rem;
    }

    dialog .contents {
        padding: 1rem; 
        margin-right: -1rem;
        padding-right: 2rem;
        overflow-y: auto
    }

    @media (max-width: 500px) {
        .modal-container {
            width: 100vw;
            height: 100%;
            background-color: var(--md-sys-color-surface);
            max-height: none;
            position: fixed;
        }

        dialog {
            border-radius: 0;
            margin: 0;
            max-height: 100%;
            max-width: 100%;
        }
    }

    h2 {
        text-align: center;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    h2 .zeros {
        opacity: 40%;
    }

    h2 .amount {
        color: var(--md-sys-color-primary);
        font-weight: 500;
    }

</style>

<SinglePane>
    <section class="details">
        <Details />
    </section>
    <Card color="surface-container-highest" icon="mint" class="mint-info">
        <h2 class="headline-small zeros">
            <span class="zeros">0</span><span class="amount headline-medium">.</span><span class="zeros"> 00 0</span><span class="amount headline-medium">50 204</span> <span class="label-large">BTC</span>
        </h2>
        <MintInfo />
    </Card>
    <section class="calltoaction" data-sveltekit-noscroll="false" data-sveltekit-keepfocus="false">
        <md-filled-button href={`${base}/accounts`}>Claim the offer</md-filled-button>
    </section>
</SinglePane>

<dialog bind:this={modal}>
    <div class="modal-container">
        <NavBar>
            <md-icon-button href={`/Nutshell/offer/${$page.params.id}`}>
                <md-icon>arrow_back</md-icon>
            </md-icon-button>
            <h1 class="headline-small">What is a mint?</h1>
        </NavBar>
        <section class="contents">
            <WhatIsAMint />
        </section>
    </div>
</dialog>
