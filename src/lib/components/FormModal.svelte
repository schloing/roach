<script lang="ts">
    import Modal from "./Modal.svelte";
    import type { Snippet, SvelteComponent } from "svelte";

    let {
        headerText,
        confirmationText = "Confirm",
        cancellationText = "Cancel",
        onConfirm = () => {},
        onCancel = () => {},
        showSelf = $bindable(false),
        children,
    }: {
        headerText: string;
        confirmationText?: string;
        cancellationText?: string;
        onConfirm?: () => Promise<void> | void;
        onCancel?: () => Promise<void> | void;
        showSelf: boolean | undefined;
        children: Snippet;
    } = $props();

    let dialog = $state<HTMLDialogElement>();
</script>

<Modal bind:dialog bind:showModal={showSelf}>
    {#snippet header()}
        <h2>{headerText}</h2>
    {/snippet}

    {@render children?.()}

    {#snippet actions()}
        <button
            onclick={async () => {
                await onConfirm();
                dialog?.close();
            }}>{confirmationText}</button
        >
        <!-- svelte-ignore a11y_autofocus -->
        <button
            autofocus
            onclick={async () => {
                await onCancel();
                dialog?.close();
            }}
            class="dangerous">{cancellationText}</button
        >
    {/snippet}
</Modal>

<style>
    button {
        width: 100%;
        background: var(--dark-primary);
    }
</style>
