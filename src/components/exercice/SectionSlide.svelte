<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { sectionContextKey } from './Section.svelte';

	const ctx = getContext<any>(sectionContextKey);
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
		flex: none;
		padding: 0;
		margin: 0;
		display: inline-block;
		width: 100%;
		height: 100vh;
		box-shadow: inset 0 0 0 2px blue;
	}
</style>
