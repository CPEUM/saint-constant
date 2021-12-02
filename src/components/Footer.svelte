<script>
	import { routes } from '$utils/routes';

</script>


<footer>
	<div>
		<section>
			<ul>
				<li>CUPUM</li>
				<li>CPEUM</li>
				<li>CUPUM</li>
				<li>CUPUM</li>
			</ul>
		</section>
		<section>
			<ul>
				{#each $routes as route}
					<li>
						<a href={route.path}>{route.title}</a>
					</li>
				{/each}
			</ul>
		</section>
		<section>
			Copyright
		</section>
	</div>
</footer>


<style>
	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 2rem;
	}

	div {
		display: flex;
		width: 100%;
		max-width: var(--content-width);
	}

	section {
		flex: 1;
		text-align: left;
	}

	section:first-of-type {
		text-align: left;
	}

	section:last-of-type {
		text-align: right;
	}
</style>