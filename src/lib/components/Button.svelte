<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    const { children, ...props }: { children: Snippet } & HTMLButtonAttributes =
        $props();
</script>

<button {...props}>
    {@render children?.()}
</button>

<style>
    button {
        padding: 0;
        margin: 0;
    }
</style>
