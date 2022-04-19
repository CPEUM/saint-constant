<script lang="ts">
	import type { BodiesContext } from './Bodies.svelte';
	import { getContext, onMount } from 'svelte';
	import Matter from '$utils/matter';

	export let size: number = undefined;
	export let width: number = undefined; // size || Math.round(Math.random() * 100 + 250);
	export let height: number = undefined; // width;
	export let radius: number = undefined;

	let node: HTMLElement;
	const sizeMin = 150;
	const sizeTextFactor = 12;
	let angle = (Math.random() - 0.5) / 180;
	let top = 0;
	let left = 0;

	const ctx = getContext<BodiesContext>('bodies');
	const visible = ctx.visible;
	const index = ctx.getIndex();
	const engine = ctx.getEngine();
	let body: Matter.Body;

	onMount(() => {
		/* Setting sizes */
		if (!size) size = sizeMin + Math.sqrt(node.textContent.length) * sizeTextFactor;
		if (!width) width = size;
		if (!height) height = width;
		if (!radius) radius = Math.round(Math.random() * 0.5 * width);
		/* Init body */
		body = Matter.Bodies.rectangle(
			Matter.Common.random(0, node.parentElement.clientWidth),
			Matter.Common.random(0, node.parentElement.clientHeight),
			width,
			height,
			{
				angle,
				friction: 0.1,
				frictionStatic: 12,
				density: 0.0005,
				chamfer: { radius }
			}
		);
		ctx.addBodyRef(body);
		Matter.Composite.add(engine.world, body);
		Matter.Events.on(engine, 'afterUpdate', () => {
			angle = body.angle;
			top = body.position.y;
			left = body.position.x;
		});
	});
</script>

<li
	bind:this={node}
	class:hidden={!$visible}
	style:border-radius="{radius}px"
	style:width="{width}px"
	style:height="{height}px"
	style:top="-{height * 0.5}px"
	style:left="-{width * 0.5}px"
	style:transform="translate({left}px, {top}px) rotate({angle}rad)"
	style:--delay="{index * ctx.staggerDelay}ms"
>
	<span style:transform="rotate({-1 * angle}rad)">
		<slot />
	</span>
</li>

<style lang="postcss">
	li {
		pointer-events: none;
		user-select: none;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-indent: 0;
		padding: 2em;
		margin: 0;
		text-align: center;
		position: absolute;
		color: var(--dark3);
		font-weight: 500;
		background-color: var(--accent2);
		/* box-shadow: 0 0 0 1px var(--accent2); */
		overflow: hidden;
		transition: opacity 0.3s;

		&::before {
			content: '';
			position: absolute;
			opacity: 0.3;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url(/grain.svg);
			background-repeat: repear;
			background-size: 700px;
		}
	}

	.hidden {
		opacity: 0;
	}
</style>
