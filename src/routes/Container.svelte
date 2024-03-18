<script lang="ts">
    import News from "./News.svelte";
    import Search from "./Search.svelte";
    import { fly, fade } from "svelte/transition";
    import { type Articles } from "./Types";
    /**
     * @type {Articles}
     */
    export let articles;
</script>

<Search />
{#if articles?.length > 0}
    <section
        in:fly={{ y: 50, duration: 500, delay: 500 }}
        out:fade={{ duration: 500 }}
    >
        {#each articles.slice(0, 12) as article}
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
