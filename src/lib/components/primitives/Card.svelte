<script lang="ts">
    // export let color: "tertiary" | "surface-container-highest"
    export let height: string = 'auto';

    /**
     * --md-sys-color-primary-container
     * --md-sys-color-secondary-container
     * --md-sys-color-tertiary-container
     * --md-sys-color-error-container
     * --md-sys-color-surface-container-highest
     * --md-sys-color-surface-container-high
     * --md-sys-color-surface-container
     * --md-sys-color-surface-container-low
     * --md-sys-color-surface-container-lowest
    */
</script>
<style>
    section {
        margin-bottom: 3rem;
        border-radius: 1.5rem;
        background-color: var(--bg-color);
        margin-top: var(--margin-top);
        padding: 0.75rem;
        padding-top: 0.75rem;
        
        position: relative;
        text-align: center;
        height: var(--height);
    }
</style>

<section style="
    --bg-color: var(--md-sys-color-secondary-container);
    --height: {height};
">
    <slot></slot>
</section>