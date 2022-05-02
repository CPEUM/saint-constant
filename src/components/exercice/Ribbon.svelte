<script lang="ts" context="module">
	export const ribbonContextKey = 'ribbon';
</script>

<script lang="ts">
	import { mainScroll } from '$stores/scroll';
	import { onDestroy, onMount, setContext } from 'svelte';

	let container: HTMLElement;
	let containerWidth: number;
	let ribbon: HTMLElement;
	let ribbonWidth: number;
	let ribbonHeight: number;
	let transposedHeight: number;
	let nslides = 0;
	let progress = 0;

	$: transposedHeight = Math.max(0, ribbonWidth - containerWidth) + ribbonHeight;

	function setRibbonScroll(e: Event) {
		progress = Math.min(Math.max(0, (e.target as HTMLBodyElement).scrollTop - container.offsetTop), transposedHeight - ribbonHeight);
	}

	onMount(() => {
		document.body.addEventListener('scroll', setRibbonScroll, { passive: true });
	});

	onDestroy(() => {
		document.body.removeEventListener('scroll', setRibbonScroll);
	});

	setContext(ribbonContextKey, {
		count: () => ++nslides,
		remove: () => --nslides
	});
</script>

<section style:height="{transposedHeight}px" style:--ribbonw="{containerWidth}px" bind:this={container} bind:offsetWidth={containerWidth}>
	<div class="scroller" bind:this={ribbon} bind:offsetWidth={ribbonWidth} bind:offsetHeight={ribbonHeight} style:transform="translateX({-progress}px)">
		<slot />
	</div>
</section>

<style>
	section {
		position: relative;
		display: block;
		padding: 0;
		margin: 0;
		width: 100%;
		overflow: visible;
	}

	.scroller {
		position: sticky;
		gap: 0;
		top: 0;
		display: inline-flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 100vh;
		padding: 0;
		margin: 0;
	}
</style>
