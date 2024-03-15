<script>
    import { page } from "$app/stores";
    /**
     * @type {string}
     */
    export let href;
</script>

<li>
    {#if href && $page.url.pathname !== href}
        <a {href}>
            <slot />
        </a>
    {:else}
        <span aria-current="page">
            <slot />
        </span>
    {/if}
</li>

<style>
    a,
    span {
        color: #000;
    }
    li::after {
        display: inline-block;
        margin-inline-start: 0.3rem;
        margin-inline-end: 0.3rem;
        content: "/";
    }
</style>
