<script lang="ts">
	import { routes } from '$utils/routes';
	import { intersection } from '$actions/intersect';
	import Link from './primitives/Link.svelte';
	import logos from '$data/logos.json';

	const extLinks = [
		{title: 'CPEUM', href: 'https://paysage.umontreal.ca'},
		{title: 'CUPUM', href: 'https://unesco-paysage.umontreal.ca'},
		{title: 'Ville de Saint-Constant', href: 'https://saint-constant.ca'},
		{title: 'MRC de Roussillon', href: 'https://roussillon.ca'},
		{title: 'Ministère de l’Économie et de l’Innovation du Québec', href: 'https://www.economie.gouv.qc.ca/accueil/'}
	];

	let expand = false;

	const color = 'rgba(0, 0, 0, 0.4)'
</script>


<footer
	use:intersection={{rootMargin: '0px 0px', threshold: 0.5}}
	on:enter={() => expand = true}
	on:leave={() => expand = false}
>
	<div id="content" class:expand style:color>
		<section id="logos">
			{#each logos as logo}
				<a
					href={logo.href}
					rel="external"
					target="_blank"
					title={logo.alt}
				>
					<img src="/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
				</a>
			{/each}
		</section>
		<section id="links">
			<section>
				<ul>
					{#each extLinks as l}
						<li>
							<Link style={'font-weight: 400'} href={l.href} rel="external" {color}>{l.title}</Link>
						</li>
					{/each}
				</ul>
			</section>
			<section>
				<ul>
					{#each $routes as route}
						<li>
							<Link style={'font-weight: 400'} href={route.path} {color}>{route.title}</Link>
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
	<hr style:top={expand ? '0%' : '100%'} />
</footer>


<style lang="postcss">
	footer {
		position: relative;
		width: 100%;
		/* margin-top: 2rem; */
		padding: 0;
		overflow: hidden;
	}

	hr {
		position: absolute;
		width: 100%;
		height: 1px;
		padding: 0;
		margin: 0;
		background-color: var(--light3);
		transition: all 1s cubic-bezier(.8, 0, .2, 1);
		border: none;
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
		font-weight: 400;
		/* background-color: var(--light2); */
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
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		text-align: center;

		&:first-of-type {
			align-items: right;
			text-align: left;
		}

		&:last-of-type {
			text-align: right;
			justify-content: flex-end;
			opacity: .75;
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
			display: block;
			position: relative;
			margin: 0;
			padding: 0;
			bottom: 0;
		}
	}
</style>