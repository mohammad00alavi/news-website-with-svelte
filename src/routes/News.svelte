<script>
    import Image from "../components/Image.svelte";

    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {string}
     */
    export let author;
    /**
     * @type {string}
     */
    export let description;
    /**
     * @type {string}
     */
    export let urlToImage;
    /**
     * @type {string}
     */
    export let publishedAt;
    /**
     * @type {string}
     */
    export let content;
</script>

<article>
    <Image src={urlToImage} alt={urlToImage} />
    <header>
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
        <p>{publishedAt}</p>
    </header>
    {#if content}
        <p>{content}</p>
    {:else}
        <p>{description}</p>
    {/if}
</article>

<style>
    article {
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    header h2 {
        margin: 0;
        color: #333;
    }
    header p {
        color: #666;
        font-size: 0.9em;
    }
    :global(img) {
        width: 100%;
        max-height: 300px;
        border-radius: 8px;
    }
    p {
        font-size: 1em;
        line-height: 1.5;
    }
</style>
