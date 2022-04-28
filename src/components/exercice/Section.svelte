<script lang="ts" context="module">
	export const sectionContextKey = 'section-context';
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

	$: transposedHeight = ribbonWidth - containerWidth + ribbonHeight;

	function setScroll(e) {
		// const ribbonScroll = ;
		// console.log(ribbonScroll);
	}

	onMount(() => {
		document.body.addEventListener('scroll', setScroll);
	});

	onDestroy(() => {
		document.body.removeEventListener('scroll', setScroll);
	});

	setContext(sectionContextKey, {
		count: () => ++nslides,
		remove: () => --nslides
	});
</script>

<section
	style:height="{transposedHeight}px"
	bind:this={container}
	bind:offsetWidth={containerWidth}
>
	<div id="log">
		<p>ribbon width: {ribbonWidth}px</p>
		<p>container width: {containerWidth}px</p>
	</div>
	<div
		id="scroller"
		bind:this={ribbon}
		bind:offsetWidth={ribbonWidth}
		bind:offsetHeight={ribbonHeight}
	>
		<slot />
	</div>
</section>

<style>
	section {
		position: relative;
		display: block;
		padding: 0;
		margin: 0;
		width: 50%;
		overflow: visible;
		background-color: lightgoldenrodyellow;
	}

	#scroller {
		/* position: sticky; */
		position: absolute;
		gap: 0;
		top: 0;
		display: flex;
		align-items: flex-start;
		flex-direction: row;
		flex-wrap: nowrap;
		height: auto;
		padding: 0;
		margin: 0;
		box-shadow: inset 0 0 0 6px red;
	}

	#log {
		font-size: 12px;
		position: absolute;
		top: 20px;
		left: 20px;
		color: white;
		background-color: rgb(25, 40, 60);
		padding: 1em;
		border-radius: 0.5em;
		z-index: 1;
	}
</style>
