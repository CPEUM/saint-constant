<script>
	import { exerciceRoutes } from '$utils/routes';

</script>


<nav>
	{#each exerciceRoutes as e}
		<a
			href={e.path}
			sveltekit:prefetch
		>
			Test {e.title}
		</a>
	{/each}
</nav>
