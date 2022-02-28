<script context="module" lang="ts">
	export interface BarChartData {
		groups: {
			title: string,
			color: string
		}[];
		columns: {
			title: string,
			rows: number[]
		}[];
	};
</script>

<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { base } from '$app/paths';
	import Legend from '$components/legend/Legend.svelte';
	import LegendItem from '$components/legend/LegendItem.svelte';
	import Loading from '$components/Loading.svelte';
	
	export let caption = '';
	export let src: string;
	export let highlightKey = null;

	let max;
	let visible = false;
	
	async function fetchData() {
		const r = await fetch(base + src);
		if (r.ok) {
			const data: BarChartData = await r.json();
			max = Math.max(...data.columns.map(column => column.rows.reduce((sum, val) => sum + val, 0)));
			return data;
		}
		else {
			throw new Error(`Le chargement du fichier de données ${src} a encontré une erreur`);
		}
	}

	let fetchPromise = fetchData();
</script>

<figure
	{...$$restProps}
	use:intersection
	on:enter|once={() => visible = true}
>
	<div class="chart">
		{#await fetchPromise}
			<Loading />
		{:then json}
		<Legend>
			{#each json.groups as group}
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<LegendItem
					on:mouseover={() => highlightKey = group.title}
					on:mouseleave={() => highlightKey = null}
					highlight={highlightKey === group.title}
					fill={group.color}
				>
					{group.title}
				</LegendItem>
			{/each}
		</Legend>
		<div class="bars">
			{#each json.columns as column, barIndex}
			<div class="bar-wrapper">
				<div class="subtitle">{column.title}</div>
				<div class="bar" class:hidden={!visible} style="transition-delay: .{barIndex * 150}s">
					{#each column.rows as segment, i}
						{#if segment > 0}
							<!-- svelte-ignore a11y-mouse-events-have-key-events -->
							<div
								title="{json.groups[i].title}"
								class="segment"
								class:highlight={highlightKey === json.groups[i].title}
								on:mouseover={() => highlightKey = json.groups[i].title}
								on:mouseleave={() => highlightKey = null}
								style="width: {segment * 100 / max}%; background-color: {json.groups[i].color}"
							>
							</div>
						{/if}
					{/each}
				</div>
			</div>
			{/each}
		</div>
		{:catch error}
			<p style="color: red; font-style: italic">Le chargement du fichier de données {src} a encontré une erreur</p>
		{/await}
	</div>
	{#if $$slots.default}
		<div class="slot">
			<slot />
		</div>
	{/if}
</figure>

<style lang="postcss">
	figure {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		padding: 1rem 0;
		margin: 0 auto;
		width: 100%;
		max-width: var(--width-lg);
	}

	.slot {
		position: sticky;
		top: 8rem;
		flex: 1;
		max-width: var(--width-md);
	}

	.chart {
		position: sticky;
		top: 8rem;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		max-width: var(--width-md);
		flex: 1;
	}

	.bars {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.subtitle {
		font-family: var(--font-main);
		color: var(--dark3);
		opacity: .75;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.5;
		margin: .5em 0;
	}

	.bar {
		margin-bottom: 1.5em;
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 1px;
		transition: width .5s cubic-bezier(.3, 0, 0, .8);
	}

	.hidden {
		width: 0%;
	}

	.segment {
		display: block;
		height: 25px;
		background-color: coral;
		border-radius: 2px;
		transition: all .25s;
	}

	.segment.highlight {
		z-index: 1;
		box-shadow: 0px 0px 0px 2px white, 0px 8px 16px 0px rgba(0,0,60,.2);
		/* height: 30px; */
	}
</style>