<script lang="ts">
    let { value = $bindable(0) } = $props();
</script>

{#if value}
    {#if value > 90}
        <span class="urgency-hot">hot</span>
    {:else if value >= 60}
        <span class="urgency-urgent">urgent</span>
    {:else if value >= 45}
        <span class="urgency-mild">mild urgency</span>
    {:else if value >= 30}
        <span class="urgency-not">not urgent</span>
    {:else}
        <span class="urgency-leisure">leisurely</span>
    {/if}
{:else}
    <span class="urgency-leisure">leisurely</span>
{/if}

<style>
    span {
        display: inline-block;
    }

    .urgency-leisure {
        color: var(--dark-primary);
        font-weight: bold;
    }

    .urgency-not {
        color: var(--aqua);
    }

    .urgency-mild {
        color: var(--orange);
        animation: aggressiveShake 1s infinite;
    }

    .urgency-urgent {
        color: var(--red);
        animation: aggressiveShake 0.3s infinite;
    }

    .urgency-hot {
        color: var(--dark-red);
        font-weight: bold;
        animation: aggressiveShake 0.1s infinite;
    }

    @keyframes aggressiveShake {
        0% {
            transform: translate(0, 0);
        }
        20% {
            transform: translate(-1px, 1px);
        }
        40% {
            transform: translate(1px, -1px);
        }
        60% {
            transform: translate(-1px, -1px);
        }
        80% {
            transform: translate(1px, 1px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
</style>
