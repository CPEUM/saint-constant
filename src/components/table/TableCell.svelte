<script lang="ts" context="module">
	export type CellType = 'body' | 'heading' | 'subheading' | 'spacer';
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import { TableContext } from './Table.svelte';
	
	export let type: CellType = 'body';
	export let colspan: number | string = 1;
	export let rowspan: number | string = 1;
	export let align: 'left' | 'center' | 'right' = 'left';
	export let orientation: 'horizontal' | 'vertical' = 'horizontal';

	const tableCtx = getContext<TableContext>('table');
	const cellIndex = tableCtx.setCellIndex();
</script>

{#if type === 'heading' || type === 'subheading'}
	<th
		style:--colspan={colspan}
		style:--rowspan={rowspan}
		style:--cellIndex={cellIndex}
		style:text-align={align}
		style:align-items={align}
		class:sub={type === 'subheading'}
	>
		<div class="inner" class:vertical={orientation === 'vertical'}>
			<slot />
		</div>
	</th>
{:else if type === 'body'}
	<td
		style:--colspan={colspan}
		style:--rowspan={rowspan}
		style:--cellIndex={cellIndex}
		style:text-align={align}
		style:align-items={align}
	>
		<div class="inner" class:vertical={orientation === 'vertical'}>
			<slot />
		</div>
	</td>
{:else if type === 'spacer'}
	<div
		class="spacer"
		style:--colspan={colspan}
		style:--rowspan={rowspan}
	/>
{/if}

<style lang="postcss">
	div.spacer {
		opacity: 0;
	}

	th,
	td,
	.spacer {
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

	.inner {
		display: inline-block;
	}

	.vertical {
		writing-mode: vertical-lr;
		transform: rotate(180deg);
	}

	/* div.heading, */
	th {
		color: var(--dark2);
		font-weight: 600;
		font-size: var(--xs);
		text-transform: uppercase;
		background-color: var(--accent2);
		letter-spacing: 1px;
		padding: 1.2rem;
		/* box-shadow: 0 0 2px 0 var(--accent3); */
	}

	.sub {
		/* color: var(--light1); */
		background-color: var(--accent1);
		/* border: 1px solid var(--accent2); */
		box-shadow: 0 0 3px 0 var(--accent2);
	}

	td {
		color: var(--dark2);
		font-size: .85rem;
		background-color: var(--light1);
		/* z-index: 10; */

		/* &::after,
		&::before {
			user-select: none;
			pointer-events: none;
			content: '';
			position: absolute;
			background-color: transparent;
			box-shadow: 0 0 0px -40px transparent;
			transition: all .3s ease-out;
		}
		&::after {
			height: 100%;
			width: 100vw;
			left: calc(50% - 50vw);
			top: 0;
		}
		&::before {
			width: 100%;
			height: 100vw;
			top: -50vw;
			left: 0;
		}

		&:hover {
			&::after,
			&::before {
				box-shadow: 0 0 70px -40px var(--dark1);
			}
		} */
	}
</style>