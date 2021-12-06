<script>
	import { isMapnav } from '$stores/map';
	import { draw, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { onMount } from 'svelte';
</script>


<button
	in:fly={{x: -40, easing: expoOut, duration: 500}}
	on:click={isMapnav.toggle}
	class:active={$isMapnav}
>
	<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
			{#if !$isMapnav}
					<path in:draw={{}} d="M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
					c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z" vector-effect="non-scaling-stroke"/>
					<circle in:draw={{delay: 150}} cx="50.5" cy="37.4" r="11.1" vector-effect="non-scaling-stroke"/>
			{:else}
					<line in:draw={{}} x1="30" y1="30" x2="70" y2="70" vector-effect="non-scaling-stroke"/>
					<line in:draw={{delay: 150}} x1="30" y1="70" x2="70" y2="30" vector-effect="non-scaling-stroke"/>
			{/if}
	</svg>
</button>


<style>
	button {
			--size: 55px;
			position: fixed;
			z-index: 10;
			top: var(--gutter-y);
			left: var(--gutter-x);
			display: flex;
			align-content: center;
			justify-content: center;
			width: var(--size);
			height: var(--size);
			min-height: var(--size);
			border-radius: 50%;
			cursor: pointer;
			padding: 12px;
			margin: 0;
			background-color: var(--light1);

			border: none;
			-webkit-appearance: none;
			appearance: none;

			transition: all .25s ease-in-out;
	}

	button:hover {
			background-color: white;
			box-shadow: var(--shadow-m);
			border-radius: 40%;
			transform: scale(1.05);
	}

	.active {
			background-color: var(--light1);
	}

	.active:hover {
			background-color: white;
	}

	svg {
			fill: none;
			stroke: var(--dark3);
			stroke-width: 2px;
			shape-rendering: geometricPrecision;
	}

	.active svg {
			stroke: rgb(223, 84, 66);
	}
</style>