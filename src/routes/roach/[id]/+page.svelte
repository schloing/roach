<script lang="ts">
    import IconButton from "$/lib/components/IconButton.svelte";
    import Meter from "$/lib/components/Meter.svelte";
    import {
        Heart,
        FlagOff,
        EyeOff,
        MessageSquare,
        ArrowBigUp,
        ArrowBigDown,
    } from "lucide-svelte";
    import { page } from "$app/state";

    const { id } = page.params;

    const {
        user,
        title,
        description,
        about,
        urgency,
        price,
        payout_type,
        tags,
    } = {
        user: "iwuehruiwegriuwgeriuwei",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate nesciunt facilis iure quod quos, aliquam eligendi deleniti quibusdam reiciendis recusandae cumque numquam blanditiis neque aut quasi. Dicta, minima dolorem.
    Quidem, minima consequatur. Tenetur et perferendis accusamus repudiandae magnam repellat, qui nisi deserunt veniam rem nostrum eum fugit, tempore sit, architecto doloribus ex illum molestias praesentium consequatur! Repellat, iusto ab!
    Quis iste quos veritatis, et dolorum ab cumque asperiores perspiciatis minima. Eos similique at, voluptatum amet error deleniti. Sit nam alias perferendis, temporibus aliquam quos eligendi ipsum facere beatae sint.
    Vel incidunt modi iure, reprehenderit, commodi facilis dolores dignissimos impedit pariatur eveniet quidem ad quam, voluptas blanditiis culpa vero cupiditate? Sunt veniam repellat eos provident dicta cum hic commodi rem.
    Odit, error maxime. Voluptatibus vero enim facilis officia dolorem perspiciatis repellat a, commodi nesciunt porro exercitationem autem animi libero, quaerat pariatur numquam repellendus! Maiores laboriosam necessitatibus cupiditate expedita libero officia.
    Nam quibusdam dolorem possimus. Illo dignissimos itaque modi ipsam reiciendis dolorem fuga aperiam quae nemo! Dignissimos ex consectetur libero earum voluptas sit quod at fuga optio praesentium, facere soluta hic.
    Architecto cum nihil ipsa consequatur delectus repudiandae praesentium debitis id voluptates exercitationem, tempora repellendus eos nesciunt laborum recusandae, error, explicabo placeat. Aut voluptatibus a, sit necessitatibus nemo recusandae animi unde.
    Alias voluptas, ad corrupti, corporis dolor veniam ipsa ut expedita, fugit itaque deleniti quaerat modi architecto. Ullam minus culpa voluptas dolorem doloremque animi rem, nobis ipsum! Quos voluptatibus velit facere.
    Exercitationem perferendis quibusdam eligendi doloribus unde. Repellat reiciendis totam quibusdam explicabo. Sunt harum fugiat omnis optio iste, ex voluptas? In quae placeat id quisquam. Qui minus recusandae reprehenderit ipsa eveniet!
    Dignissimos dolore quos laudantium eius ea repellat odit, sint maxime accusamus dicta tempora amet blanditiis reprehenderit harum, accusantium quo provident qui saepe mollitia tempore ducimus veritatis voluptatem rerum at. Obcaecati!`,
        about: "Big dick rick",
        urgency: null,
        price: Math.floor(Math.random() * 100),
        payout_type: null,
        tags: ["hello", "there", "mate"],
    };
</script>

<main>
    <div class="page">
        <div>
            <h1>{title}</h1>

            <p>{description}</p>

            <div class="floaters">
                <div class="actions">
                    <IconButton
                        icon={Heart}
                        isToggle={true}
                        activeColour="var(--pink)"
                    />
                    <IconButton icon={EyeOff} isToggle={true} />
                    <IconButton icon={FlagOff} isToggle={true} />
                </div>

                <div class="separator"></div>

                <div class="tags">
                    {#each tags as tag}
                        <div class="tag">{tag}</div>
                    {/each}
                </div>
            </div>

            <div class="meter">
                <Meter />
            </div>
        </div>

        <div>
            <div class="price">
                ${price}
                {#if payout_type}
                    <span class="price-modifier fine">/hr</span>
                {/if}
            </div>

            <img
                src="https://placehold.co/256x256"
                width="128"
                height="128"
                alt="profile"
            />

            <div class="user-info">
                <p class="user fine">
                    @{user}
                </p>

                <p class="user fine">"{about}"</p>

                <p>buyer + seller</p>

                <div class="actions">
                    <IconButton icon={MessageSquare} isToggle={true} />

                    <IconButton
                        icon={ArrowBigUp}
                        isToggle={true}
                        activeColour="var(--orange)"
                    />
                    <span>1823</span>

                    <IconButton
                        icon={ArrowBigDown}
                        isToggle={true}
                        activeColour="var(--orange)"
                    />
                    <span>1823</span>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .tags {
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    .floaters {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .user {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .tag {
        background: var(--background);
        padding: 0.1em 0.5em;
        border-radius: 0.5em;
    }

    .actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: fit-content;
        border-radius: 0.5em;
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

    .page {
        display: flex;
        gap: 1em;
    }

    .user-info {
        text-align: center;
        width: fit-content;
        min-width: 220px;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .user-info > div {
        margin: 0 auto;
    }

    .page > div {
        background: var(--accent);
        padding: 2.2em 1.5em;
        border-radius: 0.75em;
        display: grid;
        grid-template-rows: auto;
        align-items: center;
        justify-content: center;
        gap: 1em;
        height: fit-content;
    }

    .page > div > img {
        margin: 0 auto;
    }

    .separator {
        height: 1rem;
        width: 0.1rem;
        background: var(--secondary);
        margin: 0 1rem;
    }
</style>
