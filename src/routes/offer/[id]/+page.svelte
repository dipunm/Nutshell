<script lang="ts">
    import { assets } from '$app/paths';
    import { page } from "$app/stores";
    import "@material/web/button/filled-button"
    import "@material/web/button/outlined-button"
    import "@material/web/button/filled-tonal-button"
    import "@material/web/button/text-button"
    import "@material/web/iconbutton/icon-button"
    import "@material/web/chips/suggestion-chip"
    import "@material/web/chips/assist-chip"
    import "@material/web/fab/fab"
    import "@material/web/icon/icon"
	import Card from '$lib/components/Card.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Details from './details.svelte';
	import MintInfo from './mint-info.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import WhatIsAMint from './what-is-a-mint.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    
    let modal: HTMLDialogElement;
    function openModal() {
        goto('?modal=true');
        modal.showModal();
    }

    function closeModal(event: Event) {
        event.preventDefault(); // We don't want to submit this fake form
        modal.close(); // Have to send the select box value here.
    }

    onMount(() => {
        const onClose = () => {
            history.go(-1);
        };
        modal.addEventListener('close', onClose);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });
        const unsubscribe = page.subscribe($page => {
            if ($page.url.searchParams.get('modal') === 'true') {
                if (!modal.open) {
                    modal.showModal();
                }
            } else {
                modal.close();
            }
        });

        return () => {
            unsubscribe();
            modal.removeEventListener('close', onClose);
        }
    });
</script>

<style>
    .container {
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 1000px;
    }

    img.hero {
        bottom: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

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
        background-color: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
        border-radius: 1.5rem;
        border: none;
        padding: 0;
    }
    
    .modal-container {
        padding: 1rem;
        width: 90vw;
        max-width: 600px;
        height: 80vh;
        display: flex;
        flex-direction: column;
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
            height: 100vh;
        }

        dialog {
            border-radius: 0;
            margin: 0;
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>

<div class="container">
    <NavBar />
    <Card color="tertiary" height="12rem">
        <img class="hero" src="{assets}/offer-hero.png" alt="">
    </Card>
    <section class="details">
        <Details />
    </section>
    <Card color="surface-container-highest" icon="mint" class="mint-info">
        <MintInfo action={openModal} />
    </Card>
    <section class="calltoaction">
        <md-filled-button>Accept the offer</md-filled-button>
    </section>
</div>

<dialog bind:this={modal}>
    <div class="modal-container">
        <NavBar>
            <md-icon-button on:click={closeModal}>
                <md-icon>arrow_back</md-icon>
            </md-icon-button>
        </NavBar>
        <section class="contents">
            <WhatIsAMint />
        </section>
    </div>
</dialog>
