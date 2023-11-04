<script lang="ts">
    export let color: 
    "primary-container" | 
    "secondary-container" |
    "tertiary-container" |
    "error-container" |
    "surface-container-highest" |
    "surface-container-high" |
    "surface-container" |
    "surface-container-low" |
    "surface-container-lowest";

    export let height: string = 'auto';
    export let shadow: boolean = false;

    const iconSpace = $$slots.icon ? 1.25 : 0;
</script>

<section class:shadow style="
    background-color: var(--md-sys-color-{color});
    padding-top: {0.75 + iconSpace}rem;
    height: {height};
">
    {#if $$slots.icon}        
        <div class="icon">
            <slot name="icon"></slot>
        </div>
    {/if}

    <slot></slot>
</section>

<style>
    section {
        border-radius: 1.5rem;
        padding: 0.75rem;
        
        position: relative;

        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 450px;

        display: flex;
        flex-direction: column;
    }

    section.shadow { box-shadow: 0px 1px 10px var(--md-sys-color-shadow); }

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