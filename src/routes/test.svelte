<script lang="ts">
	import PieChart from '$components/chart/PieChart.svelte';
	import { getData } from '$utils/getData';

	const data = Promise.all([getData('/data/geo/poles/identified-sectors.geojson'), getData('/data/charts/poles/preferences.json')]);
</script>

<section>
	<h1>Barchart</h1>
</section>
<section>
	<h1>Piechart</h1>
	{#await data then res}
		{#each res[1].charts as chart}
			<PieChart data={chart.data} columns={res[1].groups} key={chart.id} />
		{/each}
	{/await}
</section>

<style lang="postcss">
</style>
