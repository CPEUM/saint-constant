<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';

	export interface BodiesContext {
		getEngine: () => Matter.Engine;
		index: () => number;
		visible: Writable<boolean>;
		staggerDelay: number;
	}

	export class Wall {
		private width: number;
		private height: number;
		public body: Matter.Body;

		constructor(engine: Matter.Engine, x: number, y: number, width: number, height: number) {
			this.body = Matter.Bodies.rectangle(x, y, width, height, { isStatic: true });
			Matter.Composite.add(engine.world, this.body);
			this.width = width;
			this.height = height;
		}

		update({
			x,
			y,
			w = this.width,
			h = this.height
		}: {
			x: number;
			y: number;
			w?: number;
			h?: number;
		}) {
			Matter.Body.setPosition(this.body, { x, y });
			Matter.Body.scale(this.body, w / this.width, h / this.height);
			this.width = w;
			this.height = h;
		}
	}

	export class Poke {
		private r = 10;
		public body: Matter.Body;

		constructor(engine: Matter.Engine) {
			this.body = Matter.Bodies.circle(0, 0, this.r);
			Matter.Composite.add(engine.world, this.body);
		}

		move(e: MouseEvent) {
			console.log(this.body);
			// if (this.body) {
			// 	Matter.Body.set(this.body, 'position', {
			// 		x: e.clientX - (e.target as HTMLElement).clientLeft,
			// 		y: e.clientY - (e.target as HTMLElement).clientTop,
			// 	})
			// }
		}
	}
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { intersection } from '$actions/intersect';
	import { writable } from 'svelte/store';
	import Matter from 'matter-js';
	import MatterAttractors from 'matter-attractors';

	export let staggerDelay = 250;

	// Matter.use(MatterAttractors);
	let container: HTMLElement;
	let containerWidth: number;
	let calculatedHeight = 500;
	let canvas: HTMLCanvasElement;
	const visible = writable(false);
	let length = 0;
	// To do: add randomShapes...

	setContext<BodiesContext>('bodies', {
		getEngine: () => engine,
		visible,
		index: () => length++,
		staggerDelay
	});

	// Engine
	const engine = Matter.Engine.create();
	// engine.positionIterations = 4;
	// engine.velocityIterations = 4;
	// engine.gravity.y = 1;
	// engine.gravity.x = 0;

	// Walls
	const thickness = 100;
	const initSize = 200; // No setSize available, hence bodies need an initial size for subsequent scaling
	const wallTop = new Wall(engine, initSize / 2, -thickness / 2, initSize, thickness);
	const wallBottom = new Wall(
		engine,
		initSize / 2,
		initSize + thickness / 2,
		initSize,
		thickness
	);
	const wallLeft = new Wall(engine, -thickness / 2, initSize / 2, thickness, initSize);
	const wallRight = new Wall(engine, initSize + thickness / 2, initSize / 2, thickness, initSize);

	// Rescaling walls
	const areaRatio = 1.5; // Surface area multiplier
	$: {
		if (containerWidth) {
			calculatedHeight = Math.ceil(
				(areaRatio *
					engine.world.bodies.map((body) => body.area).reduce((a, b) => a + b, 0)) /
					containerWidth
			);
			wallTop.update({ x: containerWidth / 2, y: -thickness / 2, w: containerWidth });
			wallBottom.update({
				x: containerWidth / 2,
				y: calculatedHeight + thickness / 2,
				w: containerWidth
			});
			wallLeft.update({ x: -thickness / 2, y: calculatedHeight / 2, h: calculatedHeight });
			wallRight.update({
				x: containerWidth + thickness / 2,
				y: calculatedHeight / 2,
				h: calculatedHeight
			});
		}
	}

	// Runner
	const runner = Matter.Runner.create();

	function start() {
		if (!$visible) {
			visible.set(true);
			Matter.Runner.run(runner, engine);
		} else {
			engine.enabled = true;
		}
	}
	function pause() {
		engine.enabled = false;
	}

	// Poke!
	const poke = new Poke(engine);

	// $scroll.direction === 'up' gravity = 0;... :D

	onMount(() => {
		console.log(engine.world.bodies);
		// render = Matter.Render.create({ canvas, engine, options: {
		// 	width: containerWidth,
		// 	height: calculatedHeight,
		// 	showAxes: true
		// } });
		// Matter.Render.lookAt(render, {
		// 	min: { x: 0, y: 0 },
		// 	max: { x: containerWidth, y: calculatedHeight }
		// })
		// Matter.Render.run(render);
		// Mouse handling (buggy)
		// const mouse = Matter.Mouse.create(container);
		// const mouseConstraint = Matter.MouseConstraint.create(engine, {
		// 	mouse
		// });
		// Matter.Events.on(mouse.element, 'mousedown', () => {
		// 	console.log('dragging!');
		// });
		// mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
		// mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
	});
</script>

<ul
	bind:this={container}
	on:mousemove={poke.move}
	bind:clientWidth={containerWidth}
	style:height="{calculatedHeight}px"
	style:--delay="{staggerDelay}ms"
	use:intersection={{ rootMargin: '0% 0px -30%' }}
	on:enter={start}
	on:leave={pause}
>
	<!-- <canvas bind:this={canvas} /> -->
	<slot />
</ul>

<style lang="postcss">
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		text-indent: 0;
		display: block;
		width: 100%;
		max-width: var(--width-lg);
		overflow: visible;
		background-color: wheat;
	}

	canvas {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>
