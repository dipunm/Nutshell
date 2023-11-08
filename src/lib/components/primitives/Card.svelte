<script lang="ts">
    import "@material/web/focus/md-focus-ring"
    import "@material/web/ripple/ripple"

    const surfaceVariantColors = [
        "surface-tint",
        "surface-container-highest",
        "surface-container-high",
        "surface-container",
        "surface-container-low",
        "surface-container-lowest",
        "surface-dim",
        "surface-bright",
    ] as const;

    type surfaceVariantColors = typeof surfaceVariantColors;
    type colors = 
    "primary" |
    "primary-container" | 
    "primary-fixed" |
    "primary-fixed-variant" |
    "secondary" |
    "secondary-container" | 
    "secondary-fixed" |
    "secondary-fixed-variant" |
    "tertiary" |
    "tertiary-container" | 
    "tertiary-fixed" |
    "tertiary-fixed-variant" |
    "error" |
    "error-container" |
    "background" |
    "surface" |
    "surface-variant" | 
    surfaceVariantColors[number];

    export let color: colors;
    $: onColor = (surfaceVariantColors.includes(color as any) ? 'surface' : color);
    $: ripple = ["primary", "secondary", "error"].includes(color) ? `--md-ripple-pressed-color: var(--md-ref-palette-${color}20);` : '';

    export let height: string = 'auto';
    export let shadow: boolean = false;
    export let borderRadius: string = '1.5rem';
    export let maxWidth: string = 'auto';

    const iconSpace = $$slots.icon ? 1.25 : 0;


    export let href: string | null = null;
    export let preserveStack: boolean = false;

    $: type = href != null ? 'anchor' : 'card';
    $: styles = `
    background-color: var(--md-sys-color-${color});
    padding-top: ${iconSpace}rem;
    height: ${height};
    max-width: ${maxWidth};
    border-radius: ${borderRadius};
    --md-focus-ring-shape: ${borderRadius};
    ${ripple}
    color: var(--md-sys-color-on-${onColor});`;
</script>

{#if type === 'card'}
    <section class:shadow style="{styles}">
        {#if $$slots.icon}        
            <div class="icon">
                <slot name="icon"></slot>
            </div>
        {/if}

        <slot></slot>
    </section>
{:else if type === 'anchor'}
<a {href} data-preserve-stack={preserveStack} style:position="relative"

    class:shadow

    style="{styles}"
>
    <md-focus-ring />
    <md-ripple />
    <slot></slot>
</a>
{/if}

<style>
    section, a {
        padding: 0.75rem;
        
        position: relative;

        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: column;
    }

    a {
        padding: 0;
    }

    .shadow { box-shadow: 0px 1px 10px var(--md-sys-color-shadow); }

    .icon {
        border-radius: 100%;
        background-color: var( --md-sys-color-surface-container );
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -1.25rem;
        border: 1px solid var(--md-sys-color-outline);
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 0rem;
    }
</style>