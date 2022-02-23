<script lang="ts">
	import { mapState } from '$stores/map';
	import { currentRoute } from '$stores/route';
	import { mainScroll } from '$stores/scroll';
	import { routes } from '$utils/routes';
	import { draw } from 'svelte/transition';

	const yLimit = 120;

	function generateLines() {
		const n = Math.round(8 + Math.random() * 4);
		const ypad = 10;
		const xpad = 0;
		return [...Array(n)].map(e => (
			{
				x1: xpad + Math.random() * (100 - 2 * xpad) + '%',
				y1: ypad + Math.random() * (100 - 2 * ypad) + '%',
				x2: xpad + Math.random() * (100 - 2 * xpad) + '%',
				y2: ypad + Math.random() * (100 - 2 * ypad) + '%',
				stroke: `hsl(${20 + Math.random() * 180}, 50%, 65%)`,
			}
		));
	}
</script>

<nav class:min={($mainScroll.direction == 'down' && $mainScroll.y > yLimit) || $mapState.isfull}>
	{#each $routes as r, i}
		<a
			href={r.path}
			sveltekit:prefetch
			class:current={r.title == $currentRoute?.title}
			style:background-color={$mainScroll.y > yLimit + 200 ? 'var(--light1)' : ''}
			style:--delay="{i * 60}ms"
		>
			<svg>
				{#if r.title == $currentRoute?.title}
					{#each generateLines() as line, i}
						<line {...line}
							in:draw={{speed: .25, delay: i * 20}}
							out:draw={{speed: .5, delay: i * 20}}
							vector-effect="non-scaling-stroke"
						/>
					{/each}
				{/if}
			</svg>
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
		max-height: 80px;
		margin-bottom: 1em;
		transition-property: max-height, margin-bottom;
		transition-duration: .5s;
		transition-timing-function: cubic-bezier(.4, 0, .2, 1);

		@media (max-width: 800px) {
			flex-direction: column;
		}

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

	a {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		pointer-events: initial;
		padding-block: 0.5em;
		padding-inline: 1em;
		background-color: transparent;
		border-radius: 2em;
		text-decoration: none;
		box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
		color: var(--dark1);
		font-weight: 500;
		letter-spacing: .2px;
		overflow: hidden;
		transition: transform 0.35s var(--delay) cubic-bezier(0.5, 0, 0.4, 1),
			opacity 0.35s var(--delay) cubic-bezier(0.5, 0, 0.4, 1),
			box-shadow 0.3s ease-in-out,
			background-color .5s ease;

		& .text {
			z-index: 1;
			transform: skewY(0deg) translateY(0);
			opacity: 1;
			transition: all .3s cubic-bezier(.5, 0, .3, 1);
		}

		& .hover-text {
			z-index: 1;
			position: absolute;
			transform: skewY(8deg) translateY(2em);
			opacity: 0;
			transition: all .3s cubic-bezier(.5, 0, .3, 1);
		}

		&:hover {
			color: var(--dark3);
			box-shadow: 0 1em 2em -0.4em rgba(0, 0, 0, 0.2);
		}

		&:hover, &.current {
			& .text {
				transform: skewY(8deg) translateY(-2em);
				opacity: 0;
			}

			& .hover-text {
				transform: skewY(0) translateY(0);
				opacity: 1;
			}
		}

		&.current {
			pointer-events: none;
			color: var(--light1);
			/* background-color: var(--dark1); */
			box-shadow: 0 .8em 2em -0.5em rgba(0, 0, 0, 0.25);
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
			stroke-width: 10px;
			stroke-linecap: square;
		}
	}
</style>