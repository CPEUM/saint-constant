<script lang="ts">
	import { fade } from 'svelte/transition';

	export let size = 40;
	export let color = 'var(--dark1)';
	export let background = 'transparent'
</script>

<div
out:fade={{duration: 250}}
class="loading-wrapper"
style="font-size: {size}px; background-color: {background}"
{...$$restProps}
>
	<svg
		class="loading"
		viewBox="0 0 100 100"
	>
		<circle
			cx="50" cy="50" r="50"
			fill="none"
			stroke={color}
			stroke-width="4"
			stroke-linecap="round"
			vector-effect="non-scaling-stroke"
		>
		</circle>
	</svg>
</div>

<style>
	.loading-wrapper {
		/* --pi: 3.14; */
		top: 0;
		left: 0;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	svg {
		animation: rotate 2s linear infinite;
		overflow: visible;
		margin: 0;
		padding: 0;
		position: relative;
		width: 1em;
		height: 1em;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	circle {
		transform-origin: 50% 50%;
		animation: spin 1.5s cubic-bezier(.3, 0, .8, 1) infinite;
	}

	@keyframes spin {
		/* 0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -125;
		} */
		0% {
			stroke-dasharray: 1 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 99, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 99, 150;
			stroke-dashoffset: -125;
		}
		/* 0% {
			stroke-dasharray: 1, calc(1em * var(--pi));
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: calc(.65em * var(--pi)), calc(1em * var(--pi));
			stroke-dashoffset: calc(-.35em * var(--pi));
		}
		100% {
			stroke-dasharray: calc(.25em * var(--pi)), calc(1em * var(--pi));
			stroke-dashoffset: calc(-.99em * var(--pi));
		} */
	}
</style>