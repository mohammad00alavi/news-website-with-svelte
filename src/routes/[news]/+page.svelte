<script>
    import Breadcrumbs from "../../components/Breadcrumbs.svelte";
    import BreadcrumbsItem from "../../components/BreadcrumbsItem.svelte";
    import LinkButton from "../../components/LinkButton.svelte";
    import Counter from "../../components/Counter.svelte";
    import News from "../News.svelte";
    import { page } from "$app/stores";
    import { onDestroy, onMount } from "svelte";
    import { articlesStore } from "../store";

    let article = {};
    let count = 0;

    /**
     * @type {() => void}
     */
    let unsubscribe;
    //TODO - store doesn't work correctly
    onMount(async () => {
        unsubscribe = await articlesStore.subscribe((items) => {
            count = items.length;
            article = items.find((item) => item.title === $page.params.news);
        });
    });
    onDestroy(() => {
        unsubscribe();
    });
</script>

<main>
    <!-- TODO - Fix back href -->
    <LinkButton href="/" --bgColor="#e6ecff" --textColor="#000">Back</LinkButton
    >
    <Breadcrumbs>
        <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
        <!-- TODO - fix the error with the news link breadcrumb link -->
        {#if article}
            <BreadcrumbsItem href="/{$page.url.pathname}"
                >{article.title}</BreadcrumbsItem
            >
        {/if}
    </Breadcrumbs>
    <Counter text="News today" {count} />
    {#if article}
        <News {...article} />
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
