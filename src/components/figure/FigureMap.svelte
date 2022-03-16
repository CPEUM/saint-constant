<script context="module" lang="ts">
	export interface MapFigureContext {
	};
</script>

<script>
	import { intersection } from '$actions/intersect';
	import { mapDisplay } from '$stores/map';
	import { onMount } from 'svelte';

	let map;

	function showMap() {
		mapDisplay.setClass('figure');
	}

	function hideMap() {
		mapDisplay.setClass('');
	}
	
	onMount(() => {
	});
</script>

<div
	class="trigger"
	use:intersection={{rootMargin: '-50% 0% -50%'}}
	on:enter={showMap}
	on:leave={hideMap}
	{...$$restProps}
>
	<div
		class="content"
	>
	<!-- style:padding-top={$mainScroll.direction === 'up' ? '6rem' : null} -->
		<slot />
	</div>
</div>

<style>
	.trigger {
		position: relative;
		height: 100%;
		min-height: 150vh;
		width: 100%;
		max-width: var(--width-lg);
		margin: 0 auto;
	}
	
	.content {
		width: 100%;
		position: sticky;
		top: 0;
		padding: 6rem 0;
		transition: all .35s ease-in-out;
	}
</style>