<script lang="ts">
    import { providers } from "$/lib/auth_providers";
    import { goto } from "$app/navigation";
    import { signIn } from "@auth/sveltekit/client";
    import { onMount } from "svelte";

    const { data } = $props();
    const { session } = data;

    onMount(() => {
        if (session) {
            goto(`/user/${session.id}`);
        }
    });
</script>

<svelte:head>
    <title>roach - login</title>
</svelte:head>

<main>
    <div class="form">
        <h1>roach access</h1>
        {#each providers as provider}
            <button onclick={() => signIn(provider.id)}
                >Sign in with {provider.name}</button
            >
        {/each}
    </div>
</main>
