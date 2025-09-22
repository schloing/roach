<script>
    const {
        icon,
        size = 24,
        colour = "var(--text)",
        fillColour = "var(--accent)",
        hoverColour = "var(--secondary)",
        activeColour = "var(--primary)",
        className = "",
        ariaLabel = "",
        isToggle = false,
        disabled = false,
        onClick = () => {},
    } = $props();

    let isHovered = $state(false);
    let isActive = $state(false);

    function onClickHandler() {
        if (isToggle) {
            isActive = !isActive;
            onClick();
        }
    }
</script>

<button
    class={`icon-button ${className}`}
    aria-label={ariaLabel}
    {disabled}
    onmouseover={() => (isHovered = true)}
    onmouseout={() => (isHovered = false)}
    onfocus={() => {}}
    onblur={() => {}}
    onclick={(e) => {
        e.stopPropagation();
        onClickHandler();
    }}
>
    <!-- svelte-ignore svelte_component_deprecated -->
    <svelte:component
        this={icon}
        {size}
        {colour}
        fill={isHovered ? hoverColour : isActive ? activeColour : fillColour}
        style={isActive
            ? `stroke: ${activeColour};`
            : "" + isHovered
              ? `stroke: ${hoverColour};`
              : ""}
    />
</button>

<style>
    .icon-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.2em;
        border: none;
        background: none;
        cursor: pointer;
        border-radius: 0.375rem;
        transition: background 0.2s;
    }

    .icon-button:hover:not(:disabled) {
        cursor: crosshair;
    }

    .icon-button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
</style>
