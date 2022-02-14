<script>
	import NavExercices from '$components/nav/NavExercices.svelte';
	import NavMapToggle from './NavMapToggle.svelte';
	import { currentRoute } from '$stores/route';
	import { routes } from '$utils/routes';
	import { draw, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { mainScroll } from '$stores/scroll';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

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

{#if mounted}
	<header in:fly={{ opacity: 0, y: -20, duration: 800, easing: expoOut, delay: 1000 }}>
		<div>
			<nav class:hidden={$mainScroll.direction == 'down' && $mainScroll.y > yLimit}>
				{#each $routes as r, i}
					<a
						href={r.path}
						sveltekit:prefetch
						class:current={r == $currentRoute}
						style:background-color={$mainScroll.y > yLimit + 200 ? 'var(--light1)' : ''}
						style:--delay="{i * 60}ms"
					>
						<svg>
							{#if r === $currentRoute}
								{#each generateLines() as line, i}
									<line {...line}
										in:draw="{{duration: 200, delay: i * 20}}"
										out:draw="{{duration: 350, delay: i * 20}}"
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
			<NavMapToggle />
		</div>
	</header>
{/if}

<style lang="postcss">
	header {
		position: fixed;
		z-index: 10;
		pointer-events: none;
		user-select: none;
		font-family: var(--font-display);
		font-size: 16px;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 2em;
		top: 0rem;
		margin: 0;
		width: 100%;
		height: auto;
	}

	div {
		width: 100%;
		max-width: var(--width-md);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	nav {
		display: flex;
		flex-direction: row;
		gap: 0.5em;
		align-items: center;
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
			box-shadow: 0 .8em 2em -0.2em rgba(0, 0, 0, 0.3);
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

	.hidden {
		a {
			pointer-events: none;
			transform: translateY(-50px);
			opacity: 0;
		}
	}
</style>
