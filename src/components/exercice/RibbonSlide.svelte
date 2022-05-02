<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { ribbonContextKey } from './Ribbon.svelte';

	export let width: string = 'var(--ribbonw)';
	// const ctx = getContext<any>(ribbonContextKey);
	// let index;

	// onMount(() => {
	// 	index = ctx.count() - 1;
	// });

	// onDestroy(() => {
	// 	ctx?.remove();
	// });
</script>

<div id="slide" style:width {...$$restProps}>
	<slot />
</div>

<style>
	#slide {
		position: relative;
		top: 0;
		flex-shrink: 0;
		margin: 0;
		height: 100%;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 100px;
		max-width: var(--ribbonw);
	}
</style>
