<script lang="ts">
    import Navbar from '$/lib/components/Navbar.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import "$/main.css";
	import "$/icons.css";

	const { data, children } = $props();
</script>

<svelte:head>
	<title>roach</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar data={data} />

{@render children?.()}