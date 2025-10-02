<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    import Button from "./Button.svelte";

    const {
        icon,
        hoverColor,
        hoverBackground,
        ...props
    }: {
        icon: any;
        hoverColor?: string | undefined;
        hoverBackground?: string | undefined;
    } & HTMLButtonAttributes = $props();
</script>

<div
    style="--hover-color: {hoverColor ??
        'var(--text)'}; --hover-background: {hoverBackground ?? 'none'}"
>
    <Button {...props} class="button">
        {@const Icon = icon}
        <Icon class="icon" />
    </Button>
</div>

<style>
    div {
        margin: 0 0.2rem;
        display: inline-block;
    }

    :global(button:hover .icon) {
        color: var(--hover-color, var(--text));
        fill: var(--hover-background, none);
    }
</style>
