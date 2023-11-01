<script>
    import 'modern-normalize/modern-normalize.css';
    import './app.css';
    import '../css/theme.css'
	import { configureNavHandling, initializeHistoryStack } from '$lib/navigation';
	import { afterNavigate } from '$app/navigation';

    export let data;
    if (data.savedState) {
        history.replaceState({
			...data.savedState
		}, '');
    }

    if (!Array.isArray(history.state?.stack) || history.state?.stack.length === 0) {
        initializeHistoryStack();
    }

    console.log('found stack::', history.state.stack);
    
    configureNavHandling();
    afterNavigate(() => {
        console.log('navigation after stack::', history.state.stack);
    });
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