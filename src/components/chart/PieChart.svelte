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
			max = Math.max(...data.columns.map(column => column.rows.reduce((sum, curr) => sum + curr, 0)));
			center = Math.max(...data.columns.map(col => col.rows[0]));
			return data;
		}
		else {
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

<svg>
	<circle />
</svg>

<style>

</style>