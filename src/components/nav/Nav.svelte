<script>
	import NavExercices from '$components/nav/NavExercices.svelte';
	import { currentRoute } from '$stores/currentRoute';
	import { routes } from '$utils/routes';
	import { draw, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { isMapFull } from '$stores/map';
	import { mainScroll } from '$stores/scroll';
	import { spring } from 'svelte/motion';

	const limit = 50;
	let factor;
	$:	factor = Math.max(limit - $mainScroll.y / 4, 0) / limit;

</script>


<header style="top: {factor * 50}px">
	<div>
		<!-- Top nav -->
		<nav
			class:hidden={$mainScroll.direction == 'down' && !factor}
		>
			<section
				class:pinned={$mainScroll.direction == 'up' && !factor}
				id="main-routes"
			>
				{#each $routes as r, i}
					<a
						href={r.path}
						sveltekit:prefetch
						class:current={r == $currentRoute}
						style="--delay: {i * 60}ms"
					>
						<span>{r.title}</span>
					</a>
				{/each}
			</section>
			{#if $currentRoute?.exercices}
				<!-- Sub nav -->
				<NavExercices />
			{/if}
		</nav>
		<!-- Map toggle -->
		<label
			id="map-toggle"
			for="map-toggle-input"
			class:active={$isMapFull}
		>
			<input
				id="map-toggle-input"
				type="checkbox"
				bind:checked={$isMapFull}
				in:fly={{x: -40, easing: expoOut, duration: 500, delay: 1500}}
			>
			<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
				{#if !$isMapFull}
					<path in:draw={{}} d="M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
					c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z" vector-effect="non-scaling-stroke"/>
					<circle in:draw={{delay: 150}} cx="50.5" cy="37.4" r="11.1" vector-effect="non-scaling-stroke"/>
				{:else}
					<line in:draw={{}} x1="30" y1="30" x2="70" y2="70" vector-effect="non-scaling-stroke"/>
					<line in:draw={{delay: 150}} x1="30" y1="70" x2="70" y2="30" vector-effect="non-scaling-stroke"/>
				{/if}
			</svg>
		</label>
	</div>
</header>


<style lang="postcss">
	header {
		position: fixed;
		z-index: 10;
		pointer-events: none;
		user-select: none;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 1rem 2rem;
		top: 0rem;
		margin: 0;
		width: 100%;

		font-family: var(--font-display);
		font-size: 16px;
	}

	div {
		width: 100%;
		max-width: var(--content-width);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0px;

		& #main-routes {
			display: flex;
			flex-direction: row;
			padding: 3px;
			gap: 10px;
			border-radius: 1em;
			background-color: transparent;
			transition: all .3s;

			&.pinned {
				background-color: var(--light2);
			}
		}

		&.hidden {
			& a {
				pointer-events: none;
				opacity: 0;
				transform: translateY(-10px);
			}
		}
	}

	a {
		position: relative;
		pointer-events: auto;
		line-height: 1.2;
		text-decoration: none;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 3em;
		border-radius: 1em;
		padding: 1.5em;
		letter-spacing: .03em;
		color: var(--dark3);
		overflow: hidden;
		transition: transform .3s var(--delay) ease-out, opacity .3s var(--delay) ease, box-shadow .3s ease-in-out;

		&:hover:not(.current) {
			background-color: var(--light3);
			box-shadow: 0px 20px 20px -10px rgb(var(--rgb-dark3),.5);
		}

		&.current {
			pointer-events: none;
			cursor: default;
			background-color: var(--light1);
			box-shadow: 0px 20px 20px -10px rgb(var(--rgb-dark3),.5);
		}
	}

	@keyframes fly {
		from {left: 0px;}
		to {left: 200px;}
	}

	label {
		pointer-events: initial;
		position: relative;
		display: flex;
		align-content: center;
		justify-content: center;
		width: 3em;
		height: 3em;
		border-radius: 50%;
		cursor: pointer;
		padding: 10px;
		margin: 0;
		background-color: var(--light1);
		border: none;
		appearance: none;
		transition: all .2s ease-in-out;

		&:hover {
			background-color: var(--light3);
			background-color: white;
			border-radius: 40%;
		}

		&.active {
			background-color: var(--light1);

			&:hover {
				background-color: white;
			}

			& svg {
				stroke: rgb(223, 84, 66);
			}
		}

		& svg {
			fill: none;
			stroke: var(--dark3);
			stroke-width: 2px;
			shape-rendering: geometricPrecision;
		}

		& input[type='checkbox'] {
			display: none;
		}
	}
</style>