<script lang="ts" context="module">
	import { Map as M } from 'maplibre-gl';
	/**
	 * General map, accessible throughout the app!
	 */
	let map: M;
	export function getMap() {
		return map;
	}
</script>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { mapState } from '$stores/map';
	import { getData } from '$utils/getData';

	let container: HTMLElement;
	const dispatch = createEventDispatcher<{load: null}>();

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
		});
	});
</script>

<figure
	class:full={$mapState.isfull}
	class={$mapState.class}
	class:mask={$mapState.mask.top}
	style:top={$mapState.mask.top}
	style:right={$mapState.mask.right}
	style:bottom={$mapState.mask.bottom}
	style:left={$mapState.mask.left}
>
	<div bind:this={container}></div>
</figure>


<style lang="postcss">
	figure {
		--ease: cubic-bezier(.3, 0, 0, 1);
		pointer-events: auto;
		position: fixed;
		z-index: -1;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 40%;
		bottom: 40%;
		left: 40%;
		right: 40%;
		opacity: 0;
		border-radius: 500px;
		width: auto;
		height: auto;
		padding: 0;
		margin: 0;
		overflow: hidden;
		transition: all .4s var(--ease);

		&.full {
			opacity: 1 !important;
			z-index: 1 !important;
			top: 0 !important;
			bottom: 0 !important;
			left: 0 !important;
			right: 0 !important;
			border-radius: 0 !important;
		}

		&.mask:not(.full) {
			opacity: 1;
			border-radius: 0;
			transition: all .6s ease-in-out;
		}

		&:global(.figure) {
			opacity: .5;
			top: 0rem;
			right: 0rem;
			bottom: 0rem;
			left: 0rem;
			border-radius: 0;
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
			border-radius: 2rem;
			top: max(120px, calc(50vh - 500px));
			bottom: max(120px, calc(50vh - 500px));
			box-shadow: 0px 40px 80px -25px rgba(0,0,25, .1);
		}

		&:global(.left) {
			right: var(--offset-inside);
			left: var(--offset-outside);
		}

		&:global(.right) {
			right: var(--offset-outside);
			left: var(--offset-inside);
		}

		&:global(.proposition) {
			top: 0;
			left: 50%;
			right: 0;
			bottom: 0;
			opacity: 1;
			border-radius: 0;
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