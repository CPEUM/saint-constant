<script lang="ts">
	import type { SymbolShape, SymbolStrokeType } from '$components/primitives/Symbol.svelte';
	import { getContext, onDestroy, onMount } from 'svelte';
	import Symbol from '$components/primitives/Symbol.svelte';
	import { map } from '$components/map/Map.svelte';
	import { LngLat, Marker, type LngLatLike } from 'maplibre-gl';
	import { fly } from 'svelte/transition';
	import type { Writable } from 'svelte/store';
	import { expoOut } from 'svelte/easing';
	import { mapFocus } from '$stores/map';

	/* Symbol props */
	export let label: string | number;
	export let src: string = null;
	export let shape: SymbolShape = 'circle';
	export let color: string = 'var(--accent3)';
	export let fill: string = 'var(--light1)';
	export let stroke: string = 'none';
	export let colorHighlight: string = undefined;
	export let fillHighlight: string = undefined;
	export let strokeHighlight: string = undefined;
	export let strokeWidth: number = 1;
	export let strokeType: SymbolStrokeType = 'solid';
	export let interactive = true;
	export let highlight = false;
	export let active = true;
	export let key: string | number = label;
	export let size: number = 40;
	/* If map marker */
	export let lnglat: LngLat | LngLatLike = null;
	export let zoom: number = 16;
	/* else, if image marker */
	export let x: number = null;
	export let y: number = null;

	let marker: Marker;
	let el: HTMLElement;
	const figCtx = getContext('figure') as any;
	const figmapCtx = getContext('figuremap') as any;
	const markerCtx = getContext('markers') as any;
	const index = markerCtx ? markerCtx.getIndex() : 0;
	const currentKey = getContext('currentKey') as Writable<string | number>;

	const mapActive = figmapCtx ? (figmapCtx.active as Writable<boolean>) : null;

	$: if (figmapCtx && lnglat && currentKey && $currentKey === key) {
		mapFocus.set({ center: { point: lnglat, zoom } });
	}

	function setCurrent() {
		currentKey.set(key);
	}

	function unsetCurrent() {
		currentKey.set(null);
	}

	onMount(() => {
		if (figmapCtx) {
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

<div class="outer" {...$$restProps} bind:this={el} style:font-size="{size}px" style="{x ? `transform: translate(-50%, -50%); left: ${x}%;` : ''} {y ? `top: ${y}%;` : ''}">
	{#if (active && !mapActive) || (mapActive && $mapActive)}
		<div
			class="inner"
			in:fly={{ y: 15, duration: 1000, easing: expoOut, delay: index * 150 + 500 }}
			on:mouseenter={setCurrent}
			on:mouseleave={unsetCurrent}
			class:highlight={highlight || key == $currentKey}
		>
			<Symbol {src} {label} {color} {fill} {colorHighlight} {fillHighlight} {shape} {stroke} {strokeWidth} {strokeType} {interactive} highlight={highlight || key == $currentKey} />
		</div>
	{/if}
</div>

<style>
	.outer {
		z-index: 1;
		user-select: none;
		pointer-events: none;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-main);
		padding: 0;
		margin: 0;
		width: 1em;
		height: 1em;
		line-height: 0;
	}

	.inner {
		position: absolute;
		pointer-events: all;
		transition: transform 0.25s ease-out;
	}

	.highlight {
		transform: scale(1.5);
	}
</style>
