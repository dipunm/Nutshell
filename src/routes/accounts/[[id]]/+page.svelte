<script lang="ts">
    import "@material/web/iconbutton/icon-button"
    import "@material/web/icon/icon"
    import "@material/web/button/filled-button"
    import "@material/web/button/text-button"

	import NavBar from "$lib/components/NavBar.svelte";

    export let data;
</script>
<style>

    .nav {
        padding: 1rem 0;
    }
    .container {
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        margin-right: -1rem;
        padding-right: 1rem;

    }
    
    .container>* {
        max-width: 45rem;
        width: 100%;
    }

    h1 {
        text-align: center;
        flex-grow: 1;
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
        align-items: right;
        text-align: right;
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

<section class="nav">
<NavBar>
    <md-icon-button on:click={() => history.back()}>
        <md-icon>arrow_back</md-icon>
    </md-icon-button>
    <h1 class="headline-medium">Unnamed Mint 01</h1>
    <md-text-button href={`/accounts/${data.id}?edit=true`} has-icon><md-icon slot="icon">edit</md-icon>Edit</md-text-button>        
</NavBar>
</section>
<div class="container">

    <section class="header">
        <div class="amount headline-medium">
            1 00 000 000 sats
        </div>
        <div class="btn-row">
            <md-filled-button><md-icon slot="icon">download</md-icon>Deposit</md-filled-button>
            <md-filled-button><md-icon slot="icon">file_upload</md-icon>Spend</md-filled-button>
        </div>
    </section>
    <ul class="transactions">
        <li class="transaction" id="transaction-1">
            <md-focus-ring for={`transaction-1`} />
            <md-ripple />

            <span class="title-large">For beer</span>
            <div class="col">
                <span class="body-large">- 500 sats</span>
                <span class="label-small">2 days ago</span>
            </div>
        </li>
        
        <li class="transaction" id="transaction-2">
            <md-focus-ring for={`transaction-2`} />
            <md-ripple />

            <span class="title-large">zap on nostr</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>

        <li class="transaction" id="transaction-3">
            <md-focus-ring for={`transaction-3`} />
            <md-ripple />

            <span class="title-large">tip to barry@zeus.ln</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>

        <li class="transaction" id="transaction-1">
            <md-focus-ring for={`transaction-1`} />
            <md-ripple />

            <span class="title-large">For beer</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>
        
        <li class="transaction" id="transaction-2">
            <md-focus-ring for={`transaction-2`} />
            <md-ripple />

            <span class="title-large">zap on nostr</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>

        <li class="transaction" id="transaction-3">
            <md-focus-ring for={`transaction-3`} />
            <md-ripple />

            <span class="title-large">tip to barry@zeus.ln</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>

        <li class="transaction" id="transaction-1">
            <md-focus-ring for={`transaction-1`} />
            <md-ripple />

            <span class="title-large">For beer</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>
        
        <li class="transaction" id="transaction-2">
            <md-focus-ring for={`transaction-2`} />
            <md-ripple />

            <span class="title-large">zap on nostr</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>

        <li class="transaction" id="transaction-3">
            <md-focus-ring for={`transaction-3`} />
            <md-ripple />

            <span class="title-large">tip to barry@zeus.ln</span>
            <div class="col">
                <span>- 500 sats</span>
                <span>2 days ago</span>
            </div>
        </li>
    </ul>

</div>