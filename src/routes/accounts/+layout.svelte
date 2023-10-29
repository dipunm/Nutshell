<script lang="ts">
    import "@material/web/ripple/ripple.js"
    import "@material/web/tabs/tabs.js"
    import "@material/web/tabs/primary-tab.js"
    import "@material/web/tabs/secondary-tab.js"
    import "@material/web/list/list.js"
    import "@material/web/list/list-item.js"
    import "@material/web/iconbutton/icon-button.js"
    import "@material/web/icon/icon.js"
    
	import NavBar from "$lib/components/NavBar.svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";

    export let data;
    $: accountId = data?.id ?? $page.params?.id;
    $: active = typeof accountId !== 'undefined';
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

	function switchStack(id: string, el: HTMLElement) {
        const { state } = history;
        if (state?.stack === id) {
            return;
        }

        console.log('switchstack' + JSON.stringify(state));

        if (state?.depth ?? 0 > 0) {
            const handler = () => {
                goto(`${base}/accounts/${id}`, {
                        keepFocus: true,
                        state: {
                            stack: id,
                            depth: 1
                        }
                    });
                window.removeEventListener('popstate', handler);
                el.focus();
            }
            window.addEventListener('popstate', handler);
            console.log('going back' + state.depth);
            history.go(-state.depth);
        } else {
            return goto(`${base}/accounts/${id}`, {
                keepFocus: true,
                state: {
                    stack: id,
                    depth: 1
                }
            });
        }
	}
</script>

<style>
    .layout-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }

    .list-container {
        width: 35%;
        max-width: 24rem;
        display: flex;
        flex-direction: column;
        overflow: auto;
        padding: 1rem;
    }

    .list-container h1 {
        margin: 0 1rem;
    }

    .content-container {
        display: flex;
        flex-direction: column;
        background-color: var(--md-sys-color-surface-container-low);
        flex-grow: 1;
        padding: 0 1rem;
        overflow: auto;
        border-radius: 2rem;
        border-end-end-radius: 0;
        border-end-start-radius: 0;
        margin: 1rem;
        margin-left: 0;
        margin-bottom: 0;
    }

    .list-container ul {
        margin-top:1.2em;
        --md-focus-ring-shape: 0.75rem;
    }

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

    .menu {
        display: block;
        transition: 0.25s;
        position: fixed;
        height: 100vh;
        z-index: 2;
        top:0;
        left:0;
        width: 70vw;
        max-width: min(24rem, 35%);
        min-width: min(100vw, 18rem);
        overflow: hidden;
        display: block;
        background-color: var( --md-sys-color-surface);
        padding: 1rem;
    }

    .menu-backdrop {
        transition: 0.25s;

        opacity: 50%;
        background-color: var( --md-sys-color-shadow );
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        visibility: visible;
    }

    .menu:not(.active) {
        transform: translateX(-100%);
    }

    .menu:not(.active) + .menu-backdrop {
        opacity: 0;
        visibility: hidden;
    }

    @media (max-width: 750px) {
        .content-container {
            display: none;
            border-radius: 0;
            margin: 0;
            background-color: var(--md-sys-color-surface);
        }

        .list-container {
            width: 100vw;
            max-width: none;
        }

        .active .content-container {
            display: flex;
            width: 100vw;
        }
        
        .active .list-container {
            display: none;
        }
    }

    @media (horizontal-viewport-segments: 2) {
        .list-container {
            width: calc(env(viewport-segment-right 0 0) - env(viewport-segment-left 0 0));
            max-width: none;
        }

        .content-container {
            width: calc(env(viewport-segment-right 1 0) - env(viewport-segment-left 1 0));
            max-width: none;
            margin-left: calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)) 

        }

        .menu {
            max-width: min(
                24rem,
                calc(env(viewport-segment-right 0 0) - env(viewport-segment-left 0 0))
            );
        }
    }

</style>
<div class="layout-container" class:active={active} data-sveltekit-noscroll data-sveltekit-keepfocus>
    <div class="menu" class:active={menuOpen}>
        <NavBar>
            <md-icon-button on:click={toggleMenu}>
                <md-icon>arrow_back</md-icon>
            </md-icon-button>
        </NavBar>
        <md-list>
            <md-list-item type="button">
                <md-icon slot="start">lightbulb</md-icon> Discover
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
    </div>
    <div class="menu-backdrop" on:click={toggleMenu}></div>
    <div class="list-container">
        <NavBar>
             <md-icon-button on:click={toggleMenu}>
                <md-icon>menu</md-icon>
            </md-icon-button> 
            <h1 class="headline-medium">Mints</h1>
        </NavBar>

        <ul>
            {#each ['1','2'] as id}
            <li class="mint-item" class:active={id === accountId}>
                <button id={`mint-item-${id}`} on:click={(e) => switchStack(`${id}`, e.currentTarget)}>
                    <md-focus-ring for={`mint-item-${id}`} />
                    <md-ripple />
                    <h2 class="title-large">Unnamed Mint 0{id}</h2>
                    <p>0.00001033 BTC</p>
                </button>
            </li>
            {/each}
        </ul>
    </div>
    <section class="content-container">
        <slot></slot>
    </section>
</div>