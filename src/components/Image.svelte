<script>
    let imageLoaded = true;
    /**
     * @type {string}
     */
    export let src;
    /**
     * @type {string}
     */
    export let alt;

    function handleImageError() {
        imageLoaded = false;
    }
</script>

{#if imageLoaded}
    <img {src} {alt} on:error={handleImageError} />
{/if}
