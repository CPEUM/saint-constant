<script lang="ts">
	import { revealText } from '$actions/revealText';
	import { text } from '$transitions/text';
	import { onMount } from 'svelte';
	// import Matter from 'matter-js';
	// import MatterAttractors from 'matter-attractors';
	import Matter from '$utils/matter';

	let visible = false;
	let insert = false;
	let container: HTMLElement;
	let canvas: HTMLCanvasElement;
	
	// Matter.use(MatterAttractors);
	
	// create engine
	const engine = Matter.Engine.create();
	
	// create runner
	const runner = Matter.Runner.create();
	Matter.Runner.run(runner, engine);

	onMount(() => {
		// create renderer
		const render = Matter.Render.create({
			canvas,
			engine: engine,
			options: {
				width: canvas.clientWidth,
				height: canvas.clientHeight,
				wireframes: false
			}
		});
		Matter.Render.run(render);

		// create demo scene
		var world = engine.world;
		engine.gravity.scale = 0;

		// create a body with an attractor
		const att = Matter.Bodies.circle(
		render.options.width / 2,
		render.options.height / 2,
		50, 
		{
			isStatic: true,

			// example of an attractor function that 
			// returns a force vector that applies to bodyB
			plugin: {
					attractors: [
					function(bodyA, bodyB) {
						return {
								x: (bodyA.position.x - bodyB.position.x) * 1e-6,
								y: (bodyA.position.y - bodyB.position.y) * 1e-6,
							};
						}
					]
				}
			}
		);

		Matter.Composite.add(world, att);

		// add some bodies that to be attracted
		for (var i = 0; i < 150; i += 1) {
			var body = Matter.Bodies.polygon(
				Matter.Common.random(0, render.options.width), 
				Matter.Common.random(0, render.options.height),
				Matter.Common.random(1, 5),
				Matter.Common.random() > 0.9 ? Matter.Common.random(15, 25) : Matter.Common.random(5, 10)
			);

			Matter.World.add(world, body);
		}

		// add mouse control
		var mouse = Matter.Mouse.create(render.canvas);

		Matter.Events.on(engine, 'afterUpdate', function() {
			if (!mouse.position.x) {
				return;
			}

			// smoothly move the attractor body towards the mouse
			Matter.Body.translate(att, {
				x: (mouse.position.x - att.position.x) * 0.25,
				y: (mouse.position.y - att.position.y) * 0.25
			});
		});
	})
</script>

<section bind:this={container}>
	<canvas bind:this={canvas}></canvas>
</section>
<section>
	<label>
		<span>Visibility var: {visible}</span>
		<input bind:checked={visible} type="checkbox" />
	</label>
	<h1 use:revealText={{visible}}>This is <em>a test</em> title</h1>
</section>
<section>
	<label>
		<span>Insert / remove from dom (transition): {insert}</span>
		<input bind:checked={insert} type="checkbox" />
	</label>
	{#if insert}
		<h1 in:text out:text>This is a test title</h1>
	{/if}
</section>
<section>
	<p>Intersection</p>
	<h1 use:revealText>This is a test title</h1>
</section>

<style>
	section {
		position: relative;
		height: 70vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid black;
		padding: 0;
		margin: 0;
	}

	label, p {
		position: absolute;
		top: 25%;
	}
</style>