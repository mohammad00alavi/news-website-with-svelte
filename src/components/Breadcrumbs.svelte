<nav>
    <ol>
        <slot />
    </ol>
</nav>

<style>
    ol {
        display: flex;

        margin: 0;
        padding: 0.125rem;
        list-style: none;
    }

    :global(ol > *:last-child::after) {
        display: none !important;
    }
</style>
