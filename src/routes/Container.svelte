<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import News from "./News.svelte";
    import { articles, search } from "./store";
    import Search from "./Search.svelte";

    const apiKey = import.meta.env.VITE_API_KEY;

    let subscription: () => void;

    onMount(() => {
        subscription = search.subscribe(async ($search) => {
            if ($search.length >= 3) {
                const res = await fetch(
                    `https://newsapi.org/v2/everything?q=${$search}&from=2024-03-10&lang=en&pageSize=30&sortBy=popularity&apiKey=${apiKey}`
                );
                const data = await res.json();
                const filteredArticles = data.articles.filter(
                    (article) => article.urlToImage && article.author
                );
                articles.set(filteredArticles);
            } else {
                articles.set([]);
            }
        });
    });

    onDestroy(() => {
        if (subscription) subscription();
    });
</script>

<Search />
<section>
    {#if $articles?.length > 0}
        {#each $articles.slice(0, 12) as article}
            <News {...article} />
        {/each}
    {:else}
        <p>No news to display.</p>
    {/if}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    @media screen and (max-width: 900px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 500px) {
        section {
            grid-template-columns: 1fr;
        }
    }
</style>
