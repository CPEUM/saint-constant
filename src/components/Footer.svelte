<script>
	import { routes } from '$utils/routes';
	import Link from './primitives/Link.svelte';

	const extLinks = [
		{title: 'Chaire en paysage et environnement de l’Université de Montréal (CPEUM)', href: 'https://paysage.umontreal.ca'},
		{title: 'Chaire UNESCO en paysage urbain (CUPUM)', href: 'https://unesco-paysage.umontreal.ca'},
		{title: 'Ville de Saint-Constant', href: 'https://saint-constant.ca'},
		{title: 'MRC de Roussillon', href: 'https://roussillon.ca'},
		{title: 'Ministère de l’Économie et de l’Innovation du Québec', href: 'https://www.economie.gouv.qc.ca/accueil/'}
	]
</script>


<footer>
	<div>
		<section>
			<ul>
				{#each extLinks as l}
					<li><Link href={l.href}>{l.title}</Link></li>
				{/each}
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
		max-width: var(--width-md);
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