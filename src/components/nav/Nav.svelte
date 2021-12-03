<script>
	import { currentRoute } from '$stores/currentRoute';
	import { routes } from '$utils/routes';
	import NavExercices from '$components/nav/NavExercices.svelte';

</script>


<nav>
	{#each $routes as r}
		<a
			href={r.path}
			sveltekit:prefetch
			class:current={r == $currentRoute}
		>
			{r.title}
		</a>
	{/each}
	{#if $currentRoute?.exercices}
		<NavExercices></NavExercices>
	{/if}
</nav>


<style>
	nav {
		position: absolute;
		top: 0;
		background-color: red;
	}

	a {
		display: inline-block;
		padding: 2rem;
	}

	.current {
		color: white;
	}
</style>