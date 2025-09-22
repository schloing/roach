<script lang="ts">
    import Navbar from '$/lib/Navbar.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import "$/main.css";
	import "$/icons.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

{@render children?.()}