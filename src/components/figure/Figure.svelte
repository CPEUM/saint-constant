<script lang="ts">
	import Legend from '$components/legend/Legend.svelte';
	import Loading from '$components/Loading.svelte';
	import Image from '$components/primitives/Image.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import FigureCompass from './FigureCompass.svelte';

	export let src: string;
	export let description: string;
	export let bearing: number = undefined;

	let loaded = false;
	let nMarkers = 0;
	let currentKey = writable(null);
	let legendh;

	setContext('currentKey', currentKey);
	setContext('markers', {
		getIndex: () => nMarkers++
	});
</script>

<figure>
	<div class="image">
		<Image {src} alt={description} on:load={() => (loaded = true)} />
		{#if loaded}
			<slot name="markers" />
			{#if bearing}
				<FigureCompass style="position: absolute; bottom: 1rem; left: 1rem;" {bearing} />
			{/if}
		{:else}
			<Loading />
		{/if}
	</div>
	{#if $$slots.legend}
		<div class="legend" bind:clientHeight={legendh} style:--h="{legendh}px">
			<Legend>
				<slot name="legend" />
			</Legend>
		</div>
	{/if}
</figure>

<style>
	figure {
		box-sizing: border-box;
		left: 0;
		position: relative;
		display: grid;
		grid-template-columns: 1fr minmax(var(--width-sm), auto) 1fr;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: auto;
		padding: 0;
		margin-block: 4rem;
		margin-inline: 0;
	}

	.image {
		position: sticky;
		top: 0;
		width: auto;
		grid-column-start: 2;
		grid-column-end: 3;
		max-width: var(--width-md);
	}

	.legend {
		position: sticky;
		top: calc(50vh - 0.5 * var(--h));
		align-self: baseline;
		padding: 2rem;
		grid-column-start: 3;
		grid-column-end: 4;
	}
</style>
