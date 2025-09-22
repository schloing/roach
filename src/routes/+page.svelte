<script lang="ts">
    import RoachGallery from "$/lib/RoachGallery.svelte";
    import { roach_tags } from "$/lib/categories";
</script>

<main>
    {#each roach_tags as tag}
        <div class="roach-tag">
            <p class="roach-title">
                {tag.name}
                <span class="roach-description">{tag.description}</span>
            </p>

            <RoachGallery />
        </div>
    {/each}
</main>

<style>
    main {
        max-width: 1400px;
    }

    .roach-title {
        font-weight: lighter;
        font-size: 1.5rem;
        margin: 0.25em 0;
    }

    .roach-description {
        font-style: italic;
        font-size: 1rem;
        color: var(--secondary);
    }

    .roach-tag {
        width: fit-content;
        margin: 2em auto;
    }
</style>
