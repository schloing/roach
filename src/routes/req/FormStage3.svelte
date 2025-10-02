<script lang="ts">
    import { fade } from "svelte/transition";

    let {
        priceValue = $bindable(),
        titleValue = $bindable(),
        validate = $bindable(),
    }: {
        priceValue: number;
        titleValue: string;
        validate: (() => boolean) | undefined;
    } = $props();

    let oldRange = $state(0);
    let payTerm = $state("");

    validate = () => {
        return false;
    };
</script>

<div in:fade={{ duration: 250 }}>
    <h2>What's the reward to <span class="fine">{titleValue}</span>?</h2>

    <div>
        <span class="dollar">$</span>
        <!-- svelte-ignore a11y_autofocus -->
        <input
            autofocus
            type="number"
            class="draggable"
            onmousemove={(e) => {
                if (e.buttons === 1) {
                    priceValue += e.clientX > oldRange ? 1 : -1;
                    priceValue = Math.max(0, priceValue);
                    oldRange = e.clientX;
                }
            }}
            bind:value={priceValue}
        />
        <span class="dollar">
            {payTerm == "hourly" ? "/hr" : ""}
        </span>
    </div>

    <div class="terms">
        <button onclick={() => (payTerm = "")}>one-time</button>
        <button onclick={() => (payTerm = "hourly")}>hourly</button>
        <button disabled>custom</button>
    </div>
</div>

<style>
    div {
        width: 100%;
        text-align: center;
    }

    .draggable,
    .dollar {
        color: var(--primary);
        font-size: 2.6rem;
        font-weight: bold;
    }

    .draggable {
        background: none;
        width: 5ch;
        user-drag: none;
        -webkit-user-drag: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari, Chrome, Opera, Samsung */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Edge, IE */
        user-select: none;
        cursor: ew-resize;
        border: 1px solid var(--secondary);
        text-align: center;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    .terms {
        margin: 1em 0;
    }

    .terms > button {
        background: var(--background);
        animation: nice 10s infinite alternate ease-in-out;
    }

    @keyframes nice {
        0% {
            transform: rotateZ(-2deg) translateX(0px);
        }
        25% {
            transform: rotateZ(1deg) translateX(1px);
        }
        50% {
            transform: rotateZ(-1deg) translateX(0px);
        }
        75% {
            transform: rotateZ(1deg) translateX(-1px);
        }
        100% {
            transform: rotateZ(-2deg) translateX(0px);
        }
    }

    .terms > button:disabled {
        color: var(--secondary);
        text-decoration: line-through;
        cursor: default;
    }
</style>
