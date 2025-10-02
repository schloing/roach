<script lang="ts">
    import type { Snippet } from "svelte";

    const {
        stages = [],
    }: {
        stages: { snippet: Snippet; validator: (() => boolean) | undefined }[];
    } = $props();

    let formStage = $state(0);

    function nextStage() {
        if (formStage >= stages.length - 1) return;

        const valid = stages[formStage].validator?.();

        if (valid) {
            formStage++;
        } else {
            alert("invalid entries - try again, mate");
        }
    }

    function prevStage() {
        if (formStage <= 0) return;
        formStage--;
    }
</script>

{#if stages.length > 0}
    <div class="wrapper">
        <div class="stage">
            {@render stages[formStage].snippet()}
        </div>

        <div class="controls">
            {#if formStage > 0}
                <button onclick={() => prevStage()} class="prev">Prev</button>
            {/if}

            {#if formStage < stages.length - 1}
                <button onclick={() => nextStage()} class="next">Next</button>
            {:else}
                <div class="next">
                    <button class="bold">Post</button>
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    div {
        width: 100%;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .stage {
        overflow: scroll;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
    }

    button {
        background: var(--dark-primary);
    }

    button:disabled,
    :global(button:disabled > *) {
        color: var(--secondary);
        background: var(--background);
    }

    .prev {
        float: left;
        width: fit-content;
    }

    .next {
        float: right;
        width: fit-content;
    }

    .bold {
        font-weight: bold;
    }
</style>
