<script>
    import Breadcrumbs from "../components/Breadcrumbs.svelte";
    import BreadcrumbsItem from "../components/BreadcrumbsItem.svelte";
    import Counter from "../components/Counter.svelte";
    import Container from "./Container.svelte";

    export let data;
</script>

<main>
    <h1>News Website</h1>
    <Breadcrumbs>
        <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
    </Breadcrumbs>
    <Counter text="News today" count={data.articles.length} />
    <Container articles={data?.articles} />
</main>

<style>
    main {
        padding: 2rem;
    }
    h1 {
        font-size: 24px;
    }
</style>
