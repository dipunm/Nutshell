<script lang="ts">
    import "@material/web/icon/icon"
    import "@material/web/list/list"
    import "@material/web/list/list-item"
</script>
<style>
    p {
        font-family: var(--md-sys-typescale-body-medium-font-family-name);
        font-style: var(--md-sys-typescale-body-medium-font-family-style);
        font-weight: var(--md-sys-typescale-body-medium-font-weight);
        font-size: var(--md-sys-typescale-body-medium-font-size);
        line-height: var(--md-sys-typescale-body-medium-line-height);
        letter-spacing: var(--md-sys-typescale-body-medium-letter-spacing);
    }
    p + p {
        margin-top: 1rem;
    }
</style>

<p>
    A mint is similar to a banking institution; it provides convenience and
    defends your online privacy as you spend and receive bitcoin.
</p>

<md-list>
    <md-list-item>
        <md-icon slot="start">account_balance</md-icon>
        <div slot="headline">A mint is a custodian</div>
        <div slot="supporting-text">
            Just like banks, exchanges and all custodial 
            services, a mint is susceptible to loss of 
            customer funds.
        </div>
    </md-list-item>
    
    <md-list-item>
        <md-icon slot="start">error</md-icon>
        <div slot="headline">Custodians require trust</div>
        <div slot="supporting-text">
            Mints rely on reputation to establish trust. 
            Customers must trust custodians to secure 
            and facilitate payments, and to minimise 
            counterparty risk on their behalf.
        </div>
    </md-list-item>

    <md-list-item>
        <md-icon slot="start">visibility_off</md-icon>
        <div slot="headline">A mint is a custodian</div>
        <div slot="supporting-text">
            Mints operate without collecting your 
            personal information or asking for 
            registration; why should it? Mints don't 
            keep track of your balance, your device 
            does.
        </div>
    </md-list-item>

    <md-list-item>
        <md-icon slot="start">gavel</md-icon>
        <div slot="headline">Mints defend your privacy</div>
        <div slot="supporting-text">
            Unlike other custodians, a mint cannot 
            target you, or freeze or restrict access to 
            your funds. Mints don't know who you are, 
            nor how wealthy you might be.
        </div>
    </md-list-item>
</md-list>

<p>
    This app provides learning resources to help you learn more about bitcoin and 
    how to eliminate counterparty risk by practicing self custody.
</p>
<p>
    This app allows you to manage funds across one or many mints using the cashu protocol. Learn 
    more at <a target="_blank" href="https://cashu.space">https://cashu.space</a>.
</p>
