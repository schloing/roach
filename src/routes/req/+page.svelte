<script lang="ts">
    import Multistage from "$/lib/components/Multistage.svelte";
    import FormStage1 from "./FormStage1.svelte";
    import FormStage2 from "./FormStage2.svelte";
    import FormStage3 from "./FormStage3.svelte";

    const { data } = $props();
    const { session } = data;

    let urgencyValue = $state(35);
    let priceValue = $state(5);
    let titleValue = $state("");
    let tags = $state<string[]>([]);

    let validateStage1: (() => boolean) | undefined = $state();
    let validateStage2: (() => boolean) | undefined = $state();
    let validateStage3: (() => boolean) | undefined = $state();
</script>

<svelte:head>
    <title>roach - login</title>
</svelte:head>

<main>
    <div class="form">
        <div class="multistage">
            <Multistage
                stages={[
                    { snippet: stage1, validator: validateStage1 },
                    { snippet: stage2, validator: validateStage2 },
                    { snippet: stage3, validator: validateStage3 },
                ]}
            />
        </div>

        {#snippet stage1()}
            <FormStage1
                bind:value={urgencyValue}
                bind:validate={validateStage1}
            />
        {/snippet}

        {#snippet stage2()}
            <FormStage2
                bind:urgencyValue
                bind:titleValue
                bind:tags
                bind:validate={validateStage2}
            />
        {/snippet}

        {#snippet stage3()}
            <FormStage3
                bind:priceValue
                bind:titleValue
                bind:validate={validateStage3}
            />
        {/snippet}
    </div>
</main>

<style>
    .form {
        height: 500px;
    }

    .multistage {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>
