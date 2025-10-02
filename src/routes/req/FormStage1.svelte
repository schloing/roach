<script lang="ts">
    import Meter from "$/lib/components/Meter.svelte";
    import UrgencyText from "$/lib/components/UrgencyText.svelte";
    import { fade } from "svelte/transition";

    let {
        value = $bindable(0),
        validate = $bindable(),
    }: { value: number; validate: (() => boolean) | undefined } = $props();

    validate = () => {
        return false;
    };
</script>

<div in:fade={{ duration: 250 }}>
    <h2>How urgent?</h2>

    <h1><UrgencyText bind:value /></h1>
    <div class="meter-wrapper">
        <Meter bind:value />
    </div>
</div>

<style>
    div {
        width: 100%;
        text-align: center;
    }

    .meter-wrapper {
        margin: 1em 0;
    }
</style>
