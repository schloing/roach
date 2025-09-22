<script lang="ts">
    import Roach from "$/lib/Roach.svelte";
</script>

<section class="roaches">
    {#each Array.from(Array(10)) as _}
        <div class="roach">
            <Roach id="id" />
        </div>
    {/each}
</section>

<style>
    .roach {
        margin: 0.5em 0;
    }

    .roaches {
        display: grid;
        width: fit-content;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1em;
        row-gap: 0.2em;
    }

    @media (width <= 1425px) {
        .roaches {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (width <= 1075px) {
        .roaches {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (width <= 740px) {
        .roaches {
            row-gap: 8.5em;
        }

        .roach {
            width: 250px;
            height: 160px;
        }
    }
</style>
