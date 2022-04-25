<script lang="ts" context="module">
	export function load({ url }) {
		const segments = getSegments(url.pathname);
		return {
			props: {
				topRoute: 'key' + segments[0]
			}
		};
	}
</script>

<script lang="ts">
	import '$styles/styles.postcss';
	import colors from '$styles/colors.json';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { getSegments } from '$utils/path';
	import { expoIn, expoOut } from 'svelte/easing';
	import { browser } from '$app/env';
	import Loading from '$components/Loading.svelte';
	import { mainScroll } from '$stores/scroll';
	import { mapDisplay, mapTooltip } from '$stores/map';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import NavBottom from '$components/nav/NavBottom.svelte';
	import MapFeature from '$components/map/MapFeature.svelte';
	import { getData } from '$utils/getData';

	export let topRoute = null;
	export let topNavigating = true;
	let mapLoaded = false;

	const municipalFeature = getData('/data/geo/saint-constant.geojson');
	const propositionsFeatures = getData('/data/geo/propositions.geojson');
	function propositionFeatureHover(e: maplibregl.MapLayerMouseEvent) {
		mapTooltip.set({
			text: `${e.features[0].properties.type} ${e.features[0].properties.key}: ${e.features[0].properties.title}`,
			coords:
				e.features[0].geometry.type.toLowerCase() === 'point'
					? (e.features[0].geometry as any).coordinates
					: e.lngLat
		});
	}

	beforeNavigate(({ from, to }) => {
		if (getSegments(from?.href)[0] !== getSegments(to?.href)?.[0]) {
			topNavigating = true;
		}
	});

	afterNavigate(({ from, to }) => {
		if (topNavigating) {
			topNavigating = false;
		}
	});

	function outroend() {
		if (topNavigating) topNavigating = false;
		if (browser) {
			console.log('Should scroll to top');
			document.body.style.scrollBehavior = 'unset';
			document.body.scrollTop = 0;
			document.body.style.scrollBehavior = 'smooth';
		}
	}
</script>

<Nav />
<main>
	{#key topRoute}
		{#if mapLoaded && !topNavigating}
			<article
				in:fly={{ y: 40, duration: 1550, easing: expoOut }}
				out:scale={{ opacity: 0, start: 0.98, duration: 350 }}
				on:outroend={outroend}
				style:transform-origin="center {$mainScroll.y}px"
			>
				<slot />
				<div class="grain" />
			</article>
		{/if}
	{/key}
	{#if mapLoaded}
		<NavBottom />
		<Footer />
	{/if}
</main>
{#if !mapLoaded || topNavigating}
	<Loading />
{/if}
<Map on:load={() => (mapLoaded = true)} on:error={() => (mapLoaded = true)}>
	{#await municipalFeature then geojson}
		<MapFeature
			id="municipal"
			data={geojson}
			fillColor="white"
			fillOpacity={0}
			strokeColor={colors.accent3}
			strokeWidth={4}
			strokeOpacity={1}
			strokeDashArray={[0, 1.5]}
		/>
	{/await}
	{#await propositionsFeatures then geojson}
		<MapFeature
			id="propositions"
			data={geojson}
			fillColor={['get', ['concat', ['get', 'exercice'], '1'], ['literal', colors]]}
			fillColorHover={['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]]}
			fillColorHighlight={['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]]}
			fillOpacity={0.5}
			fillOpacityHover={0.8}
			fillOpacityHighlight={0.65}
			strokeColor={['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]]}
			strokeColorHover={['get', ['concat', ['get', 'exercice'], '3'], ['literal', colors]]}
			strokeColorHighlight={[
				'get',
				['concat', ['get', 'exercice'], '3'],
				['literal', colors]
			]}
			strokeOpacity={0.5}
			strokeOpacityHover={0.8}
			strokeOpacityHighlight={0.65}
			on:hover={(e) => propositionFeatureHover(e.detail)}
			on:leave={() => mapTooltip.set(null)}
		/>
	{/await}
</Map>

<style lang="postcss">
	main {
		position: relative;
		padding: 0;
		margin: 0;
	}

	.grain {
		/* See global styles for rest */
		opacity: 0.35;
		z-index: -1;
	}

	article {
		/* position: relative; */
		padding: 0 4rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		@media screen and (max-width: 900px) {
			padding: 0 1rem;
		}
	}
</style>
