<script lang="ts">
	import type { SymbolShape, SymbolStrokeType } from '$components/primitives/Symbol.svelte';
	import { getContext } from 'svelte';
	import Symbol from '$components/primitives/Symbol.svelte';

	/* Symbol props */
	export let label: string | number;
	export let src: string = null;
	export let color: string = 'var(--dark1)';
	export let fill: string = 'var(--accent1);';
	export let shape: SymbolShape = 'circle';
	export let stroke: string = 'none';
	export let strokeWidth: number = 1;
	export let strokeType: SymbolStrokeType = 'solid';
	export let interactive = true;
	export let highlight = false;

	export let key: string | number = label;
	export let size: number = 50;
	
	/* If map marker */
	export let lat: number = null;
	export let lon: number = null;

	/* else, if image marker */
	export let x: number = null;
	export let y: number = null;

	const ctx = getContext('figure');

	// const index = ctx.getMarkerIndex();
</script>

<div
	{...$$restProps}
>
	<Symbol
		{src}
		{label}
		{color}
		{fill}
		{shape}
		{stroke}
		{strokeWidth}
		{strokeType}
		{interactive}
		{highlight}
	/>
</div>

<style>
	div {
		user-select: none;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-main);
		font-weight: 500;
		padding: 0;
		margin: 0;
	}
</style>

