<script lang="ts">
    import "@material/web/icon/icon"
    import "@material/web/list/list"
    import "@material/web/list/list-item"
    import "@material/web/button/filled-button"
</script>
<style>
    p {
        max-width: 35em;
        font-family: var(--md-sys-typescale-body-medium-font-family-name);
        font-style: var(--md-sys-typescale-body-medium-font-family-style);
        font-weight: var(--md-sys-typescale-body-medium-font-weight);
        font-size: var(--md-sys-typescale-body-medium-font-size);
        line-height: var(--md-sys-typescale-body-medium-line-height);
        letter-spacing: var(--md-sys-typescale-body-medium-letter-spacing);
    }
    h2 {
        margin-top: 1rem;
    }

    a {
        text-decoration: underline;
    }
</style>

<md-list style:padding=0>
    <md-list-item>
        <md-icon slot="start">Language</md-icon>
        <div slot="headline">Digital Cash</div>
        <div slot="supporting-text">
            <!-- <p>
                Mints are online servers that facilitate bitcoin payments
                on behalf of the bearer of their assets.
            </p> -->
            <p>
                Mints are online servers that facilitate bitcoin payments
                for anyone who presents a signed digital IOU, just like 
                handing cash to a bank to send abroad.
            </p>
        </div>
    </md-list-item>
    <md-list-item>
        <md-icon slot="start">Privacy</md-icon>
        <div slot="headline">Privacy First</div>
        <div slot="supporting-text">
            <!-- <p>
                Using a bearer asset mechanism, mints don't demand personal 
                information or track your financial activity.
            </p> -->
            <p>
                Mints don't demand sensitive personal information, 
                they don't know who you are, and they cannot monitor 
                your financial activities.
            </p>
        </div>
    </md-list-item>
    <md-list-item>
        <md-icon slot="start">security</md-icon>
        <div slot="headline">Simple, Secure &amp; Safe</div>
        <div slot="supporting-text">
            <p>
                Cash-like payments eliminate the risk of targeted intrusions 
                and identity fraud due to data breaches.
            </p>
        </div>
    </md-list-item>
</md-list>

<h2 class="title-large" style="display: flex; align-items: center;">
    What about the risks?
</h2>
<p>
    Like banks, exchanges and other custodial service providers, 
    mints are still susceptible to risks such as cyber attacks, 
    vulnerabilities, and regulatory changes which could lead 
    to loss of funds.
</p>

<h2 class="title-large" style="display: flex; align-items: center;">
    Educate yourself
</h2>
<p>
    This wallet provides educational resources to guide you
    to eliminating counterparty risk completely &mdash; unlocking 
    the real power of Bitcoin.
</p>

<div style="display: flex; align-items:center; flex-direction:column">
<md-filled-button href="router:pop-stack"
    style:margin="2rem 0"
>Lets Go!</md-filled-button>
</div>