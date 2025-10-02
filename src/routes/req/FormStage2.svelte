<script lang="ts">
    import UrgencyText from "$/lib/components/UrgencyText.svelte";
    import { onMount } from "svelte";
    import { Plus } from "lucide-svelte";
    import FormModal from "$/lib/components/FormModal.svelte";
    import { fade, slide } from "svelte/transition";

    const requests: string[] = [
        "Pick up my kid from school",
        "Watch my bag while I run to the restroom",
        "Hold my spot in line",
        "Help me carry this couch upstairs",
        "Feed my cat while I’m gone for the weekend",
        "Come to the pharmacy with me and translate what the pharmacist says",
        "Call my phone because I lost it somewhere here",
        "Walk me home because it’s dark",
        "Stand in for me at a meeting and take notes",
        "Cover my shift for two hours",
        "Sit with my elderly parent while I run errands",
        "Help mediate an argument between roommates",
        "Go check if the gas stove is turned off at my place",
        "Pick up my prescription right now",
        "Return a package to the post office before it closes",
        "Be my plus-one at a social event so I don’t go alone",
        "Go check if my car got towed",
        "Help me jump-start my car",
        "Come get me because I missed the last bus",
        "Walk my drunk friend home safely",
        "Bring soup to a sick neighbor",
        "Deliver flowers in person for me",
        "Take a picture of me with this group",
        "Help me rehearse lines for a play/a speech",
        "Be a witness while I sign something",
        "Stay at my house to wait for a repair person",
        "Knock on a neighbor’s door and ask them to turn down the music",
        "Help me find my lost dog in the neighborhood",
        "Lend me your charger right now",
        "Watch my kid at the playground while I take a phone call",
        "Go check on my Airbnb guest because I’m not in town",
        "Be an emergency contact for this appointment",
        "Come to the ER with me",
        "Help me set up chairs before a party starts",
        "Stay with me while I pack and move out quickly",
        "Talk to the landlord because I’m too nervous",
        "Run to the store to grab candles during a blackout",
    ];

    let {
        urgencyValue = $bindable(35),
        titleValue = $bindable(""),
        tags = $bindable([]),
        validate = $bindable(),
    }: {
        urgencyValue: number;
        titleValue: string;
        tags: string[];
        validate: (() => boolean) | undefined;
    } = $props();

    let placeholderValue = $state(
        requests[Math.floor(Math.random() * requests.length)],
    );

    let showAddTag = $state(false);
    let tagsValue = $state("");

    onMount(() => {
        setInterval(() => {
            placeholderValue =
                requests[Math.floor(Math.random() * requests.length)];
        }, 5000);
    });

    validate = () => {
        return false;
    };

    let tagsInput: HTMLInputElement;
</script>

<div class="roach-wrapper" in:fade={{ duration: 250 }}>
    <h2>What task?</h2>

    <div class="roach-lite">
        <h1>
            (<UrgencyText bind:value={urgencyValue} />)
        </h1>
        <!-- svelte-ignore a11y_autofocus -->
        <input
            autofocus
            type="text"
            autocomplete="off"
            placeholder={placeholderValue}
            class="roach-input"
            maxlength="120"
            bind:value={titleValue}
        />
    </div>

    <textarea placeholder={placeholderValue}></textarea>

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="tags">
        {#if tags.length > 0}
            {#each tags as tag}
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div
                    class="tag"
                    onclick={() => (tags = tags.filter((item) => item != tag))}
                >
                    <p>{tag}</p>
                </div>
            {/each}
        {:else}
            <div class="tag">
                <p class="fine">add tags...</p>
            </div>
        {/if}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div class="tag" onclick={() => (showAddTag = true)}><Plus /></div>
    </div>
</div>

<FormModal
    headerText="hello mate"
    bind:showSelf={showAddTag}
    confirmationText="Add tag"
    onConfirm={() => {
        tags = [...tags, ...tagsValue.split(",")] as string[];
        tagsInput.value = "";
    }}
>
    <input
        type="text"
        placeholder="eg. online, tutor"
        bind:value={tagsValue}
        bind:this={tagsInput}
    />
</FormModal>

<style>
    .roach-wrapper {
        width: 100%;
        text-align: center;
    }

    .roach-lite {
        display: grid;
        width: 100%;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 1em;
    }

    .roach-input,
    textarea {
        padding: 0.6em 0.2em;
        background: var(--background);
        outline: none;
        border: none;
        color: var(--text);
    }

    .roach-input {
        border-radius: 0;
        max-width: 100%;
        font-size: 2.6rem;
        margin: 0;
        display: block;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
    }

    textarea {
        resize: none;
        width: 100%;
        font-size: 1.2rem;
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
        display: flex;
        align-items: center;
    }

    .tag p {
        transition: color 250ms;
    }

    .tag:hover p {
        text-decoration: line-through;
        color: var(--secondary);
    }
</style>
