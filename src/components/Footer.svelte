<script>
	import { routes } from '$utils/routes';
	import Link from './primitives/Link.svelte';

	const extLinks = [
		{title: 'CPEUM', href: 'https://paysage.umontreal.ca'},
		{title: 'CUPUM', href: 'https://unesco-paysage.umontreal.ca'},
		{title: 'Ville de Saint-Constant', href: 'https://saint-constant.ca'},
		{title: 'MRC de Roussillon', href: 'https://roussillon.ca'},
		{title: 'Ministère de l’Économie et de l’Innovation du Québec', href: 'https://www.economie.gouv.qc.ca/accueil/'}
	]
</script>


<footer>
	<div>
		Logos
	</div>
	<div>
		<section>
			<ul>
				{#each extLinks as l}
					<li>
						<Link href={l.href} rel="external">{l.title}</Link>
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<ul>
				{#each $routes as route}
					<li>
						<Link href={route.path}>{route.title}</Link>
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding-inline: 2rem;
		padding-top: 200px;
		padding-bottom: 2rem;
		font-size: var(--sm);
		/* background-color: var(--light2); */
	}

	div {
		display: flex;
		gap: 3rem;
		width: 100%;
		max-width: var(--width-lg);
	}

	section {
		flex: 1;
		text-align: center;
		border-top: 2px solid var(--light3);
		padding-block: 2rem;
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
		padding: 3px 0;
		margin: 0;
		text-decoration: none;
	}
</style>