<script>
	import { mapState } from '$stores/map';
	import { exercice, route } from '$stores/route';
	import { getAccentColors } from '$utils/exerciceColors';
	import { exerciceRoutes } from '$utils/routes';
	import { fly } from 'svelte/transition';
</script>

{#if $route.exercices}
	<nav transition:fly={{y: -25}} class:min={$mapState.isfull}>
		{#each exerciceRoutes as ex, i}
			<a
				href={ex.path}
				sveltekit:prefetch
				style={getAccentColors(ex.key)}
				class:current={$exercice === ex}
			>
				<span class="number">0{i+1}.</span>&nbsp;<span class="title">{ex.title}</span>
			</a>
		{/each}
	</nav>
{/if}


<style lang="postcss">
	nav {
		position: relative;
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		align-self: flex-start;
		gap: .5em;
		transition: all .5s cubic-bezier(.6, 0, .2, 1);

		@media (max-width: 800px) {
			flex-direction: column;
		}
	}

	.min {
		transform: translateY(-40px);
		opacity: 0;
		user-select: none;
		pointer-events: none;
	}

	a {
		text-decoration: none;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background-color: var(--light1);
		pointer-events: initial;
		font-weight: 400;
		padding: .5em 1.5em;
		border-radius: 2em;
		overflow: hidden;
		color: var(--accent2);
		box-shadow: 0 0 2px 0 var(--accent1);
		transition: all .25s ease-in-out;

		& .number {
			position: relative;
			top: -1px;
			font-weight: 400;
			letter-spacing: 1px;
			font-family: var(--font-misc);
		}

		& .title {
			position: relative;
			top: -1px;
		}

		&:hover {
			background-color: var(--accent2);
			color: var(--light2);
		}

		&.current {
			background-color: var(--accent1);
			color: var(--accent3);
			box-shadow: 0 .5em 1em -0.5em rgba(0,0,0, 0.15);
		}
	}
</style>
