<script>
	import '$styles/styles.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { mapState } from '$stores/map';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let mapLoaded = false;
</script>

<!-- <svg width="0" height="0">
	<filter id="grain" x="0%" y="0%" height="100" width="100">
		<feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" stitchTiles="stitch" />
		<feColorMatrix type="saturate" values=".4" />
		<feComponentTransfer>
			<feFuncA type="linear" slope=".5" />
		</feComponentTransfer>
		<feComposite operator="in" in2="SourceGraphic" result="masked" />
		<feBlend in="SourceGraphic" in2="masked" mode="overlay" />
	</filter>
</svg> -->

<Nav />
{#if mapLoaded && !$navigating}
	<main in:fade={{}}>
		<!-- <div class="grain" /> -->
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

	.grain {
		pointer-events: none;
		user-select: none;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url(/grain.svg);
		opacity: .35;
		background-repeat: repeat;
		background-size: 1000px;
	}

	article {
		position: relative;
		z-index: 1;
		padding: 0 4rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	/* svg {
		padding: 0;
		margin: 0;
		height: 0;
		width: 0;
		position: absolute;
		overflow: visible;
	} */
</style>
