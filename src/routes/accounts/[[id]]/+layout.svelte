<script lang="ts">
    import "@material/web/ripple/ripple.js"
    import "@material/web/tabs/tabs.js"
    import "@material/web/tabs/primary-tab.js"
    import "@material/web/tabs/secondary-tab.js"
    
	import NavBar from "$lib/components/NavBar.svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

    export let data;
    $: accountId = data?.id ?? $page.params?.id;
    $: active = typeof accountId !== 'undefined';


	function switchStack(id: string, el: HTMLElement) {
        const { state } = history;
        if (state?.stack === id) {
            return;
        }

        if (state?.depth ?? 0 > 0) {
            const handler = () => {
                goto(`/accounts/${id}`, {
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
            history.go(-state.depth);
        } else {
            return goto(`/accounts/${id}`, {
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
        min-width: 18rem;
        display: flex;
        flex-direction: column;
        /* background-color: red; */
        overflow: auto;
        padding: 1rem;
    }

    .content-container {
        display:none;
        flex-direction: column;
        background-color: var(--md-sys-color-surface-container-low);
        flex-grow: 1;
        padding: 0 1rem;
        overflow: auto;
        border-radius: 2rem;
        margin: 1rem;
    }

    .circle {
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-on-color-surface);
        /* filter: brightness(1.5); */
        border-radius: 50%;
        width: 15rem;
        height: 15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 3rem;
    }

    .content-container.empty {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .active .content-container.empty {
        display: none;
    }

    .active .content-container {
        display: flex;
    }

    .list-container ul {
        margin-top:2em;
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

    @media (max-width: 750px) {
        .content-container {
            display: none;
            border-radius: 0;
            margin: 0;
            background-color: var(--md-sys-color-surface);
        }

        .content-container.empty {
            display: none;
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
</style>
<div class="layout-container" class:active={active}>
    <div class="list-container">
        <md-tabs>
            <md-primary-tab>Mints</md-primary-tab>
            <md-primary-tab>Learn</md-primary-tab>
            <md-primary-tab>Settings</md-primary-tab>
          </md-tabs>
        <!-- <NavBar>
             <md-icon-button>
                <md-icon>menu</md-icon>
            </md-icon-button> 
        </NavBar> -->
        <!-- <h1 class="headline-medium">Mints</h1> -->

        <ul>
            {#each ['1','2'] as id}
            <li class="mint-item" class:active={id === accountId}>
                <button id={`mint-item-${id}`} on:click={(e) => switchStack(`${id}`, e.currentTarget)}>
                    <md-focus-ring for={`mint-item-${id}`} />
                    <md-ripple />
                    <h1 class="title-large">Unnamed Mint 01</h1>
                    <p>0.00001033 BTC</p>
                </button>
            </li>
            {/each}
        </ul>
    </div>
    <section class="content-container empty">
        <div class="circle">
            Select a mint on the left.
        </div>
    </section>
    <section class="content-container">

        <slot></slot>

    </section>
</div>