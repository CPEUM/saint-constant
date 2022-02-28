<script lang="ts">
	import { getContext } from 'svelte';

	export let key;
	export let label: string | number;
	export let lat: number = null;
	export let lon: number = null;
	export let x: number = null;
	export let y: number = null;

	const ctx = getContext('figure');

</script>