<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { BodiesContext } from './Bodies.svelte';
	import Matter from 'matter-js';

	export let size = 280;
	export let radius: Matter.IChamfer['radius'] = size / 4;
	let angle = 0;
	let top = 0;
	let left = 0;

	const ctx = getContext<BodiesContext>('bodies');
	const visible = ctx.visible;
	const index = ctx.index();
	const engine = ctx.getEngine();
	let body: Matter.Body;

	onMount(() => {
		body = Matter.Bodies.rectangle(Math.random() * 500, Math.random() * 150, size, size, {
			angle: (Math.random() - 0.5) / 180,
			friction: 0.7,
			frictionStatic: 10,
			density: .01,
			chamfer: { radius },
		});
		Matter.Composite.add(engine.world, body);
		Matter.Events.on(engine, 'afterUpdate', () => {
			angle = body.angle;
			top = body.position.y;
			left = body.position.x;
		});
	});
</script>

<li
	class:hidden={!$visible}
	style:--delay="{index * ctx.staggerDelay}ms"
	style:--angle="{angle}rad"
	style:--top="{top}px"
	style:--left="{left}px"
	style:--radius="{radius}px"
	style:width="{size}px"
	style:height="{size}px"
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
		color: var(--accent3);
		top: var(--top);
		left: var(--left);
		transform: translate(-50%, -50%);
		transition: opacity .5s var(--delay);

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--accent1);
			border-radius: var(--radius);
			transform: rotate(var(--angle));
		}
	}

	.hidden {
		opacity: 0;
	}
</style>
