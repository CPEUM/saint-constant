<script>
	import '$styles/styles.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import Background from '$components/Background.svelte';
	import { mapState } from '$stores/map';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let mapLoaded = false;
</script>

<!-- <Background /> -->
<Nav />
{#if mapLoaded && !$navigating}
	<main in:fade={{}}>
		<article>
			<slot />
		</article>
	</main>
	<Footer />
{/if}
<Map on:load={() => mapLoaded = true} />

<style lang="postcss">
	main {
		position: relative;
	}

	article {
		position: relative;
		/* z-index: 1; */
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
