<script lang="ts">
    import "@material/web/icon/icon"
</script>
<style>
    .factsheet {
        margin-top: 1.75rem;
    }

    .factsheet .fact {
        display: flex;
        flex-direction: row;
        margin-bottom: 1.75rem;
    }
    .factsheet h1 {
        font-weight: bold;
    }
    
    .factsheet .img {
        font-size: 32px;
        width: 32px;
        min-width: 32px;
        height: 32px;
        margin-right: 24px;
        align-self: center;
        max-width: none;
        display: flex;
    }

    .factsheet .img * {
        font-size: 32px;
        width: 32px;
        height: 32px;
    }

    p + p {
        margin-top: 1rem;
    }
</style>

<h1 class="headline-large">What's a mint?</h1>
<p>
    A mint is similar to a banking institution; it provides convenience and
    defends your online privacy as you spend and receive bitcoin.
</p>
<section class="factsheet">
    <article class="fact">
        <div class="img"><md-icon>account_balance</md-icon></div>
        <div class="info">
            <h1 class="title-medium">A mint is a custodian</h1>
            <p>
                Like all custodial services, a mint is 
                susceptible to loss of customer funds.
            </p>
        </div>
    </article>

    <article class="fact">
        <div class="img"><md-icon>error</md-icon></div>
        <div class="info">
            <h1 class="title-medium">Custodians require trust</h1>
            <p>
                Mints rely on reputation to establish trust. 
                Customers must trust custodians to secure 
                and facilitate payments, and to minimise 
                counterparty risk on their behalf.
            </p>
        </div>
    </article>

    <article class="fact">
        <div class="img"><md-icon>visibility_off</md-icon></div>
        <div class="info">
            <h1 class="title-medium">Mints defend your privacy</h1>
            <p>
                Mints operate without collecting your 
                personal information or asking for 
                registration; why should it? Mints don't 
                keep track of your balance, your device 
                does.
            </p>
        </div>
    </article>

    <article class="fact">
        <div class="img"><md-icon>gavelwa</md-icon></div>
        <div class="info">
            <h1 class="title-medium">Mints are impartial</h1>
            <p>
                Unlike other custodians, a mint cannot 
                target you, or freeze or restrict access to 
                your funds. Mints don't know who you are, 
                nor how wealthy you might be.
            </p>
        </div>
    </article>

    <p>
        This app provides learning resources to help you learn more about bitcoin and 
        how to eliminate counterparty risk by practicing self custody.
    </p>
    <p>
        This app allows you to manage funds across one or many mints using the cashu protocol. Learn 
        more at <a target="_blank" href="https://cashu.space">https://cashu.space</a>.
    </p>

</section>