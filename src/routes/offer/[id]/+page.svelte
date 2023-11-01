<script lang="ts">
    import { assets, base } from '$app/paths';
    import { page } from "$app/stores";
	import { afterNavigate, goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import "@material/web/button/filled-button"
    import "@material/web/iconbutton/icon-button"
    import "@material/web/icon/icon"
	import Card from '$lib/components/Card.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Details from './details.svelte';
	import MintInfo from './mint-info.svelte';
	import WhatIsAMint from './what-is-a-mint.svelte';
    
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
                history.go(-1);
            }
        };
        modal.addEventListener('close', onClose);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });
        const unsubscribe = page.subscribe($page => {
            if ($page.url.searchParams.has('modal')) {
                if (!modal.open) {
                    modal.showModal();
                }
            } else {
                if (modal.open) {
                    modal.close();
                }
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
        padding: 0 1rem 3rem 1rem;
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
            height: 100vh;
            max-height: none;
        }

        dialog {
            border-radius: 0;
            margin: 0;
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>

<div class="container" data-sveltekit-noscroll data-sveltekit-keepfocus>
    <NavBar />
    <Card color="tertiary" height="12rem">
        <img class="hero" src="{assets}/offer-hero.png" alt="">
    </Card>
    <section class="details">
        <Details />
    </section>
    <Card color="surface-container-highest" icon="mint" class="mint-info">
        <MintInfo />
    </Card>
    <section class="calltoaction" data-sveltekit-noscroll="false" data-sveltekit-keepfocus="false">
        <md-filled-button href={`${base}/accounts`}>Accept the offer</md-filled-button>
    </section>
</div>

<dialog bind:this={modal}>
    <div class="modal-container">
        <NavBar>
            <md-icon-button href={`/Nutshell/offer/${$page.params.id}`}>
                <md-icon>arrow_back</md-icon>
            </md-icon-button>
            <h1 class="headline-medium">What is a mint?</h1>
        </NavBar>
        <section class="contents">
            <WhatIsAMint />
        </section>
    </div>
</dialog>
