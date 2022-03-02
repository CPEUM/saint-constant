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
	export let fill: string = 'var(--accent2)';
	export let stroke: string = null;
	export let arrowEnd: boolean = false;
	export let arrowStart: boolean = false;
	export let strokeWidth: number = 0;
	export let src: string = null;
</script>

<div
	class:interactive
	on:mouseover
	on:mouseleave
	class:highlight
>
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
		--corner: .75rem;
		user-select: none;
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: auto;
		gap: .5em;
		padding: .5em;
		opacity: .9;
		box-shadow: 0 0 1px 0 rgba(0,0,0, 0);
		transition: all .2s ease-out;
		
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
		box-shadow: 0 .5em 1em -.5em rgba(0,0,0, .1);
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