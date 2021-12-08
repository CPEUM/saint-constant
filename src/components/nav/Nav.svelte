<script>
	import NavExercices from '$components/nav/NavExercices.svelte';
	import { currentRoute } from '$stores/currentRoute';
	import { routes } from '$utils/routes';
	import { draw, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { isMapOverview } from '$stores/map';
	import { mainScroll } from '$stores/scroll';

	const limit = 50;
	let factor;
	$:	factor = Math.max(limit - $mainScroll.y / 2, 0) / limit;
</script>


<header style="top: {factor * 50}px">
	<div>
		<nav class:hidden={$mainScroll.direction == 'down' && !factor}>
			<section>
				{#each $routes as r, i}
					<a
						href={r.path}
						sveltekit:prefetch
						class:current={r == $currentRoute}
						style="transition-delay: {60 * i}ms"
					>
						<span>{r.title}</span>
					</a>
				{/each}
			</section>
			{#if $currentRoute?.exercices}
			<section>
				<NavExercices />
			</section>
			{/if}
		</nav>
		<label
			id="map-toggle"
			for="map-toggle-input"
			class:active={$isMapOverview}
		>
			<input
				id="map-toggle-input"
				type="checkbox"
				bind:checked={$isMapOverview}
				in:fly={{x: -40, easing: expoOut, duration: 500, delay: 1500}}
			>
			<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
				{#if !$isMapOverview}
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
		pointer-events: none;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 1rem 2rem;
		top: 0rem;
		margin: 0;
		width: 100%;
	}

	div {
		width: 100%;
		max-width: var(--content-width);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	nav {
		pointer-events: initial;
		user-select: none;
		display: flex;
		flex-direction: column;
		gap: 3px;

		& a {
			font-family: var(--font-display);
			font-size: 15px;
			line-height: 1.2;
			text-decoration: none;
			font-weight: 600;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			height: 3.5em;
			border-radius: 2px;
			padding: 1.5em;
			letter-spacing: .03em;
			color: var(--dark3);
			transition: all .3s cubic-bezier(.7, 0, .2, 1);

			&:hover:not(.current) {
				background-color: white;
			}

			&.current {
				pointer-events: none;
				cursor: default;
				background-color: red;
			}
		}

		&.hidden {
			opacity: 0;
			transform: translateY(-100%);

			& a {
				opacity: 0;
				transform: translateY(-15px);
			}
		}
	}

	label {
		--size: 54px;
		pointer-events: initial;
		position: relative;
		display: flex;
		align-content: center;
		justify-content: center;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		cursor: pointer;
		padding: 12px;
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