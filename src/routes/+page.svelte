<script>
    import Counter from "../components/Counter.svelte";
    import Container from "./Container.svelte";

    export let data;
</script>

<main>
    <h1>News Website</h1>
    <Counter text="News today" count={data.articles.length} />
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
