<script lang="ts">
    import PrimaryButton from "$/lib/PrimaryButton.svelte";
    import Search from "$/lib/Search.svelte";
    import { afterNavigate } from "$app/navigation";

    let scrollY = $state(0);
    let navbarHeight = $state("var(--navbar-height)");
    let navbarBackground = $state("var(--navbar-bg)");

    function handleScrollY() {
        if (scrollY > 100) {
            navbarBackground = "var(--navbar-scrolled-bg)";
            navbarHeight = "var(--navbar-scrolled-height)";
        } else {
            navbarBackground = "var(--navbar-bg)";
            navbarHeight = "var(--navbar-height)";
        }
    }

    afterNavigate(() => {
        scrollY = window.scrollY;
        handleScrollY();
    });
</script>

<svelte:window bind:scrollY on:scroll={handleScrollY} />

<header style:height={navbarHeight} style:background={navbarBackground}>
    <nav>
        <h1><a href="/">roach</a></h1>
        <Search />
        <div class="nav-buttons">
            <button>req</button>
            <PrimaryButton>login</PrimaryButton>
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
            350ms background;
        height: var(--navbar-height);
        background: var(--navbar-bg);
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

        button {
            padding: 0.5rem 1.2rem;
        }

        nav {
            gap: 1em;
        }
    }
</style>
