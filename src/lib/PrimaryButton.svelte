<button>
    <slot />
</button>

<style>
    button {
        border: none;
        border-radius: 2em;
        background: var(--primary);
        color: #000 !important;
        box-shadow: 0;
    }

    button:hover {
        background: var(--text);
    }
</style>
