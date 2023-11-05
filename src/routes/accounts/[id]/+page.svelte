<script lang="ts">
	import type { OutlinedTextField } from "@material/web/textfield/internal/outlined-text-field.js";

    import "@material/web/iconbutton/icon-button"
    import "@material/web/iconbutton/filled-icon-button"
    import "@material/web/icon/icon"
    import "@material/web/button/filled-button"
    import "@material/web/button/text-button"
    import "@material/web/textfield/outlined-text-field"
    import "@material/web/textfield/filled-text-field"
    import "@material/web/menu/menu-item"

    import { onNavigate } from '$app/navigation';

	import { base } from "$app/paths";
    import { page } from '$app/stores';
	import Portal from "$lib/components/primitives/Portal.svelte";
	import DropMenu from "$lib/components/primitives/DropMenu.svelte";
	import { tick } from "svelte";
    
    $: toggle = false;


    onNavigate(() => { 
        toggle = false 
    });

    function toggleEditor(on: boolean) {
        toggle = on;
    }

    function focus(el: OutlinedTextField) {
        tick().then(() => {
            el.focus();
            el.select();
        });
    }
</script>

<Portal target="content-appbar-start">
    <span>hello</span>
</Portal>
<Portal target="content-appbar">
    {#if toggle}
    <md-outlined-text-field use:focus id="nav-title-edit" label="Name" value={'Unnamed Wallet 01'}></md-outlined-text-field>
    <md-filled-icon-button on:submit={() => {alert('hi')}}><md-icon>done</md-icon></md-filled-icon-button>
    <md-icon-button  on:click={() => toggleEditor(false)}><md-icon>clear</md-icon></md-icon-button>
    {:else}
    <h1 class="headline-small">Unnamed Wallet {$page.params.id.toString().padStart(2, '0')}</h1>
    <DropMenu>
        <md-menu-item on:click={() => toggleEditor(true)}>
            <div slot="headline" style="white-space: nowrap;">Rename wallet</div>
        </md-menu-item>
        <md-menu-item href="?backup">
            <div slot="headline" style="white-space: nowrap;">Backup</div>
        </md-menu-item>
        <md-menu-item href="?restore">
            <div slot="headline" style="white-space: nowrap;">Restore</div>
        </md-menu-item>
        <md-menu-item href="?erase">
            <div slot="headline" style="white-space: nowrap;">Erase</div>
        </md-menu-item>
    </DropMenu>
    {/if}
<!-- 
    Things we can do with the mint:
    - Rename the mint.
    - Delete the mint.
    - Backup mint tokens.
    - Backup mint histry.
    - Restore from mint.
    - View seed.

    Things that cannot be changed:
    - Mint url
    - Mint seed
 -->
</Portal>




<!-- <svelte:fragment slot="nav">
    {#if toggle}
    <md-icon-button on:click={() => stackBack()}><md-icon>arrow_back</md-icon></md-icon-button>
    <h1 class="headline-small">Unnamed Wallet 01</h1>
    <md-text-button has-icon on:click={() => toggleEditor(false) }><md-icon slot="icon">edit</md-icon>Edit</md-text-button>
    {:else}

    {/if}
</svelte:fragment> -->

<div class="container">

    <section class="header">
        <div class="amount headline-medium">
            1 00 000 000 sats
        </div>
        <div class="btn-row">
            <md-filled-button href={`${base}/accounts/${$page.params.id}/deposit`}><md-icon slot="icon">download</md-icon>Deposit</md-filled-button>
            <md-filled-button><md-icon slot="icon">file_upload</md-icon>Spend</md-filled-button>
        </div>
    </section>
    <ul class="transactions">
        <li class="transaction" id="transaction-1">
            <md-focus-ring for={`transaction-1`} />
            <md-ripple />

            <md-icon class="neg">account_balance_wallet</md-icon>
            <div class="col">
                <span class="title-large">- 13 500 sats</span>
                <span class="title-small">For beer</span>
            </div>
            <span class="label-medium">just now</span>
        </li>
        
        <li class="transaction" id="transaction-2">
            <md-focus-ring for={`transaction-2`} />
            <md-ripple />

            <md-icon class="neg">bolt</md-icon>
            <div class="col">
                <span class="title-large">- 50 sats</span>
                <span class="title-small">zap on nostr</span>
            </div>
            <span class="label-medium">2 mins ago</span>
        </li>

        <li class="transaction" id="transaction-3">
            <md-focus-ring for={`transaction-3`} />
            <md-ripple />

            <md-icon class="neg">bolt</md-icon>
            <div class="col">
                <span class="title-large">- 1 500 sats</span>
                <span class="title-small">tip to barry@zeus.ln</span>
            </div>
            <span class="label-medium">2 days ago</span>
        </li>

        <li class="transaction" id="transaction-1">
            <md-focus-ring for={`transaction-1`} />
            <md-ripple />

            <md-icon>account_balance_wallet</md-icon>
            <div class="col">
                <span class="title-large">+ 500 sats</span>
                <span class="title-small">Gift from Ben</span>
            </div>
            <span class="label-medium">2 weeks ago</span>
        </li>
        
        <li class="transaction" id="transaction-2">
            <md-focus-ring for={`transaction-2`} />
            <md-ripple />

            <md-icon>bolt</md-icon>
            <div class="col">
                <span class="title-large">+ 500 sats</span>
                <span class="title-small">block clock sale</span>
            </div>
            <span class="label-medium">2 months ago</span>
        </li>

        <li class="transaction" id="transaction-3">
            <md-focus-ring for={`transaction-3`} />
            <md-ripple />

            <md-icon class="neg">bolt</md-icon>
            <div class="col">
                <span class="title-large">- 500 sats</span>
                <span class="title-small">tip to barry@zeus.ln</span>
            </div>
            <span class="label-medium">6 months ago</span>
        </li>

        <li class="transaction" id="transaction-1">
            <md-focus-ring for={`transaction-1`} />
            <md-ripple />

            <md-icon class="neg">bolt</md-icon>
            <div class="col">
                <span class="title-large">- 500 sats</span>
                <span class="title-small">For beer</span>
            </div>
            <span class="label-medium">1 year ago</span>
        </li>
        
        <li class="transaction" id="transaction-2">
            <md-focus-ring for={`transaction-2`} />
            <md-ripple />

            <md-icon class="neg">bolt</md-icon>
            <div class="col">
                <span class="title-large">- 500 sats</span>
                <span class="title-small">zap on nostr</span>
            </div>
            <span class="label-medium">2 years ago</span>
        </li>

        <li class="transaction" id="transaction-3">
            <md-focus-ring for={`transaction-3`} />
            <md-ripple />

            <md-icon class="neg">bolt</md-icon>
            <div class="col">
                <span class="title-large">- 500 sats</span>
                <span class="title-small">tip to barry@zeus.ln</span>
            </div>
            <span class="label-medium">2 years ago</span>
        </li>
    </ul>

</div>

<style>

    .container {
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        margin-right: -1rem;
        padding-right: 1rem;

    }
    
    .edit-form {
        display:flex;
        flex-grow: 1;
        align-items: center;
    }
    .edit-form * {
        margin: 0 0.5rem;
    }

    .container>* {
        max-width: 45rem;
        width: 100%;
    }

    h1 {
        margin: 0 1rem;
        flex-grow: 1;
    }

    #nav-title-edit {
        flex-grow: 1;
        margin: 0 1rem;
    }



    .amount {
        flex-grow: 1;
        min-width: fit-content;
        margin: 1rem 0;
    }

    .btn-row {
        display:flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 16rem;
    }

    .header {
        border-radius: 1.5rem;
        background-color: var(--md-sys-color-surface-container);
        padding: 2rem;
        margin-top: 0rem;
        border: 1px solid var(--md-sys-color-outline-variant);
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        align-items: center;
    }


    .transaction {
        border-radius: 1rem;
        background-color: var(--md-sys-color-surface-container-high);
        margin: 1rem 0;
        padding: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .transaction .col {
        display: flex;
        flex-direction: column;
        text-align: left;
        flex-grow: 1;
        padding-left: 1rem;
    }

    .transaction md-icon {
        color: var( --md-sys-color-on-primary );
        background-color: var( --md-sys-color-primary );
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .transaction md-icon.neg {
        color: var( --md-sys-color-on-error );
        background-color: var( --md-sys-color-error );

    }

    @media (min-width: 1000px) {
        .transactions {
            padding: 0 1rem;
        }
        .container {
            padding: 0 2rem 0 1rem;
        }
    }
</style>
    