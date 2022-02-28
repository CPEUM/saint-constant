<script lang="ts">
	import type { SymbolShape } from '$components/primitives/Symbol.svelte';
	import Symbol from '$components/primitives/Symbol.svelte';

	export let label: string | number = null;
	export let key: string | number = null;
	export let interactive: boolean = key !== null;
	export let highlight: boolean = false;
	/* Symbol options */
	export let shape: SymbolShape = 'circle';
	export let color: string = 'var(--light1)';
	export let fill: string = 'var(--accent1)';
	export let stroke: string = null;
	export let arrowEnd: boolean = false;
    export let arrowStart: boolean = false;
    export let strokeWidth: number = 0;
    export let src: string = null;
</script>

<div class:interactive>
	<dt>
		<Symbol
			{label} {color} {fill} {stroke} {strokeWidth} {src} {shape} {interactive}
		/>
	</dt>
	<dd>
		<slot />
	</dd>
</div>

<style lang="postcss">
	div {
		user-select: none;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: auto;
		gap: 1em;
		padding: .5em;
		opacity: .8;
		transition: all .25s;
	}

	.interactive {
		cursor: pointer;
	}

	div.highlight {
		background-color: white;
		opacity: 1;
	}

	div:not(:first-child)::after {
		content: '';
		position: absolute;
		top: -4px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: rgba(40,40,100,.1);
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