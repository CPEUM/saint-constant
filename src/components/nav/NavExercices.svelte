<script>
	import { exerciceRoutes } from '$utils/routes';

</script>


<nav>
	{#each exerciceRoutes as ex}
		<a
			href={ex.path}
			sveltekit:prefetch
		>
			{ex.title}
		</a>
	{/each}
</nav>
