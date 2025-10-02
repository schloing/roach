<script lang="ts">
    import { page } from "$app/state";
    import PrimaryLink from "$/lib/components/PrimaryLink.svelte";

    const { searchParams } = page.url;
</script>

<main>
    <h1>major error</h1>
    <p>error: <span class="error">{searchParams.get("error")}</span></p>
    <div>
        <PrimaryLink href="/">go back</PrimaryLink>
    </div>
</main>

<style>
    main {
        max-width: 70%;
        background: var(--accent);
        padding: 2.2em 1.5em;
        border-radius: 0.75em;
    }

    .error {
        color: var(--primary);
    }

    div {
        margin: 1.25em 0;
    }
</style>
