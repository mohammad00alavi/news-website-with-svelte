<script>
    import Breadcrumbs from "../../components/Breadcrumbs.svelte";
    import BreadcrumbsItem from "../../components/BreadcrumbsItem.svelte";
    import Button from "../../components/Button.svelte";
    import Counter from "../../components/Counter.svelte";
    import News from "../News.svelte";
    import { page } from "$app/stores";

    export let data;
</script>

<main>
    <Button href="/" --bgColor="#e6ecff" --textColor="#000">Back</Button>
    <Breadcrumbs>
        <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
        <!-- TODO - fix the error with the news link breadcrumb link -->
        <BreadcrumbsItem href="/{$page.url.pathname}"
            >{data.article.title.slice(0, 20)}</BreadcrumbsItem
        >
    </Breadcrumbs>
    <Counter text="News today" count={data.count} />
    {#if data}
        <News {...data.article} />
    {:else}
        <p>No data found</p>
    {/if}
</main>

<style>
    main {
        margin: 1rem 20%;
    }
    :global(img) {
        width: 100%;
        max-height: 500px;
        border-radius: 8px;
    }
</style>
