<script lang="ts">
    import PrimaryLink from "./PrimaryLink.svelte";
    import Search from "./Search.svelte";
    import { afterNavigate } from "$app/navigation";

    const { data } = $props();
    const { session } = data;

    let scrollY = $state(0);

    afterNavigate(() => {
        scrollY = window.scrollY;
    });
</script>

<svelte:window bind:scrollY />

<header class={scrollY > 10 ? "compact" : ""}>
    <nav>
        <h1><a href="/">roach</a></h1>
        <Search />
        <div class="nav-buttons">
            <a class="button" href="/req/">req</a>
            {#if !session}
                <PrimaryLink href="/user/login">login</PrimaryLink>
            {:else}
                <PrimaryLink href={`/user/${session.id}`}>{session.name}</PrimaryLink>
            {/if}
        </div>
    </nav>
</header>

<style>
    :root {
        --navbar-height: 120px;
        --navbar-scrolled-height: 80px;

        --navbar-bg: var(--background);
        --navbar-scrolled-bg: var(--accent);
    }

    header {
        position: sticky;
        top: 0;
        transition:
            350ms height,
            350ms background,
            350ms box-shadow;
        height: var(--navbar-height);
        background: var(--navbar-bg);
    }

    .compact {
        height: var(--navbar-scrolled-height);
        background: var(--navbar-scrolled-bg);
    }

    nav {
        width: fit-content;
        height: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3em;
    }

    h1 {
        font-size: 2.8rem;
    }

    .nav-buttons {
        display: flex;
        gap: 1em;
    }

    @media (width <= 1075px) {
        h1 {
            display: none;
        }

        .button {
            padding: 0.5rem 1.2rem;
        }

        nav {
            gap: 1em;
        }
    }
</style>
