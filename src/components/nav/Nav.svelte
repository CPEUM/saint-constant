<script>
	import { currentRoute } from '$stores/currentRoute';
	import { routes } from '$utils/routes';
	import NavExercices from '$components/nav/NavExercices.svelte';

</script>


<div>
	<nav>
		{#each $routes as r}
			<a
				href={r.path}
				sveltekit:prefetch
				class:current={r == $currentRoute}
			>
				<span>{r.title}</span>
			</a>
		{/each}
	</nav>
	<!-- {#if $currentRoute?.exercices}
		<NavExercices></NavExercices>
	{/if} -->
</div>


<style lang="postcss">
	div {
		position: absolute;
		top: 1rem;
		left: 1rem;
		padding: 0;
		margin: 0;
	}

	nav {
		display: flex;
		flex-direction: row;
		gap: 3px;
	}

	a {
		font-family: var(--font-display);
		font-size: 16px;
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

		&:hover:not(.current) {
			background-color: white;
		}

		&.current {
			pointer-events: none;
			cursor: default;
			background-color: red;
		}
	}
</style>