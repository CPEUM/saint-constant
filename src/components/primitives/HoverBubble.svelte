<script>
	import { getRandomThemeColor } from '$utils/themeColors';
	import { circIn, circOut, expoIn, expoOut } from 'svelte/easing';
	import { spring } from 'svelte/motion';
	import { scale } from 'svelte/transition';


	export let size = 50;
	export let color = getRandomThemeColor(3);
	export let initX;
	export let initY;

	const springOptions = {
		stiffness: .3,
		damping: .42
	}

	const x = spring(initX, springOptions);
	const y = spring(initY, springOptions);

	function setPosition(e) {
		x.set(e.clientX);
		y.set(e.clientY);
	}
</script>


<svelte:window on:mousemove={setPosition} />


<div
	in:scale={{
		start: .25,
		opacity: 0,
		duration: 250,
		easing: circOut
	}}
	out:scale={{
		start: .5,
		opacity: 0,
		duration: 150,
		easing: circIn
	}}
	style="width: {size}px; height: {size}px; top: {$y}px; left: {$x}px; background-color: {color}"
></div>


<style>
	div {
		pointer-events: none;
		opacity: .75;
		z-index: -1;
		position: fixed;
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}
</style>