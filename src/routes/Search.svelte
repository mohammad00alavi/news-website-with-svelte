<script>
    import { search } from "./store";
</script>

<input bind:value={$search} placeholder="Search for latest news..." />

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
