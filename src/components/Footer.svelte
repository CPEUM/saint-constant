<script>
	import { routes } from '$utils/routes';
	import Link from './primitives/Link.svelte';

</script>


<footer>
	<div>
		<section>
			<ul>
				<li><Link href="https://paysage.umontreal.ca">Chaire en paysage et environnement de l’Université de Montréal (CPEUM)</Link></li>
				<li><Link href="https://unesco-paysage.umontreal.ca">Chaire UNESCO en paysage urbain (CUPUM)</Link></li>
				<li><Link href="https://saint-constant.ca/">Ville de Saint-Constant</Link></li>
				<li><Link href="https://roussillon.ca/">MRC de Roussillon</Link></li>
				<li><Link href="https://www.economie.gouv.qc.ca/accueil/">Ministère de l’Économie et de l’Innovation du Québec</Link></li>
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
		font-size: var(--sm);
	}

	div {
		display: flex;
		gap: 2rem;
		width: 100%;
		max-width: var(--content-width);
	}

	section {
		flex: 1;
		text-align: center;
	}

	section:first-of-type {
		text-align: left;
	}

	section:last-of-type {
		text-align: right;
	}

	ul {
		padding: 0;
		margin: 0;
		text-indent: 0;
		list-style-type: none;
	}

	li {
		padding: 0;
		margin: 0;
		text-decoration: none;
	}
</style>