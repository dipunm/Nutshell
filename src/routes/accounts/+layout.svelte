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
	import PortalTarget from "$lib/portals/PortalTarget.svelte";
	import { portalActive } from "$lib/portals/index.js";
	import Card from "$lib/components/primitives/Card.svelte";

    export let data;
    $: accountId = data?.id ?? $page.params?.id;
    $: contentActive = typeof accountId !== 'undefined';
    let contentAppbarStartActive = portalActive("content-appbar-start");
</script>

<ListDetailMenu {contentActive}>
    <svelte:fragment slot="list-headline">
        Wallets
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
                <md-icon slot="start">account_balance</md-icon> Wallets
                <div slot="supporting-text">
                    Manage your counterparties, check your balance, spend and receive.
                </div>
            </md-list-item>
            <md-list-item type="button" disabled>
                <md-icon slot="start">settings</md-icon> Other
                <div slot="supporting-text">
                    Undecided, configure something maybe?
                </div>
            </md-list-item>
        </md-list>
    </svelte:fragment>

    <svelte:fragment slot="list">
        <ul>
            {#each ['1','2'] as id}
            <li class="wallet-item">
                <Card 
                    href="{`${base}/accounts/${id}`}" 
                    color="{id === accountId ? 'surface-container-highest' : 'surface-container'}"
                    borderRadius=".75rem"
                >
                    <div class="wallet-item-inner">
                        <h2 class="title-large">Unnamed Wallet 0{id}</h2>
                        <p>0.00001033 BTC</p>
                    </div>
                </Card>
            </li>
            {/each}
        </ul>
    </svelte:fragment>


    
    <svelte:fragment slot="content-appbar-start">{#if $contentAppbarStartActive}
        <PortalTarget name="content-appbar-start" />
        {/if}</svelte:fragment>
    <svelte:fragment slot="content-appbar">
        <PortalTarget name="content-appbar" />
    </svelte:fragment>
    <slot />
</ListDetailMenu>


<style>
    .wallet-item {
        position: relative;
        margin-bottom: 1rem;
    }

    .wallet-item-inner {
        padding: 2rem;
        color: var(--md-sys-color-on-surface);
    }
</style>
