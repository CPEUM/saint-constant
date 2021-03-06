<script lang="ts">
	import { mapDisplay } from '$stores/map';
	import { exercice, route } from '$stores/route';
	import { mainScroll } from '$stores/scroll';
	import { routes } from '$utils/routes';
	import { draw } from 'svelte/transition';

	let mouseout;
	const yLimit = 120;

	function checkMouse(e: MouseEvent) {
		if (e.clientY > 120) {
			mouseout = true;
		} else {
			mouseout = false;
		}
	}

	function generateColorString() {
		return `hsl(${20 + Math.random() * 180}, 60%, 70%)`;
	}

	function generateLines() {
		const n = Math.round(8 + Math.random() * 4);
		const ypad = 0;
		const xpad = 0;
		return [...Array(n)].map((e) => {
			return {
				x1: xpad + Math.random() * (100 - 2 * xpad) + '%',
				y1: ypad + Math.random() * (100 - 2 * ypad) + '%',
				x2: xpad + Math.random() * (100 - 2 * xpad) + '%',
				y2: ypad + Math.random() * (100 - 2 * ypad) + '%',
				stroke: generateColorString()
			};
		});
	}
</script>

<svelte:window on:mousemove={checkMouse} />

<nav class:min={($mainScroll.y > yLimit && mouseout) || $mapDisplay.full}>
	{#each routes as r, i}
		<a
			href={r.exercices ? $exercice.path : r.path}
			sveltekit:prefetch
			class:current={r.title == $route?.title}
			style:background-color={$mainScroll.y > yLimit + 200 ? 'var(--light1)' : ''}
			style:--delay="{i * 60}ms"
			style:--activebg={generateColorString()}
		>
			<svg>
				{#if r.title == $route?.title}
					{#each generateLines() as line, i}
						<line {...line} in:draw={{ speed: 0.25, delay: i * 20 }} out:draw={{ speed: 0.5, delay: i * 20 }} vector-effect="non-scaling-stroke" />
					{/each}
				{/if}
			</svg>
			<!-- <div class="grain"></div> -->
			<span class="text">{r.title}</span>
			<span class="hover-text">{r.title}</span>
		</a>
	{/each}
</nav>

<style lang="postcss">
	nav {
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		align-items: center;
		flex-wrap: wrap;
		max-height: 80px;
		margin-bottom: 1em;
		transition-property: max-height, margin-bottom;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		/* @media (max-width: 800px) {
			flex-direction: column;
		} */

		&.min {
			max-height: 0;
			margin-bottom: 0;

			a {
				white-space: nowrap;
				pointer-events: none;
				transform: translateY(-50px);
				opacity: 0;
			}
		}
	}

	.grain {
		opacity: 0.3;
	}

	a {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		pointer-events: initial;
		padding-block: 0.5em;
		white-space: nowrap;
		padding-inline: 1em;
		background-color: transparent;
		border-radius: 2em;
		text-decoration: none;
		box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
		color: var(--dark1);
		font-weight: 500;
		letter-spacing: 0.2px;
		overflow: hidden;
		transition: transform 0.35s var(--delay) cubic-bezier(0.5, 0, 0.4, 1), opacity 0.35s var(--delay) cubic-bezier(0.5, 0, 0.4, 1), box-shadow 0.3s ease-in-out, background-color 0.5s ease;

		& .text {
			position: relative;
			z-index: 1;
			transform: skewY(0deg) translateY(-0.05em);
			opacity: 1;
			transition: all 0.3s cubic-bezier(0.5, 0, 0.3, 1);
		}

		& .hover-text {
			z-index: 1;
			position: absolute;
			transform: skewY(8deg) translateY(2em);
			opacity: 0;
			transition: all 0.3s cubic-bezier(0.5, 0, 0.3, 1);
		}

		&:hover {
			color: var(--dark3);
			box-shadow: 0 1em 2em -0.4em rgba(0, 0, 0, 0.2);
		}

		&:hover,
		&.current {
			& .text {
				transform: skewY(8deg) translateY(-2em);
				opacity: 0;
			}

			& .hover-text {
				transform: skewY(0) translateY(-0.05em);
				opacity: 1;
			}
		}

		&.current {
			pointer-events: none;
			color: var(--dark1);
			background-color: var(--activebg) !important;
			box-shadow: 0 0.8em 2em -0.5em rgba(0, 0, 0, 0.25);
		}

		&.loading {
			box-shadow: 0 0.5em 1em -0.5em rgba(0, 0, 0, 0.2), 0 0 0 1em rgba(255, 255, 255, 0.5);
		}
	}

	svg {
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: visible;

		& line {
			stroke-width: 20px;
			stroke-linecap: round;
		}
	}
</style>
