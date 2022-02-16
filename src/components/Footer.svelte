<script lang="ts">
	import { routes } from '$utils/routes';
	import Link from './primitives/Link.svelte';
	import LogoBanner from './LogoBanner.svelte';
	import { intersection } from '$actions/intersect';

	const extLinks = [
		{title: 'CPEUM', href: 'https://paysage.umontreal.ca'},
		{title: 'CUPUM', href: 'https://unesco-paysage.umontreal.ca'},
		{title: 'Ville de Saint-Constant', href: 'https://saint-constant.ca'},
		{title: 'MRC de Roussillon', href: 'https://roussillon.ca'},
		{title: 'Ministère de l’Économie et de l’Innovation du Québec', href: 'https://www.economie.gouv.qc.ca/accueil/'}
	];

	let expand = false;
</script>


<footer
	use:intersection={{rootMargin: '0px 0px', threshold: 0.9}}
	on:enter={() => expand = true}
	on:leave={() => expand = false}
>
	<div id="content" class:expand>
		<LogoBanner dim={true} size="small" />
		<section id="links">
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
				<p>&copy; Chaire en paysage urbain de l'Université de Montréal</p>
				<p>2022</p>
			</section>
		</section>
	</div>
</footer>


<style lang="postcss">
	footer {
		position: relative;
		width: 100%;
		margin-top: 2rem;
		padding: 0;
		overflow: hidden;
	}

	#content {
		bottom: 0;
		width: 100%;
		margin: 0;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		font-size: var(--sm);
		background-color: var(--light2);
		clip-path: inset(100% 0px 0px 0px);
		transition: all 1s cubic-bezier(.8, 0, .2, 1);

		&.expand {
			clip-path: inset(0% 0px 0px 0px);
		}
	}

	#links {
		display: flex;
		gap: 3rem;
		width: 100%;
		max-width: var(--width-lg);
	}

	#links > section {
		flex: 1;
		text-align: center;
		padding-block: 2rem;

		&:first-of-type {
			text-align: left;
		}

		&:last-of-type {
			text-align: right;
		}

		& ul {
			padding: 0;
			margin: 0;
			text-indent: 0;
			list-style-type: none;
		}

		& li {
			padding: 3px 0;
			margin: 0;
			text-decoration: none;
		}

		& p {
			margin: 0;
			padding: 0;
		}
	}
</style>