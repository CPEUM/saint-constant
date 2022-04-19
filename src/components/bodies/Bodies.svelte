<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';

	export interface BodiesContext {
		getEngine: () => Matter.Engine;
		getIndex: () => number;
		addBodyRef: (body: Matter.Body) => void;
		visible: Writable<boolean>;
		staggerDelay: number;
	}
</script>

<script lang="ts">
	import { onDestroy, onMount, setContext } from 'svelte';
	import { intersection } from '$actions/intersect';
	import { writable } from 'svelte/store';
	import { mainScroll } from '$stores/scroll';
	import { Walls } from './Walls';
	import { Poke } from './Poke';
	import { RenderCanvas } from './RenderCanvas';
	import { MouseAttractor } from './MouseAttractor';
	import Matter from '$utils/matter';

	export let staggerDelay = 120;

	let container: HTMLElement;
	let containerWidth: number;
	let calculatedHeight = 500;
	// let canvas: HTMLCanvasElement;
	const visible = writable(false);
	let length = 0;
	let liBodies: Matter.Body[] = [];

	setContext<BodiesContext>('bodies', {
		getEngine: () => engine,
		getIndex: () => length++,
		addBodyRef: (body) => {
			liBodies.push(body);
		},
		visible,
		staggerDelay
	});

	// Engine
	const engine = Matter.Engine.create();
	engine.gravity.y = 0;
	engine.gravity.scale = 0;
	engine.positionIterations = 5;
	engine.velocityIterations = 3;
	engine.enableSleeping = true;

	// Runner
	const runner = Matter.Runner.create();

	// Render canvas
	// let renderCanvas: RenderCanvas;

	// Walls
	const thickness = 200;
	const initSize = 400; // No setSize available, hence bodies need an initial size for subsequent scaling
	const walls = new Walls(engine, initSize, initSize, thickness);

	// Rescaling walls
	const baseArea = 500;
	const areaRatio = 3; // Surface area multiplier
	$: {
		if (containerWidth) {
			calculatedHeight = Math.max(
				Math.ceil(
					(baseArea +
						areaRatio * liBodies.map((body) => body.area).reduce((a, b) => a + b, 0)) /
						containerWidth
				),
				400
			);
			walls.update(containerWidth, calculatedHeight);
			// renderCanvas?.resize(containerWidth, calculatedHeight);
		}
	}

	// Attractor
	let attractor: MouseAttractor;

	// Start / stop
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

	// Mouse enter / leave
	function mouseEnter() {
		// engine.gravity.scale = 0;
	}
	function mouseLeave() {
		// engine.gravity.scale = 0.001;
		attractor.setAnchor();
	}

	onMount(() => {
		// renderCanvas = new RenderCanvas(canvas, engine);
		// Matter.Render.run(renderCanvas.render);
		attractor = new MouseAttractor(engine, container);
	});

	onDestroy(() => {
		Matter.Runner.stop(runner);
		Matter.World.clear(engine.world, false);
		Matter.Engine.clear(engine);
	});
</script>

<ul
	bind:this={container}
	bind:clientWidth={containerWidth}
	style:height="{calculatedHeight}px"
	style:--delay="{staggerDelay}ms"
	use:intersection={{ rootMargin: '0% 0px -30%' }}
	on:enter={start}
	on:leave={pause}
	on:mouseenter={mouseEnter}
	on:mouseleave={mouseLeave}
>
	<!-- <canvas bind:this={canvas} /> -->
	<slot />
</ul>

<style lang="postcss">
	ul {
		position: relative;
		padding: 0;
		margin: 0 auto;
		text-indent: 0;
		list-style-type: none;
		display: block;
		width: 100%;
		max-width: var(--width-lg);
		overflow: visible;
		/* background-color: var(--light3);
		border-radius: 1rem; */
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>
