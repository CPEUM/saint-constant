<script lang="ts">
	import type { ExerciceRoute } from '$utils/routes';
	import { getAccentColors } from '$utils/exerciceColors';
	import { fade } from 'svelte/transition';
	
	export let key: ExerciceRoute['key'];
</script>

<div style="{getAccentColors(key)}" transition:fade>
	<!-- Add aside for table of contents -->
	<slot />
</div>

<style>
	div {
		width: 100%;
	}
</style>