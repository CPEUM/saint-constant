<script lang="ts">
	import { getAccentColors } from '$utils/exerciceColors';
	import type { ExerciceRoute } from '$utils/routes';

	export let key: ExerciceRoute['key'];
</script>

<div style="{getAccentColors(key)}">
	<!-- Add aside for table of contents -->
	<slot />
</div>

<style>
	div {
		width: 100%;
	}
</style>