<script lang="ts" context="module">
	export type CellType = 'body' | 'heading';
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import { TableContext } from './Table.svelte';
	
	export let type: CellType = 'body';
	export let colspan: number | string = 1;
	export let rowspan: number | string = 1;
	export let align: 'left' | 'center' | 'right' = 'left';
	export let left: number | string = 0;

	const tableCtx = getContext<TableContext>('table');
	const cellIndex = tableCtx.setCellIndex();
</script>

{#if left}
	<div
		style:--span={left}
		class={type}
	/>
{/if}
{#if type === 'heading'}
	<th
		style:--colspan={colspan}
		style:--rowspan={rowspan}
		style:--cellIndex={cellIndex}
		style:text-align={align}
		style:align-items={align}
	>
		<slot />
	</th>
{:else}
	<td
		style:--colspan={colspan}
		style:--rowspan={rowspan}
		style:--cellIndex={cellIndex}
		style:text-align={align}
		style:align-items={align}
	>
		<slot />
	</td>
{/if}

<style lang="postcss">
	div {
		grid-column: span var(--span);
		opacity: 1;
	}

	th,
	td,
	div {
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		grid-column: span var(--colspan);
		grid-row: span var(--rowspan);
		border-radius: .5em;
		padding: 1rem;
		transition: all .2s calc(var(--cellIndex) * 40ms) ease-out;
	}

	:global(table[visible=false]) {
		& td,
		& th {
			opacity: 0;
			transform: translateY(-10px);
		}
	}

	th,
	div.heading {
		color: var(--dark2);
		font-weight: 600;
		font-size: var(--xs);
		text-transform: uppercase;
		background-color: var(--accent2);
		letter-spacing: 1px;
		padding: 1.2rem;
		/* box-shadow: 0 0 2px 0 var(--accent3); */
	}

	td {
		color: var(--dark2);
		font-size: .9rem;
		/* box-shadow: 0 0 2px 0 rgba(0,0,40, .5); */
		background-color: var(--light1);
	}
</style>