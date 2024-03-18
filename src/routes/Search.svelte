<script>
    import { goto } from "$app/navigation";
    let searchTerm = "";

    function serachFunc() {
        goto(`/?q=${encodeURIComponent(searchTerm)}`, {
            replaceState: true,
        });
    }

    function handleSearch() {
        if (searchTerm && searchTerm.length >= 3) {
            serachFunc();
        }
    }

    function handleKeyDown(e) {
        if (e.code === "Enter") {
            handleSearch();
        }
    }
</script>

<input
    bind:value={searchTerm}
    on:keydown={handleKeyDown}
    placeholder="Search for latest news..."
/>
<button on:click={handleSearch}>Search</button>

<style>
    input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
    }
</style>
