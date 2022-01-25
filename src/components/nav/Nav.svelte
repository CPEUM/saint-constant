<script>
	import NavExercices from '$components/nav/NavExercices.svelte';
	import NavMapToggle from './NavMapToggle.svelte';

	import { currentRoute } from '$stores/currentRoute';
	import { routes } from '$utils/routes';
	import { draw, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { isMapFull } from '$stores/map';
	import { mainScroll } from '$stores/scroll';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	})

	const limit = 50;
	let factor;
	$:	factor = Math.max(limit - $mainScroll.y / 4, 0) / limit;

</script>


{#if mounted}
	<header
		in:fly={{ opacity: 0, y: -20, duration: 800, easing: expoOut, delay: 1000 }}
		style="top: {factor * 50}px"
	>
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
		padding: 0 2em;
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
		display: flex;
		flex-direction: column;
		gap: 0px;

		& #main-routes {
			position: relative;
			display: flex;
			flex-direction: row;
			padding: 1em;
			gap: 10px;
			background-color: transparent;
			transition: all .3s;
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
		z-index: 1;
		position: relative;
		pointer-events: auto;
		line-height: 1.2;
		text-decoration: none;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 3em;
		border-radius: 2em;
		padding: 1.5em;
		letter-spacing: .03em;
		color: var(--dark3);
		overflow: hidden;
		/* background-color: var(--light1); */
		transition:
			transform .3s var(--delay) ease-out,
			opacity .3s var(--delay) ease,
			box-shadow .35s ease-in-out,
			border-radius .3s ease-in-out;

		&:hover:not(.current) {
			border-radius: 1.2em;
			background-color: white;
			box-shadow: 0px 0px 0px 4px var(--light1);
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
</style>