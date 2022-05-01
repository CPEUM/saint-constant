<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { ribbonContextKey } from './Ribbon.svelte';

	const ctx = getContext<any>(ribbonContextKey);
	let index;

	onMount(() => {
		index = ctx.count() - 1;
	});

	onDestroy(() => {
		ctx?.remove();
	});
</script>

<div id="slide">
	<div id="slide-content" {...$$restProps}>
		<slot />
	</div>
</div>

<style>
	#slide {
		position: relative;
		top: 0;
		flex-shrink: 0;
		margin: 0;
		display: inline-block;
		height: 100%;
		padding: 0;
	}

	#slide-content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 100px;
		width: 100%;
		height: 100%;
	}
</style>
