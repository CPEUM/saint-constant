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
	})
</script>


<svg width="0" height="0">
	<filter id="grain" height="100%" width="100%">
		<feTurbulence
			type="fractalNoise"
			baseFrequency="5.5"
			numOctaves="2"
			stitchTiles="stitch"
		/>
		<feColorMatrix type="saturate" values=".3"/>
		<feComponentTransfer>
			<feFuncA type="linear" slope=".4"/>
		  </feComponentTransfer>
		<feComposite operator="in" in2="SourceGraphic" result="masked" />
		<feBlend in="SourceGraphic" in2="masked" mode="overlay" />
	</filter>
</svg>

{#if mounted && !$navigating}
	<main
		in:fade={{}}
		class:is-map-full={$isMapFull}
	>
		<slot/>
		<Footer />
	</main>
{/if}
<Map />
<Nav />



<style lang="postcss">
	main {
		/* background: url(/grain.svg);
		background-repeat: repeat; */
	}

	svg {
		padding: 0;
		margin: 0;
		height: 0;
		width: 0;
		position: absolute;
	}
</style>