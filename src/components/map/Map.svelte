<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { Map as M } from 'maplibre-gl';
	import { mapState } from '$stores/map';

	let map: M;
	let container: HTMLElement;
	const dispatch = createEventDispatcher<{load: null}>();

	async function getData(filepath) {
		const res = await fetch(filepath);
		if (res.ok) {
			return await res.json();
		}
		else {
			throw new Error('Couldn\'t get data fetched from map component');
		}
	}

	onMount(async () => {
		getData('/data/test.json');

		map = new M({
			container,
			style: 'mapbox://styles/iolyd/ckzw8nw7y001z14pq7ek199lr', // style URL
			center: [0, 0], // starting position [lng, lat]
			zoom: 1 // starting zoom
		});

		map.once('load', () => {
			dispatch('load');
		})
	});
</script>


<figure
	class:full={$mapState.isfull}
	class={$mapState.class}
	style={$mapState.style}
>
	<div bind:this={container}></div>
</figure>


<style lang="postcss">
	figure {
		--ease: cubic-bezier(.9, 0, .1, 1);
		pointer-events: auto;
		position: fixed;
		z-index: -1;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		bottom: 50%;
		left: 50%;
		right: 50%;
		opacity: 0;
		border-radius: 500px;
		width: auto;
		height: auto;
		padding: 0;
		margin: 0;
		overflow: hidden;
		transition: all .4s var(--ease);

		&.full {
			opacity: 1;
			z-index: 1;
			top: 0 !important;
			bottom: 0 !important;
			left: 0 !important;
			right: 0 !important;
			border-radius: 0 !important;
		}

		&:global(.half) {
			--offset-inside: 50%;
			--offset-outside: 0;
			opacity: 1;
			border-radius: 0;
			top: 0;
			bottom: 0;
		}

		&:global(.medium) {
			--offset-inside: max(0px, calc(50vw - var(--width-lg) / 4));
			--offset-outside: max(0px, calc(50vw - var(--width-lg) / 2));
			opacity: 1;
			border-radius: 0px;
			top: max(120px, calc(50vh - 500px));
			bottom: max(120px, calc(50vh - 500px));
			box-shadow: 0px 75px 100px -25px rgba(0,0,0, .05);
		}

		&:global(.left) {
			right: var(--offset-inside);
			left: var(--offset-outside);
		}

		&:global(.right) {
			right: var(--offset-outside);
			left: var(--offset-inside);
		}
	}

	div {
		position: absolute;
		padding: 0;
		margin: 0;
		width: 100vw;
		height: 100vh;
	}

</style>