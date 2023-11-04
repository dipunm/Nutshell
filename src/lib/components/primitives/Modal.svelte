<script lang="ts">
	import { afterNavigate } from "$app/navigation";
    import { createEventDispatcher } from 'svelte';
    
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
    <slot />
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

    @media (max-width: 500px) {
        dialog {
            border-radius: 0;
            margin: 0;
            max-height: 100%;
            max-width: 100%;
        }
    }
</style>