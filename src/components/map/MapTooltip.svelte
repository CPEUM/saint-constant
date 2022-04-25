<script lang="ts">
	import { Marker, type LngLat, type LngLatLike } from 'maplibre-gl';
	import { onDestroy, onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly, scale } from 'svelte/transition';

	export let map: maplibregl.Map;
	export let text: string;
	export let coords: LngLat | LngLatLike;

	let element: HTMLElement;
	let ttipMarker: Marker;

	onMount(() => {
		ttipMarker = new Marker({
			element,
			anchor: 'bottom'
		})
			.setLngLat(coords)
			.addTo(map);
	});

	onDestroy(() => {
		// ttipMarker.remove();
	});
</script>

<div id="wrap" bind:this={element}>
	<div id="inner" in:scale={{ start: 0.8, opacity: 0, duration: 250, easing: expoOut }}>
		<div id="content">
			{text}
		</div>
		<svg id="pin" viewBox="0 0 30 20" width="30" height="20">
			<path d="M 0,0 C 5,0 10,20 15,20 C 20,20 25,0 30,0 Z" />
		</svg>
	</div>
</div>

<style lang="postcss">
	#wrap {
		user-select: none;
		pointer-events: none;
	}

	#inner {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform-origin: bottom center;
	}

	#content {
		display: flex;
		margin: 0;
		padding: 0.8rem 1.2rem;
		background-color: var(--light1);
		border-radius: 2rem;
		box-shadow: 0 2em 3rem -0.5rem rgba(0, 0, 30, 0.2);
		font-family: var(--font-main);
		font-size: 0.8rem;
		color: var(--dark3);
	}

	#pin {
		position: relative;
		display: block;
		margin: 0;
		padding: 0;
		z-index: 1;
		top: -1px;
	}

	path {
		fill: var(--light1);
		stroke: none;
	}
</style>
