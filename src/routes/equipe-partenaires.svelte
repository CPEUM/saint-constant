<script>
	import { revealFlyUp, revealText } from '$actions/revealText';
	import Link from '$components/primitives/Link.svelte';
	import RouteHeader from '$components/RouteHeader.svelte';
	import LogoBanner from '$components/team/LogoBanner.svelte';
	import Partners from '$components/team/Partners.svelte';
</script>

<RouteHeader>Équipe et partenaires du projet</RouteHeader>
<p>Ce travail a été réalisé par la <Link href="https://paysage.umontreal.ca">Chaire en paysage et environnement de l’Université de Montréal (CPEUM)</Link> en collaboration avec la <Link href="https://unesco-paysage.umontreal.ca">Chaire UNESCO en paysage urbain de l'Université de Montréal (CUPUM)</Link> ainsi qu’en vertu du soutien financier du <Link rel="external" href="https://www.economie.gouv.qc.ca/accueil/">ministère de l’Économie et de l’Innovation du Québec</Link> et de la <Link href="https://saint-constant.ca/">Ville de Saint-Constant</Link>. Ce projet a été rendu possible également grâce au soutien partenarial de la <Link href="https://roussillon.ca/">MRC de Roussillon</Link>.</p>
<LogoBanner />
<section class="group">
	<h2 use:revealText={revealFlyUp}>Équipe de recherche</h2>
	<section class="subgroup">
		<h3>Direction scientifique</h3>
		<ul>
			<li>
				<p class="name">Sylvain Paquette</p>
				<p class="title">Professeur titulaire et directeur, CPEUM</p>
				<p class="role">Chercheur principal</p>
			</li>
			<li>
				<p class="name">Philippe Poullaouec-Gonidec</p>
				<p class="title">Professeur émérite et chercheur associé, CUPUM</p>
				<p class="role">Chercheur aviseur</p>
			</li>
		</ul>
	</section>
	<section class="subgroup">
		<h3>Recherche et rédaction</h3>
		<ul>
			<li>
				<p class="name">Patrick Marmen</p>
				<p class="title">Conseiller de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Apolline Sénéchal</p>
				<p class="title">Conseillère de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Estelle Benoit</p>
				<p class="title">Conseillère de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Emmanuel Beaudry Marchand</p>
				<p class="title">Conseiller de recherche, CPEUM</p>
			</li>
		</ul>
	</section>
	<section class="subgroup">
		<h3>Soutien à la recherche</h3>
		<ul>
			<li>
				<p class="name">Michel Dumont</p>
				<p class="title">Auxiliaire de cherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Amélie Fortin</p>
				<p class="title">Auxiliaire de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Caroline Johnson</p>
				<p class="title">Auxiliaire de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Liana Newton</p>
				<p class="title">Auxiliaire de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Iona Sobral</p>
				<p class="title">Auxiliaire de recherche, CPEUM</p>
			</li>
		</ul>
	</section>
</section>
<section class="group">
	<h2>Partenaires</h2>
	<section class="subgroup">
		<h3>Comité de suivi</h3>
		<ul>
			<li>
				<p class="name">Jean-Claude Boyer</p>
				<p class="title">Maire, Ville de Saint-Constant</p>
			</li>
			<li>
				<p class="name">Manon Mainville</p>
				<p class="title">Directrice des communications, relations publiques et services aux citoyens, Ville de Saint-Constant</p>
			</li>
			<li>
				<p class="name">Gilles Marcoux</p>
				<p class="title">Directeur général et secrétaire-trésorier, MRC de Roussillon</p>
			</li>
			<li>
				<p class="name">Philippe Meunier</p>
				<p class="title">Directeur, aménagement du territoire, MRC de Roussillon</p>
			</li>
			<li>
				<p class="name">Hugo Sénéchal</p>
				<p class="title">Directeur de l’urbanisme, Ville de Saint-Constant</p>
			</li>
			<li>
				<p class="name">Nancy Trottier</p>
				<p class="title">Directrice générale, Ville de Saint-Constant</p>
			</li>
		</ul>
	</section>
</section>

<style lang="postcss">
	h2 {
		position: relative;
		z-index: 100;
	}

	.group {
		width: 100%;
		max-width: var(--width-md);
	}

	.subgroup {
		width: 100%;
	}

	ul {
		dispaly: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;
		margin: 0;
		list-style-type: none;
		width: 100%;
		gap: 3rem;
	}

	li {
		display: inline-flex;
		flex-direction: column;
		padding: 2rem 0;
		margin: 0;
		flex: 1;
		min-width: 350px;

		& p {
			padding: 0rem 0;
			margin: 0;

			&.name {
				font-size: var(--md);
				font-weight: 500;
			}

			&.title {
				opacity: .7;
				font-weight: 500;
				text-transform: uppercase;
				font-size: var(--sm);
				letter-spacing: 1px;
			}

			&.role {
				opacity: .7;
				font-weight: 400;
				text-transform: uppercase;
				font-size: var(--sm);
				letter-spacing: 2px;
				/* font-style: italic; */
			}
		}
	}
</style>