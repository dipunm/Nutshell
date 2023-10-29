<script>
    import 'modern-normalize/modern-normalize.css';
    import './app.css';
    import '../css/theme.css'

    export let data;
    if (data.savedState) {
        history.replaceState({
			...data.savedState
		}, '');
    }
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