<script lang="ts" context="module">
	export interface PieChartDatum {
		key: string | number;
		value: number;
	}

	export interface PieChartColumn {
		label: string;
		title?: string;
		color?: string;
	}

	export type PieChartColumns = Record<string | number, PieChartColumn>;
</script>

<script lang="ts">
	import { map } from '$components/map/Map.svelte';
	import { mapFocus } from '$stores/map';
	import { LngLat, Marker, type LngLatLike } from 'maplibre-gl';
	import { getContext, onDestroy, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { scale } from 'svelte/transition';

	export let data: PieChartDatum[];
	export let columns: PieChartColumns;
	export let size: number = 100;
	/**
	 * Contextual map's feature key.
	 */
	export let mapKey = undefined;
	export let lnglat: LngLat | LngLatLike = undefined;
	export let zoom: number = 15;
	/**
	 * Contexts
	 */
	const currentDataKey = getContext('currentDataKey') as Writable<string | number>;
	const currentMapKey = getContext('currentKey') as Writable<string | number>;
	const figCtx = getContext('figure') as any;
	const figmapCtx = getContext('figuremap') as any;
	const markerCtx = getContext('markers') as any;
	const index = markerCtx ? markerCtx.getIndex() : 0;
	const mapActive = figmapCtx ? (figmapCtx.active as Writable<boolean>) : null;
	let currentchart = false;

	$: if (figmapCtx && lnglat && currentMapKey && $currentMapKey === mapKey) {
		mapFocus.set({ center: { point: lnglat, zoom } });
	}

	let el: HTMLElement;
	let marker: Marker;

	const circonf = 157.0796;
	// const total = data.reduce((acc, curr) => acc + curr.value, 0);
	let total = 0;
	const offsetData = data.map((datum) => {
		const offset = total;
		total += datum.value;
		return { ...datum, offset };
	});

	$: currentchart = currentMapKey && mapKey && $currentMapKey === mapKey;

	// function setMapCurrent() {
	// 	currentMapKey.set(mapKey);
	// }

	// function unsetMapCurrent() {
	// 	currentMapKey.set(null);
	// }

	// function setDataCurrent() {
	// 	currentDataKey.set(sliceKey);
	// }

	// function unsetDataCurrent() {
	// 	currentDataKey.set(null);
	// }

	onMount(() => {
		if (figmapCtx && lnglat) {
			marker = new Marker({
				element: el,
				anchor: 'center'
			})
				.setLngLat(lnglat)
				.addTo(map);
		}
	});

	onDestroy(() => {});
</script>

<div class="outer" bind:this={el}>
	{#if !mapActive || (mapActive && $mapActive)}
		<figure class:currentchart in:scale={{ start: 0.4, opacity: 0, delay: index * 50 }} style:font-size="{size}px">
			<svg width="100" height="100" viewBox="0 0 100 100">
				{#each offsetData as datum}
					<circle
						r="25"
						cx="50"
						cy="50"
						stroke={columns[datum.key].color}
						stroke-width="50"
						stroke-dasharray="{(datum.value / total) * circonf} {circonf}"
						fill="none"
						transform-origin="50% 50%"
						transform="rotate({(datum.offset / total) * 360}) {currentDataKey && $currentDataKey === datum.key ? 'scale(1.2)' : ''}"
					/>
				{/each}
			</svg>
		</figure>
	{/if}
</div>

<style lang="postcss">
	figure {
		dispaly: block;
		position: relative;
		padding: 0;
		margin: 0;
	}

	svg {
		dispaly: block;
		padding: 0;
		margin: 0;
		width: 1em;
		height: 1em;
		position: relative;
		overflow: visible;
		transform: scale(1);
		transition: transform 0.5s ease-in-out;
	}

	circle {
		transition: all 0.3s;
	}

	.currentchart svg {
		transform: scale(1.5);
	}
</style>
