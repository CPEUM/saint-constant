<script lang="ts">
	import type { BodiesContext } from './Bodies.svelte';
	import { getContext, onMount } from 'svelte';
	import Matter from '$utils/matter';

	let node: HTMLElement;
	export let size: number = null;
	export let width = size || Math.round(Math.random() * 100 + 250);
	export let height = width;
	export let radius = Math.round(Math.random() * .25 * width + .25 * width);
	// export let radii = Array(4).fill(null).map(_ => radius || Math.random() * Math.max(width, height) / 2)
	// let radiiCSS;
	// $:	radiiCss = radii.map(r => r + 'px').join(' ');
	let angle = (Math.random() - 0.5) / 180;
	let top = 0;
	let left = 0;

	const ctx = getContext<BodiesContext>('bodies');
	const visible = ctx.visible;
	const index = ctx.getIndex();
	const engine = ctx.getEngine();
	let body: Matter.Body;

	onMount(() => {
		body = Matter.Bodies.rectangle(
			Matter.Common.random(0, node.parentElement.clientWidth),
			Matter.Common.random(0, node.parentElement.clientHeight),
			width,
			height,
			{
				angle,
				friction: .1,
				frictionStatic: 8,
				density: .001,
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
	style:top="{top}px"
	style:left="{left}px"
	style:border-radius="{radius}px"
	style:width="{width}px"
	style:height="{height}px"
	style:--delay="{index * ctx.staggerDelay}ms"
	style:--angle="{angle}rad"
>
	<span>
		<slot />
	</span>
</li>

<style lang="postcss">
	li {
		pointer-events: none;
		user-select: none;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2em;
		text-align: center;
		position: absolute;
		color: var(--dark3);
		font-weight: 500;
		background-color: var(--accent3);
		transform: translate(-50%, -50%) rotate(var(--angle));
		overflow: hidden;
		transition: opacity .3s;
		
		&::before {
			content: '';
			position: absolute;
			opacity: .3;
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

	span {
		transform: rotate(calc(-1 * var(--angle)));
	}

	.hidden {
		opacity: 0;
	}
</style>
