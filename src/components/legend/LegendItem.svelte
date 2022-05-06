<script lang="ts">
	import type { SymbolShape } from '$components/primitives/Symbol.svelte';
	import Symbol from '$components/primitives/Symbol.svelte';
	import { LngLat, type LngLatLike } from 'maplibre-gl';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let label: string | number = undefined;
	export let key: string | number = undefined;
	export let dataKey: string | number = undefined;
	export let interactive: boolean = undefined;
	export let highlight: boolean = false;
	/* Symbol options */
	export let shape: SymbolShape = 'circle';
	export let symbolScale: number = 1;
	export let color: string = 'var(--light1)';
	export let opacity: number = 1;
	export let fill: string = 'var(--accent2)';
	export let stroke: string = null;
	export let strokeWidth: number = 0;
	export let strokeDashArray: string = undefined;
	export let colorHighlight: string = undefined;
	export let fillHighlight: string = undefined;
	export let strokeHighlight: string = undefined;
	export let strokeWidthHighlight: number = undefined;
	export let arrowEnd: boolean = false;
	export let arrowStart: boolean = false;
	export let src: string = undefined;
	export let lnglat: LngLat | LngLatLike = undefined;
	export let zoom: number = undefined;

	$: if (key || lnglat || dataKey) {
		interactive = true;
	}

	const currentKey = getContext('currentKey') as Writable<string | number>;
	const currentDataKey = getContext('currentDataKey') as Writable<string | number>;
	const currentView = getContext('currentView') as Writable<{ lnglat: LngLat | LngLatLike; zoom?: number }>;

	function setCurrent() {
		if (currentKey && key) {
			currentKey.set(key);
		} else if (currentView && lnglat) {
			currentView.set({ lnglat, zoom });
		} else if (currentDataKey && dataKey) {
			currentDataKey.set(dataKey);
		}
	}

	function clearCurrent() {
		if (currentKey && key) {
			currentKey.set(null);
		} else if (currentView && lnglat) {
			currentView.set(null);
		} else if (currentDataKey && dataKey) {
			currentDataKey.set(null);
		}
	}
</script>

<div class:interactive on:mouseover on:mouseleave on:mouseover={setCurrent} on:mouseleave={clearCurrent} on:focus class:highlight={highlight || (currentKey && $currentKey && $currentKey === key)}>
	<dt>
		<Symbol
			style="transform: scale({symbolScale})"
			{label}
			{color}
			{fill}
			{stroke}
			{opacity}
			{strokeWidth}
			{colorHighlight}
			{fillHighlight}
			{strokeHighlight}
			{strokeWidthHighlight}
			{src}
			{shape}
			{interactive}
			{highlight}
			{strokeDashArray}
		/>
	</dt>
	<dd>
		<slot />
	</dd>
</div>

<style lang="postcss">
	div {
		--corner: 0.75rem;
		user-select: none;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: auto;
		gap: 0.5em;
		padding: 0.4em 0.5em;
		opacity: 0.9;
		box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0);
		transition: all 0.2s ease-out;

		&:first-child {
			padding-top: 0.65em;
		}
		&:last-child {
			padding-bottom: 0.65em;
		}
	}

	.interactive {
		cursor: pointer;
	}

	div.highlight,
	div.interactive:hover {
		opacity: 1;
		background-color: white;
		box-shadow: 0 0 1em -0.5em rgba(0, 0, 0, 0.2);
	}

	dt {
		position: relative;
		display: inline-flex;
		align-self: flex-start;
		justify-content: flex-start;
		margin: 0;
		padding: 0;
		width: 30px;
		height: 30px;
	}

	dd {
		position: relative;
		display: inline-block;
		flex: 1;
		margin: 0;
		padding: 0;
		padding-right: 0.5em;
		width: auto;
		min-width: 50px;
		color: var(--dark3);
	}
</style>
