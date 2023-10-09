<script>
    import 'modern-normalize/modern-normalize.css';
    import './app.css';
    import '../css/theme.css'
</script>
<style>
    .container {
        background-color: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
        min-height: 100vh;
    }
</style>
<svelte:head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Sharp" rel="stylesheet">
</svelte:head>
<div class="container">
    <slot />
</div>