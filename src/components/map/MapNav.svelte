<script>
	import { onMount } from 'svelte';

	async function getData(filepath) {
		const res = await fetch(filepath);
		const data = await res.json();
		console.log(data);
	}

	onMount(async () => {
		getData('data/test.json');
	});
</script>


<div>
	Map goes here
</div>


<style>
	div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: grey;
	}
</style>