<script>
	import { revealFlyUp, revealText } from '$actions/revealText';
	import RouteHeader from '$components/RouteHeader.svelte';
	import Partners from '$components/team/Partners.svelte';
</script>

<RouteHeader>Équipe et partenaires du projet</RouteHeader>
<Partners />
<hr class="separator">
<section class="group">
	<h2 use:revealText={revealFlyUp}>Équipe de recherche</h2>
	<section class="subgroup">
		<h3>Direction scientifique</h3>
		<ul>
			<li>
				<p class="name">Sylvain Paquette</p>
				<p>Professeur titulaire et directeur, CPEUM</p>
				<p class="role">Chercheur principal</p>
			</li>
			<li>
				<p class="name">Philippe Poullaouec-Gonidec</p>
				<p>Professeur émérite et chercheur associé, CUPUM</p>
				<p class="role">Chercheur aviseur</p>
			</li>
		</ul>
	</section>
	<section class="subgroup">
		<h3>Recherche et rédaction</h3>
		<ul>
			<li>
				<p class="name">Patrick Marmen</p>
				<p>Conseiller de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Emmanuel Beaudry Marchand</p>
				<p>Conseiller de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Apolline Sénéchal</p>
				<p>Conseillère de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Estelle Benoit</p>
				<p>Conseillère de recherche, CPEUM</p>
			</li>
		</ul>
	</section>
	<section class="subgroup">
		<h3>Soutien à la recherche</h3>
		<ul>
			<li>
				<p class="name">Michel Dumont</p>
				<p>Auxiliaire de cherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Amélie Fortin</p>
				<p>Auxiliaire de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Caroline Johnson</p>
				<p>Auxiliaire de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Liana Newton</p>
				<p>Auxiliaire de recherche, CPEUM</p>
			</li>
			<li>
				<p class="name">Iona Sobral</p>
				<p>Auxiliaire de recherche, CPEUM</p>
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
				<p>Maire, Ville de Saint-Constant</p>
			</li>
			<li>
				<p class="name">Manon Mainville</p>
				<p>Directrice des communications, relations publiques et services aux citoyens, Ville de Saint-Constant</p>
			</li>
			<li>
				<p class="name">Gilles Marcoux</p>
				<p>Directeur général et secrétaire-trésorier, MRC de Roussillon</p>
			</li>
			<li>
				<p class="name">Philippe Meunier</p>
				<p>Directeur, aménagement du territoire, MRC de Roussillon</p>
			</li>
			<li>
				<p class="name">Hugo Sénéchal</p>
				<p>Directeur de l’urbanisme, Ville de Saint-Constant</p>
			</li>
			<li>
				<p class="name">Nancy Trottier</p>
				<p>Directrice générale, Ville de Saint-Constant</p>
			</li>
		</ul>
	</section>
</section>

<style lang="postcss">
	h2 {
		position: relative;
		z-index: 100;
	}

	#partners {
		margin-top: 25vh;
	}
</style>