<script>
	import { exerciceRoutes } from '$utils/routes';

</script>


<nav>
	{#each exerciceRoutes as ex, i}
		<a
			href={ex.path}
			sveltekit:prefetch
			style="--rgb-accent1: var(--rgb-{i + 1}accent1); --rgb-accent2: var(--rgb-{i + 1}accent2); --rgb-accent3: var(--rgb-{i + 1}accent3)"
		>
			<span>{ex.title}</span>
		</a>
	{/each}
</nav>


<style lang="postcss">
	nav {
		display: flex;
		flex-direction: row;
		gap: 3px;
	}

	a {
		--accent1: rgb(var(--rgb-accent1));
		--accent2: rgb(var(--rgb-accent2));
		--accent3: rgb(var(--rgb-accent3));
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background-color: var(--accent2);
		pointer-events: initial;
		font-size: 14px;
		font-weight: 550;
		height: 3em;
		padding: 0 1.5em;
		border-radius: 2em;
		text-decoration: none;
		overflow: hidden;

		& span {
			position: relative;
			top: -1px;
		}

		&:hover span {

		}
	}
</style>
