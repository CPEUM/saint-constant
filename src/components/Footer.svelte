<script lang="ts">
	import { base } from '$app/paths';
	import { routes } from '$utils/routes';
	import { intersection } from '$actions/intersect';
	import Link from './primitives/Link.svelte';
	import logos from '$data/logos';

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
			{#each logos.prime as logo}
				<a
					href={logo.href}
					rel="external"
					target="_blank"
					title={logo.alt}
				>
					<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
				</a>
			{/each}
		<hr>
		</section>
		<section id="links">
			<ul>
				{#each extLinks as l}
					<li>
						<Link style={'font-weight: 400'} href={l.href} rel="external" {color}>{l.title}</Link>
					</li>
				{/each}
			</ul>
			<ul>
				{#each routes as route}
					<li>
						<Link style={'font-weight: 400'} href={route.path} {color}>{route.title}</Link>
					</li>
				{/each}
			</ul>
			<div>
				<p>&copy;</p>
				<p>Chaire en paysage urbain de l'Université de Montréal</p>
				<p>2022</p>
			</div>
		</section>
	</div>
	<!-- <hr style:top={expand ? '0%' : '100%'} /> -->
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
		bottom: 0;
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
		padding-inline: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		font-size: var(--sm);
		font-weight: 400;
		background-color: var(--light2);
		clip-path: inset(100% 0px 0px 0px);
		transition: all 1s cubic-bezier(.8, 0, .2, 1);

		&.expand {
			clip-path: inset(0% 0px 0px 0px);
		}
	}

	#logos {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		align-items: center;
		gap: 2rem;
		justify-content: space-evenly;
		padding-block: 2rem;

		& a {
			flex: 1;
			min-width: 120px;
			max-width: 180px;
			filter: saturate(0);
			opacity: .5;
			transition: all .25s ease-out;

			&:hover {
				opacity: 1;
			}
		}

		&:hover a {
			filter: saturate(1);
		}
	}

	#links {
		display: flex;
		gap: 2rem;
		width: 100%;
		padding-block: 2rem;
		max-width: var(--width-lg);

		& > * {
			flex: 1;
			padding: 0;
			margin: 0;
			text-indent: 0;
			text-align: center;
			list-style-type: none;

			&:first-child {
				text-align: left;
				justify-content: flex-start;
			}

			&:last-child {
				text-align: right;
				align-items: flex-end;
			}
		}

		& li {
			padding: 4px 0;
			margin: 0;
			text-decoration: none;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}

		& p {
			display: block;
			position: relative;
			margin: 0;
			padding: 0;
			bottom: 0;
			max-width: 200px;
		}
	}
</style>