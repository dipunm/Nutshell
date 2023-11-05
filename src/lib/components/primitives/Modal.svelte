<script lang="ts">
	import { afterNavigate } from "$app/navigation";
    import { createEventDispatcher } from 'svelte';
	import AppBar from "./AppBar.svelte";
    
    export let condition: () => boolean;
    let modal: HTMLDialogElement;

    afterNavigate(() => {
        if(condition()) {
            if (!modal.open) {
                modal.showModal();
            }
        } else {
            if (modal.open) {
                modal.close();
            }
        }
    });

    const dispatch = createEventDispatcher();
    const closeHandler = (e: Event) => {
        if (condition()) {
            dispatch('close', e);
        }
    };

    $: modal?.addEventListener('click', (e: Event) => {
        if (e.target === modal) {
            modal.close();
        }
    });
</script>

<dialog bind:this={modal} on:close={closeHandler}>
    <div class="modal-container">
        <AppBar>
            <slot name="appbar-start" />
            {#if $$slots["appbar-title"]}
            <h1 class="headline-small">
                <slot name="appbar-title" />
            </h1>
            {/if}
        </AppBar>
        <div class="contents">
            <slot />
        </div>
    </div>
</dialog>

<style>
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

    @media (max-width: 500px) {
        dialog {
            border-radius: 0;
            margin: 0;
            max-height: 100%;
            max-width: 100%;
        }

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