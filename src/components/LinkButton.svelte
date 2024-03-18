<script>
    /**
     * @type {string}
     */
    export let href;
</script>

<a {href}>
    <slot />
</a>

<style>
    a {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 1px solid var(--bgColor, aqua);
        border-radius: 0.5rem;
        color: var(--textColor);
        background-color: var(--bgColor, black);

        font-size: 1rem;
        text-align: center;
        text-decoration: none;
        transition:
            background-color 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        cursor: pointer;
    }

    a:hover {
        background-color: hsla(var(--bgColor), 0.9);
        border-color: hsla(var(--bgColor), 0.9);
    }
</style>
