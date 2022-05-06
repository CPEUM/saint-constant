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
	import { navigating, page } from '$app/stores';
	import { getSegments } from '$utils/path';
	import { expoIn, expoOut } from 'svelte/easing';
	import { browser } from '$app/env';
	import Loading from '$components/Loading.svelte';
	import { mainScroll } from '$stores/scroll';
	import { mapDisplay, mapFocus, mapHighlight, mapTooltip } from '$stores/map';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import NavBottom from '$components/nav/NavBottom.svelte';
	import MapFeature from '$components/map/MapFeature.svelte';
	import { getData } from '$utils/getData';
	import MapImage from '$components/map/MapImage.svelte';
	import { base } from '$app/paths';
import { route } from '$stores/route';
import { getOffset } from '$utils/element';
import { onMount } from 'svelte';

	export let topRoute = null;
	export let topNavigating = true;
	let mapLoaded = false;
	let mounted = false;

	const municipalFeature = getData('/data/geo/saint-constant.geojson');
	const propositionsFeatures = getData('/data/geo/propositions.geojson');
	function propositionFeatureHover(e: maplibregl.MapLayerMouseEvent) {
		mapTooltip.set({
			text: `${e.features[0].properties.type} ${e.features[0].properties.key}: ${e.features[0].properties.title}`,
			coords: e.features[0].geometry.type.toLowerCase() === 'point' ? (e.features[0].geometry as any).coordinates : e.lngLat
		});
	}

	/**
	 * Scroll to hash, if found in markup.
	 */
	function scrollToHash() {
		if ($page.url.hash) {
			const anchor = document.getElementById($page.url.hash.replace('#', ''));
			if (anchor) {
				document.body.style.scrollBehavior = 'unset';
				anchor.scrollIntoView();
				// document.body.scrollTop = getOffset(document.body, anchor).top;
				return document.body.style.scrollBehavior = 'smooth';
			}
		}
		document.body.style.scrollBehavior = 'unset';
		document.body.scrollTop = 0;
		return document.body.style.scrollBehavior = 'smooth';
	}

	beforeNavigate(({ from, to }) => {
		mapDisplay.setClass('');
		mapHighlight.set(null);
		mapFocus.set(null);
		if (getSegments(from?.href)[0] !== getSegments(to?.href)?.[0]) {
			topNavigating = true;
		}
	});

	afterNavigate(({ from, to }) => {
		if (topNavigating) {
			topNavigating = false;
		}
		scrollToHash();
	});

	function outroend() {
		mounted = true;
		if (topNavigating) topNavigating = false;
	}

	$: if (mapLoaded && mounted) {
		if (browser) {
			setTimeout(() => scrollToHash(), 1000);
		}
	}
</script>

<svelte:head>
	<title>Paysage Saint-Constant{route && $route? ':' + $route.title : ''}</title>
</svelte:head>

<Nav />
<main>
	{#key topRoute}
		{#if mapLoaded && !topNavigating}
			<article in:fly={{ y: 40, duration: 1550, easing: expoOut }} out:fade={{ duration: 350 }} on:outroend={outroend}>
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
			strokeWidth={2}
			strokeOpacity={1}
			strokeDashArray={[1, 2]}
			initialVisibility="visible"
		/>
	{/await}
	{#await propositionsFeatures then geojson}
		<MapFeature
			id="propositions"
			data={geojson}
			fillColor={['get', ['concat', ['get', 'exercice'], '1'], ['literal', colors]]}
			fillColorHover={['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]]}
			fillColorHighlight={['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]]}
			fillOpacity={0}
			fillOpacityHover={0.8}
			fillOpacityHighlight={0.65}
			strokeColor={['get', ['concat', ['get', 'exercice'], '2'], ['literal', colors]]}
			strokeColorHover={['get', ['concat', ['get', 'exercice'], '3'], ['literal', colors]]}
			strokeColorHighlight={['get', ['concat', ['get', 'exercice'], '3'], ['literal', colors]]}
			strokeOpacity={0.5}
			strokeOpacityHover={0.85}
			strokeOpacityHighlight={0.65}
			strokeWidth={6}
			strokeWidthHighlight={8}
			strokeWidthHover={10}
			on:hover={(e) => propositionFeatureHover(e.detail)}
			on:leave={() => mapTooltip.set(null)}
			initialVisibility="visible"
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
		opacity: 0.2;
		z-index: -1;
	}

	article {
		/* position: relative; */
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		@media screen and (max-width: 900px) {
			padding: 0 1rem;
		}
	}
</style>
