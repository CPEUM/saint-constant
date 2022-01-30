<script>
	import Link from '$components/primitives/Link.svelte';
	import OrientationsBanner from '$components/OrientationsBanner.svelte';
	import H2 from '$components/primitives/H2.svelte';
	import logos from '$data/logos.json';
	import Splash from '$components/Splash.svelte';
</script>

<Splash />
<section>
	<h2>Contexte</h2>
	<p>
		Localisée sur la Rive-Sud de Montréal, la <Link href="https://saint-constant.ca/"
			>Ville de Saint-Constant</Link
		> est en grande transformation en raison de sa croissance démographique et de la réalisation, au
		cours des prochaines années, de plusieurs projets d’infrastructures et de développement urbain. Afin
		d’alimenter la planification de ces projets, la Ville de Saint-Constant s’interroge sur la portée
		de ses interventions sur ses paysages, autant du point de vue de ses résidents que des visiteurs.
		À cette fin, la ville désire se doter d’outils pour
		<strong
			>améliorer sa connaissance des enjeux de paysage et pour assurer la cohérence des
			interventions sur l’ensemble du territoire municipal</strong
		>.
	</p>
	<p>
		Dans le cadre d’un appel à projets en innovation sociale financé par le <Link
			href="https://www.economie.gouv.qc.ca/accueil/"
			>ministère de l’Économie et de l’Innovation du Québec</Link
		> et en appui avec la <Link href="https://saint-constant.ca/">Ville de Saint-Constant</Link> et la
		<Link href="https://roussillon.ca/">MRC de Roussillon</Link>, l’expertise de la <Link
			href="https://paysage.umontreal.ca"
			>Chaire en paysage et environnement de l’Université de Montréal (CPEUM)</Link
		> et de la <Link href="https://unesco-paysage.umontreal.ca"
			>Chaire UNESCO en paysage urbain (CUPUM)</Link
		> de la même institution a été mise à profit pour développer de
		<strong
			>nouveaux outils et de nouvelles approches de planification territoriale plus sensibles aux
			valorisations sociales et culturelles des paysages</strong
		>.
	</p>
</section>
<section>
	{#each logos as logo}
		<a href={logo.href} rel="external" target="_blank">
			<img src="/media/logos/{logo.filename}" alt={logo.alt} />
		</a>
	{/each}
</section>
<section>
	<H2>Objectifs <em>du</em> <i>projet</i></H2>
	<p>Ce projet vise trois principaux objectifs&nbsp;:</p>
	<ul>
		<li>
			Co-construire des outils de connaissance, d’intervention et de gestion des paysages et des
			cadres de vie de la Ville de Saint-Constant;
		</li>
		<li>
			Co-réaliser un modèle stratégique innovant de mise en valeur et de développement des paysages
			urbains;
		</li>
		<li>
			Assurer un dialogue inclusif entre les milieux preneurs (Ville de Saint-Constant, MRC de
			Roussillon) et le public interpellé, ainsi que valoriser et diffuser le processus et les
			résultats de la démarche.
		</li>
	</ul>
	<p>
		<strong
			>Le présent site vise à exposer les résultats de ce travail de co-construction. Il présente
			ainsi les assises de la vision stratégique d’aménagement des paysages de la Ville de
			Saint-Constant.</strong
		> Celles-ci se déclinent selon trois grandes orientations, soit&nbsp;:
	</p>
	<OrientationsBanner />
	<p>
		Ces orientations reposent sur la lecture des attraits du territoire, des préoccupations et des
		aspirations entretenues envers les paysages qui ont été dégagés dans le cadre de la phase de
		diagnostic du projet. De même, elles découlent des propositions d’aménagement formulées au cours
		de la phase d’idéation. Les propositions d’aménagement présentées sont assorties d’une <strong
			>charte de principes directeurs susceptibles d’assurer, à terme, la cohérence des actions en
			vue de la préservation, de la mise en valeur et du développement des attraits des paysages de
			la Ville de Saint-Constant</strong
		>.
	</p>
</section>

<style lang="postcss">

</style>
