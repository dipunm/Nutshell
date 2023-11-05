<script>
    import 'modern-normalize/modern-normalize.css';
    import './app.css';
    import '../css/theme.css'
	import { activateNavigationStackBehaviour } from '$lib/navigation';
	import PortalTarget from '$lib/portals/PortalTarget.svelte';

    /**
     * Workaround: preserve history state after refresh.
     * Source: https://github.com/sveltejs/kit/issues/9868#issue-1700272768
     */
    export let data;
    if (data.savedState) {
        history.replaceState({
			...data.savedState
		}, '');
    }

    activateNavigationStackBehaviour();
</script>
<style>
    .container {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        min-height: 100vh;
    }
</style>
<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Sharp" rel="stylesheet">
    <title>Nutshell</title>
</svelte:head>
<div class="container">
    <slot />
</div>
<PortalTarget name="target:modal" />