<script lang="ts">
    import "@material/web/ripple/ripple.js"
    import "@material/web/tabs/tabs.js"
    import "@material/web/tabs/primary-tab.js"
    import "@material/web/tabs/secondary-tab.js"
    import "@material/web/list/list.js"
    import "@material/web/list/list-item.js"
    import "@material/web/iconbutton/icon-button.js"
    import "@material/web/icon/icon.js"
    
	import { page } from "$app/stores";
	import { base } from "$app/paths";
	import { stackGo } from "$lib/navigation";
	import ListDetailMenu from "$lib/components/layouts/ListDetailMenu.svelte";
	import PortalTarget from "$lib/components/primitives/PortalTarget.svelte";

    export let data;
    $: accountId = data?.id ?? $page.params?.id;
    $: contentActive = typeof accountId !== 'undefined';
</script>

<ListDetailMenu {contentActive}>
    <svelte:fragment slot="navbar">
        <PortalTarget name="content-navbar" />
    </svelte:fragment>
    <svelte:fragment slot="menu">
        <md-list>
            <md-list-item type="button">
                <md-icon slot="start">book</md-icon> 
                Discover
                <div slot="supporting-text">
                    Learn how to protect your funds through the power of Bitcoin.
                </div>
            </md-list-item>
            <md-list-item type="button">
                <md-icon slot="start">account_balance</md-icon> Mints
                <div slot="supporting-text">
                    Manage your counterparties, check your balance, spend and receive.
                </div>
            </md-list-item>
            <md-list-item type="button" disabled>
                <md-icon slot="start">settings</md-icon> Wallet
                <div slot="supporting-text">
                    Undecided, configure something maybe?
                </div>
            </md-list-item>
        </md-list>
    </svelte:fragment>

    <svelte:fragment slot="list">
        <ul>
            {#each ['1','2'] as id}
            <li class="mint-item" class:active={id === accountId}>
                <button id={`mint-item-${id}`} on:click={(e) => stackGo(`${base}/accounts/${id}`, { keepFocus: true })}>
                    <md-focus-ring for={`mint-item-${id}`} />
                    <md-ripple />
                    <h2 class="title-large">Unnamed Mint 0{id}</h2>
                    <p>0.00001033 BTC</p>
                </button>
            </li>
            {/each}
        </ul>
    </svelte:fragment>

    <slot />
</ListDetailMenu>


<style>
    .mint-item {
        position: relative;
    }
    .mint-item button {
        position: relative;
        display: block;
        border-radius: .75rem;
        padding: 2rem;
        background-color: var(--md-sys-color-surface-container);
        color: var(--md-sys-color-on-surface);
        margin-bottom: 1rem;
        outline: none;
        width: 100%;
        cursor: pointer;
    }

    .mint-item.active button {
        background-color: var(--md-sys-color-surface-container-high);
    }
</style>
