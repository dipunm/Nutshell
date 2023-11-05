<script lang="ts">
	import type { MdIconButton } from "@material/web/iconbutton/icon-button";
    import "@material/web/menu/menu";
	import type { MdMenu } from "@material/web/menu/menu";

    let menu: MdMenu;
    let button: MdIconButton;

    $: if (menu) {
        menu.anchorElement = button;
    }
</script>

<span style="position: relative;">
    <md-icon-button bind:this={button} on:click={() => { menu.show() }}>
        <slot name="icon">
            <md-icon>more_vert</md-icon>
        </slot>
    </md-icon-button>
    <md-menu anchor-corner="start-start" bind:this={menu}>
        <slot />
    </md-menu>
</span>