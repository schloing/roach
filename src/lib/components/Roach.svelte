<script lang="ts">
    import IconButton from "./IconButton.svelte";
    import Meter from "./Meter.svelte";
    import { Heart, FlagOff, EyeOff } from "lucide-svelte";

    const { id } = $props();

    const { user, title, urgency, price, payout_type, tags } = {
        user: "iwuehruiwegriuwgeriuwei",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        urgency: null,
        price: Math.floor(Math.random() * 100),
        payout_type: null,
        tags: ["hello", "there", "mate"],
    };
</script>

<div class="roach">
    <div class="user-info">
        <p class="user fine">
            @{user}
        </p>
    </div>

    <div class="actions">
        <IconButton icon={Heart} hoverBackground={"var(--pink)"} />
        <IconButton icon={EyeOff} />
        <IconButton icon={FlagOff} />
    </div>

    <div class="info">
        <a href={`/roach/${id}`} class="title">{title}</a>

        <div class="meter">
            <Meter />
        </div>
    </div>

    <div class="price">
        ${price}
        {#if payout_type}
            <span class="price-modifier fine">/hr</span>
        {/if}
    </div>

    <div class="tags">
        {#each tags as tag}
            <div class="tag">{tag}</div>
        {/each}
    </div>
</div>

<style>
    .roach {
        all: unset;
        /* background: linear-gradient(
            135deg,
            var(--accent) 0% 60%,
            var(--green) 95% 150%
        ); */
        background: var(--accent);
        max-width: 100%;
        height: fit-content;
        padding: 0.75em 1em;
        border-radius: 0.75em;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 1fr auto;
        gap: 0.5em;
        align-items: center;
        transition: box-shadow 250ms;
    }

    .roach:hover {
        box-shadow: 0 10px 50px rgba(255, 255, 255, 0.198);
    }

    .tags {
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    .tag {
        background: var(--background);
        padding: 0.1em 0.5em;
        border-radius: 0.5em;
    }

    .user {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .title {
        color: var(--text);
        height: fit-content;
        font-size: 1.1rem;
        text-decoration: underline;
        text-decoration-color: var(--primary);
        text-underline-offset: 5px;
    }

    .actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .price {
        color: var(--primary);
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1;
        text-align: center;
    }

    .price-modifier {
        font-size: 0.9rem;
    }

    .meter {
        height: 20px;
    }
</style>
