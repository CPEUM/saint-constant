<script>
	import '$styles/styles.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { isMapFull } from '$stores/map';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg">
	<filter id="grain" x="0%" y="0%" height="100%" width="100%">
		<feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="2" stitchTiles="stitch" />
		<!-- <feColorMatrix type="saturate" values=".3" />
		<feComponentTransfer>
			<feFuncA type="linear" slope=".4" />
		</feComponentTransfer> -->
		<!-- <feComposite operator="in" in2="SourceGraphic" result="masked" /> -->
		<!-- <feBlend in="SourceGraphic" in2="masked" mode="overlay" /> -->
	</filter>
</svg>

<Nav />
{#if mounted && !$navigating}
	<main in:fade={{}} class:is-map-full={$isMapFull}>
		<div class="grain" />
		<article>
			<slot />
		</article>
		<Footer />
	</main>
{/if}
<!-- <Map /> -->

<style lang="postcss">
	main {
		position: relative;
	}

	.grain {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url(/grain.svg);
		opacity: .3;
		background-repeat: repeat;
		background-size: 900px;
	}

	article {
		position: relative;
		z-index: 1;
	}

	svg {
		padding: 0;
		margin: 0;
		height: 0;
		width: 0;
		position: absolute;
		overflow: visible;
	}
</style>
