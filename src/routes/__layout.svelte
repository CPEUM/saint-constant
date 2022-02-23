<script>
	import '$styles/styles.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';

	let mapLoaded = false;
</script>

<Nav />
{#if mapLoaded && !$navigating}
	<main in:fade={{}}>
		<div class="grain"></div>
		<article>
			<slot />
		</article>
		<Footer />
	</main>
{/if}
<Map on:load={() => mapLoaded = true} />

<style lang="postcss">
	main {
		position: relative;
	}

	.grain {
		user-select: none;
		pointer-events: none;
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(grain.svg);
		background-repeat: repeat;
		background-size: 700px;
		top: 0;
		left: 0;
		opacity: .5;
		z-index: -1;
	}

	article {
		position: relative;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
