<script>
    import Container from "./Container.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
    <h1>News Website</h1>
    <Container />
</main>

<style>
    main {
        padding: 2rem;
    }
    h1 {
        font-size: 24px;
    }
</style>
