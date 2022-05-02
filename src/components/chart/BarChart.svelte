<script context="module" lang="ts">
	export interface BarChartData {
		groups: {
			title: string;
			color: string;
		}[];
		columns: {
			title: string;
			rows: number[];
		}[];
	}
</script>

<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { base } from '$app/paths';
	import Legend from '$components/legend/Legend.svelte';
	import LegendItem from '$components/legend/LegendItem.svelte';
	import Loading from '$components/Loading.svelte';

	export let src: string;
	export let highlightKey = null;
	export let centered: boolean = false;

	let max;
	let center;
	let visible = false;
	function show() {
		visible = true;
	}

	async function fetchData() {
		const r = await fetch(base + src);
		if (r.ok) {
			const data: BarChartData = await r.json();
			max = Math.max(...data.columns.map((column) => column.rows.reduce((sum, curr) => sum + curr, 0)));
			center = Math.max(...data.columns.map((col) => col.rows[0]));
			return data;
		} else {
			throw new Error(`Le chargement du fichier de données ${src} a encontré une erreur`);
		}
	}

	let fetchPromise = fetchData();

	function setKey(e: MouseEvent) {
		highlightKey = (e.target as HTMLElement).getAttribute('key');
	}

	function clearKey() {
		highlightKey = null;
	}
</script>

<figure use:intersection on:enter|once={show} {visible}>
	{#await fetchPromise}
		<Loading />
	{:then json}
		<div class="bars" style:--max={max} style:--center={center}>
			{#each json.columns as column, barIndex}
				<div class="bar-wrapper">
					<div class="col-title" class:centered>{column.title}</div>
					<div class="bar" style="transition-delay: {barIndex * 150}ms">
						{#each column.rows as segment, i}
							{#if segment > 0 || centered}
								<!-- svelte-ignore a11y-mouse-events-have-key-events -->
								<div
									class="segment"
									class:center={centered}
									class:highlight={highlightKey === json.groups[i].title}
									on:mouseover={() => (highlightKey = json.groups[i].title)}
									on:mouseleave={clearKey}
									style:--value={segment}
									style:--color={json.groups[i].color}
								/>
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</div>
		<Legend size="small" style="position:sticky; top: 10rem">
			{#each json.groups as group}
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<LegendItem on:mouseover={() => (highlightKey = group.title)} on:mouseleave={() => (highlightKey = null)} highlight={highlightKey === group.title} fill={group.color}>
					{group.title}
				</LegendItem>
			{/each}
		</Legend>
	{:catch error}
		<p style="color: red; font-style: italic">
			Le chargement du fichier de données {src} a encontré une erreur
		</p>
	{/await}
</figure>

<style lang="postcss">
	figure {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		padding: 2rem 0;
		gap: 2rem;
		margin: 0 auto 2rem auto;
		width: 100%;
		max-width: var(--width-md);
	}

	.bars {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2rem;
	}

	.col-title {
		position: relative;
		font-family: var(--font-main);
		color: var(--dark1);
		opacity: 1;
		font-size: 15px;
		font-weight: 500;
		line-height: 1.5;
		margin: 0.5em 0;

		&.centered {
			text-align: center;
			padding-right: calc(var(--center) / var(--max) / 2 * 100%);
		}
	}

	.bar {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 2px;
		transition: width 0.3s cubic-bezier(0.2, 0, 0.2, 1);
	}

	figure[visible='false'] .bar {
		width: 0%;
	}

	.segment {
		position: relative;
		opacity: 0.9;
		display: inline-block;
		height: 1em;
		width: calc(100% * var(--value) / var(--max));
		border-radius: 2px;
		background-color: var(--color);
		overflow: hidden;
		transition: all 0.2s ease-out;

		&::after {
			opacity: 0.3;
			pointer-events: none;
			user-select: none;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 800px;
		}

		&.center:first-child {
			margin-left: calc(100% * var(--center) / var(--max) - 100% * var(--value) / var(--max));
		}
	}

	.segment.highlight {
		box-shadow: 0 0.5em 1em -0.25em var(--color);
		opacity: 1;
		transform: scaleY(1.25);
	}
</style>
