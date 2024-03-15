<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import News from "./News.svelte";
    import { articles, search } from "./store";
    import Search from "./Search.svelte";
    import { fly, fade } from "svelte/transition";
    import * as sampleData from "../data/sample-data.json";

    const apiKey = import.meta.env.VITE_API_KEY;

    let subscription: () => void;

    onMount(() => {
        subscription = search.subscribe(async ($search) => {
            if ($search.length >= 3) {
                try {
                    const res = await fetch(
                        `https://newsapi.org/v2/everything?q=${$search}&from=2024-03-10&lang=en&pageSize=30&sortBy=popularity&apiKey=${apiKey}`
                    );
                    const data = await res.json();
                    const filteredArticles = data.articles.filter(
                        (article) => article.urlToImage && article.author
                    );
                    articles.set(filteredArticles);
                } catch (err) {
                    console.error("Error fetching data from API:", err);
                    articles.set(sampleData.articles);
                }
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
{#if $articles?.length > 0}
    <section
        in:fly={{ y: 50, duration: 500, delay: 500 }}
        out:fade={{ duration: 500 }}
    >
        {#each $articles.slice(0, 12) as article}
            <a class="link" href="/{encodeURIComponent(article.title)}">
                <News {...article} />
            </a>
        {/each}
    </section>
{:else}
    <p in:fade={{ duration: 500, delay: 500 }}>No news to display.</p>
{/if}

<style>
    section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .link {
        text-decoration: none;
        color: black;
    }
    :global(img) {
        width: 100%;
        max-height: 300px;
        border-radius: 8px;
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
