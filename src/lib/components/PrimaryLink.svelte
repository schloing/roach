<script lang="ts">
    const { href = "/", children } = $props();
</script>

<a class="button primary" {href}>
    {@render children?.()}
</a>

<style>
    a {
        overflow: hidden;
        text-align: center;
    }

    a.primary {
        border: none;
        border-radius: 2em;
        background: var(--primary);
        color: #000 !important;
        box-shadow: 0;
    }

    a.primary:hover {
        background: var(--text);
    }
</style>
