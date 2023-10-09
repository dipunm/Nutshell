<script lang="ts">
	import { assets } from "$app/paths";

    export let color: "tertiary" | "surface-container-highest"
    export let height: string = 'auto';
    let className = "";
	export { className as class };
    export let icon: "mint" | undefined = undefined;
    const iconSpace = icon === "mint" ? 1.25 : 0;
    const mtop = icon === "mint" ? 1.25 : 1.1875;
</script>
<style>
    section {
        margin-bottom: 3rem;
        border-radius: 1.5rem;
        background-color: var(--bg-color);
        margin-top: var(--margin-top);
        padding: 0.75rem;
        padding-top: var(--padding-top);
        
        position: relative;
        text-align: center;
        height: var(--height);
    }

    .icon {
        border-radius: 100%;
        background-color: var( --md-sys-color-surface );
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -1.25rem;
        border: 1px solid var(--md-sys-color-on-background);
        display: flex;
        justify-content: center;
    }

    .icon img {
        align-self: center;
        width: 1.5rem;
        filter: invert(1);
    }
</style>

<section class={className} style="
    --bg-color: var(--md-sys-color-{color});
    --padding-top: {0.75 + iconSpace}rem;
    --margin-top: {mtop}rem;
    --height: {height};
">
    {#if icon === 'mint'}        
        <div class="icon">
            <img src="{assets}/mint.svg" alt="mint icon"/>
        </div>
    {/if}

    <slot></slot>
</section>