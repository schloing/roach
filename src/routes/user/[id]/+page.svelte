<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    import { signOut } from "@auth/sveltekit/client";
    import { Link, Pencil } from "lucide-svelte";
    import { page } from "$app/state";
    import { setProfilePicture, setUsername } from "./profile.remote";
    import IconButton from "$/lib/components/IconButton.svelte";
    import FormModal from "$/lib/components/FormModal.svelte";
    import { userSelectSchema } from "$/lib/db/validation";
    import z from "zod";

    const { data } = $props();
    const { session, queryUser } = data;

    const id = page.params.id;
    const isSelf = session?.id === id;

    let user: z.infer<typeof userSelectSchema> | undefined = $state();

    try {
        user = z.parse(userSelectSchema, isSelf ? session : queryUser);
    } catch (err) {
        console.error((err as Error).message);
        redirect(308, "/");
    }

    // svelte-ignore non_reactive_update
    let imageUrlInput: string;
    // svelte-ignore non_reactive_update
    let usernameInput: string;

    let showAvatarModal = $state(false);
    let showDeleteConfirmationModal = $state(false);
    let showUsernameModal = $state(false);

    async function requestUserDeletion() {}
</script>

<svelte:head>
    <title>roach - {user ? user.name : "user"}</title>
</svelte:head>

<main>
    {#if user}
        <div class="form">
            <h1>
                {user.name}
                {#if isSelf}
                    <IconButton
                        onclick={() => (showUsernameModal = true)}
                        icon={Pencil}
                    />
                {/if}
            </h1>

            <div class="img-placeholder">
                <button
                    onclick={() => (isSelf ? (showAvatarModal = true) : null)}
                >
                    {#if user.imageURL}
                        <img
                            src={user.imageURL}
                            alt="profile"
                            class="avatar-img"
                        />
                    {/if}
                    {#if isSelf}
                        <span class="overlay-link"><Link /></span>
                    {/if}
                </button>
            </div>

            <p>"{user.flair}"</p>
            <p>{user.email}</p>

            {#if isSelf}
                <button onclick={() => signOut()}>Sign out</button>
                <button
                    class="dangerous"
                    onclick={() => (showDeleteConfirmationModal = true)}
                    >Delete</button
                >
            {/if}
        </div>
    {/if}

    <FormModal
        headerText="username"
        confirmationText="Set username"
        bind:showSelf={showUsernameModal}
        onConfirm={async () => {
            try {
                await setUsername(usernameInput);
                window.location.reload();
            } catch (e) {
                const error = e as {
                    status: number;
                    body: { message: string };
                };
                alert(`failed to set username, mate: ${error.body.message}`);
            }
        }}
    >
        <input
            type="text"
            placeholder="new username..."
            bind:value={usernameInput}
        />
    </FormModal>

    <FormModal
        headerText="profile picture"
        confirmationText="Set profile picture"
        bind:showSelf={showAvatarModal}
        onConfirm={async () => {
            const result = await setProfilePicture(imageUrlInput);
            showAvatarModal = false;
            if (!result) {
                alert("failed to set the profile picture, mate");
            }
            window.location.reload();
        }}
    >
        <input
            type="text"
            placeholder="image url..."
            bind:value={imageUrlInput}
        />
    </FormModal>

    <FormModal
        headerText="delete profile?"
        bind:showSelf={showDeleteConfirmationModal}
        onConfirm={async () => {
            await requestUserDeletion();
            showDeleteConfirmationModal = false;
            alert("user deleted");
            window.location.reload();
        }}
    >
        <p>
            your profile and all associated roaches <strong>will</strong> be deleted
        </p>
    </FormModal>
</main>

<style>
    .img-placeholder {
        width: 128px;
        height: 128px;
    }

    .img-placeholder > button {
        position: relative;
        background: var(--background);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        padding: 0;
        overflow: hidden;
        cursor: pointer;
    }

    .avatar-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        transition: opacity 0.25s ease;
    }

    .overlay-link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.25s ease;
        pointer-events: none;
        font-size: 2rem;
    }

    .img-placeholder > button:hover .avatar-img {
        opacity: 0.2;
    }

    .img-placeholder > button:hover .overlay-link {
        opacity: 1;
    }

    button {
        width: 100%;
        background: var(--dark-primary);
    }
</style>
