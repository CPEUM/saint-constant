<script lang="ts">
	import type { SymbolShape } from '$components/primitives/Symbol.svelte';
	import Symbol from '$components/primitives/Symbol.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let label: string | number = null;
	export let key: string | number = null;
	export let interactive: boolean = key !== null;
	export let highlight: boolean = false;
	/* Symbol options */
	export let shape: SymbolShape = 'circle';
	export let color: string = 'var(--light1)';
	export let fill: string = 'var(--accent2)';
	export let stroke: string = null;
	export let strokeWidth: number = 0;
	export let colorHighlight: string = undefined;
	export let fillHighlight: string = undefined;
	export let strokeHighlight: string = undefined;
	export let strokeWidthHighlight: number = undefined;
	export let arrowEnd: boolean = false;
	export let arrowStart: boolean = false;
	export let src: string = null;

	const currentKey = getContext('currentKey') as Writable<string | number>;

	function setCurrent() {
		if (currentKey) {
			currentKey.set(key);
		}
	}

	function clearCurrent() {
		if (currentKey) {
			currentKey.set(null);
		}
	}
</script>

<div
	class:interactive
	on:mouseover
	on:mouseleave
	on:mouseover={setCurrent}
	on:mouseleave={clearCurrent}
	on:focus
	class:highlight={highlight || (currentKey && $currentKey === key)}
>
	<dt>
		<Symbol
			{label}
			{color}
			{fill}
			{stroke}
			{strokeWidth}
			{colorHighlight}
			{fillHighlight}
			{strokeHighlight}
			{strokeWidthHighlight}
			{src}
			{shape}
			{interactive}
			{highlight}
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
		padding: 0.5em;
		opacity: 0.9;
		box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0);
		transition: all 0.2s ease-out;

		&:first-child {
			border-top-left-radius: var(--corner);
			border-top-right-radius: var(--corner);
		}

		&:last-child {
			border-bottom-left-radius: var(--corner);
			border-bottom-right-radius: var(--corner);
		}
	}

	.interactive {
		cursor: pointer;
	}

	div.highlight {
		opacity: 1;
		background-color: white;
		box-shadow: 0 0.5em 1em -0.5em rgba(0, 0, 0, 0.1);
	}

	dt {
		position: relative;
		display: inline-block;
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
		width: auto;
		min-width: 50px;
		color: var(--dark3);
	}
</style>
