<script lang="ts">
    let {
        showModal = $bindable(),
        dialog = $bindable(),
        header,
        children,
        actions,
    } = $props();

    $effect(() => {
        if (showModal) dialog.showModal();
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
    bind:this={dialog}
    onclose={() => (showModal = false)}
    onclick={(e) => {
        if (e.target === dialog) dialog.close();
    }}
>
    <div>
        {@render header?.()}
        {@render children?.()}
        {@render actions?.()}
    </div>
</dialog>

<style>
    dialog {
        width: 300px;
        border-radius: 0.2em;
        border: none;
        padding: 0;
        background: var(--background);
        color: var(--text);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }

    dialog > div {
        padding: 1em;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        gap: 1em;
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes zoom {
        from {
            transform: translate(-50%, -50%) scale(0.95);
        }
        to {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
