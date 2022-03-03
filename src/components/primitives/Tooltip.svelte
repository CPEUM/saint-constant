<script lang="ts">
	import { scale } from 'svelte/transition';

	export let text: string;
	export let color = 'var(--dark1)';
	export let backgroundColor = 'white';

	export let follow = false;
	export let position;
	export let x: number;
	export let y: number;

	function setPosition(e: MouseEvent) {
		if (follow) {
			x = e.clientX;
			y = e.clientY;
		}
	}
</script>

<svelte:window on:mousemove={setPosition} />

<div
	class="position"
	style:left="{x}px"
	style:top="{y}px"
	transition:scale={{start: .8, opacity: 0, duration: 225}}
>
	<div
		class="tooltip"
		aria-label="tooltip"
		style:color={color}
		style:background-color={backgroundColor}
		style="{position === 'top' ? 'bottom: 1.5em' : position === 'bottom' ? 'top: 2.5em' : ''}"
	>
		{text}
	</div>
</div>

<style>
	.position {
		position: fixed;
		margin: 0;
		padding: 0;
		pointer-events: none;
		user-select: none;
		z-index: 1000;
		width: 300px;
	}

	.tooltip {
		position: absolute;
		/* white-space: nowrap; */
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 20px;
		font-size: 14px;
		margin: 0;
		padding: .5em 1em;
		text-align: center;
		border-radius: 1em;
		transform: translateX(-50%);
		/* box-shadow: 0 0 1px 0 rgba(0,0,35,.3); */
		box-shadow: 0 1em 2em -1em rgba(0,0,35,.2);
	}
</style>