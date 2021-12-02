<script>
	import { routes } from '$utils/routes';

</script>


<nav>
	{#each $routes as r}
		<a
			href={r.path}
			sveltekit:prefetch
		>
			{r.title}
		</a>
	{/each}
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
</style>