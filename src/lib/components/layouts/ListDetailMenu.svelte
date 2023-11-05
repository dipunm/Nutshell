<script lang="ts">
    import "@material/web/ripple/ripple.js"
    import "@material/web/tabs/tabs.js"
    import "@material/web/tabs/primary-tab.js"
    import "@material/web/tabs/secondary-tab.js"
    import "@material/web/list/list.js"
    import "@material/web/list/list-item.js"
    import "@material/web/iconbutton/icon-button.js"
    import "@material/web/icon/icon.js"
    
	import AppBar from "$lib/components/primitives/AppBar.svelte";
	import { stackPopUrl } from "$lib/navigation";

    export let contentActive: boolean = false;
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<div class="layout-container" class:active={contentActive}>
    <div class="menu" class:active={menuOpen}>
        <AppBar>
            <md-icon-button on:click={toggleMenu}>
                <md-icon>close</md-icon>
            </md-icon-button>
        </AppBar>
        <slot name="menu" />
    </div>
    <div class="menu-backdrop" on:click={toggleMenu} role="presentation"></div>
    <div class="list-container">
        <AppBar>
             <md-icon-button on:click={toggleMenu}>
                <md-icon>menu</md-icon>
            </md-icon-button> 
            <h1 class="headline-medium">Mints</h1>
        </AppBar>

        <slot name="list" />
    </div>
    <section class="content-container">
        <section class="nav">
            <AppBar>
                <md-icon-button href={$stackPopUrl}><md-icon>arrow_back</md-icon></md-icon-button>
                <slot name="appbar"></slot>
            </AppBar>
        </section>
        <slot />
    </section>
</div>


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

    .nav {
        padding: 1rem 0;
    }

    .nav md-icon-button {
        display: none;   
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

        .nav md-icon-button {
            display: inherit;   
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