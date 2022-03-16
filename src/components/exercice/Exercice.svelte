<script lang="ts">
	import type { ExerciceRoute } from '$utils/routes';
	import { getThemeColors } from '$utils/themeColors';
	import { onDestroy, onMount, setContext } from 'svelte';
	import { fade } from 'svelte/transition';
	
	export let key: ExerciceRoute['key'];

	setContext('exercice', key);

	onMount(() => {
		
	});

	onDestroy(() => {

	});
</script>

<div style="{getThemeColors(key)}" transition:fade>
	<!-- Add aside for table of contents -->
	<slot />
</div>

<style>
	div {
		width: 100%;
	}
</style>