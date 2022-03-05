<script lang="ts" context="module">
	export interface TableContext {
		setCellIndex: () => number,
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { intersection } from '$actions/intersect';

	export let cols: number | string;
	export let caption: string = null;
	let visible = false;
	let cells = 0;

	setContext<TableContext>('table', {
		setCellIndex: () => cells++
	})

	function show() {
		visible = true;
	}
</script>

<table
	style:--cols={cols}
	use:intersection
	on:enter|once={show}
	{visible}
>
	<slot />
</table>
{#if caption}
	<caption>{caption}</caption>
{/if}

<style lang="postcss">
	table {
		position: relative;
		display: grid;
		column-gap: 1px;
		row-gap: 1px;
		margin: 2rem auto;
		grid-template-columns: repeat(var(--cols), auto);
		grid-auto-rows: auto;
		background-color: var(--accent1);
		width: 100%;
		max-width: var(--width-md);
		border-collapse: collapse;
		text-indent: 0;
		border-spacing: 0;
		border-radius: 1em;
		overflow: hidden;
		box-shadow: 0 .5em 4em -2em rgba(0, 0, 40, .25);
		transition: all .35s ease-out;

		&[visible=false] {
			opacity: 0;
			box-shadow: 0 0 0 0 transparent;
		}

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 900px;
			opacity: .3;
		}
	}

	captions {
		/* position: absolute; */
	}
</style>