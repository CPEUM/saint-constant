<script lang="ts">
	import type { ExerciceRoute } from '$utils/routes';
	import { getThemeColors } from '$utils/themeColors';
	import { fade } from 'svelte/transition';
	
	export let key: ExerciceRoute['key'];
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