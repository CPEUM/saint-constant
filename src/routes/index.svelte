<script lang="ts">
	import Link from '$components/primitives/Link.svelte';
	import Orientations from '$components/index/Orientations.svelte';
	import Splash from '$components/index/Splash.svelte';
	import Logos from '$components/index/Logos.svelte';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
</script>

<Splash />
<div class="text-wrap">
	<h2 use:revealText={revealFlyUp}>Contexte</h2>
	<p class="left">
		Localisée sur la Rive-Sud de Montréal, la <Link rel="external" href="https://saint-constant.ca/">Ville de Saint-Constant</Link>
		est en grande transformation en raison de sa croissance démographique et de la réalisation, au
		cours des prochaines années, de plusieurs projets d’infrastructures et de développement urbain. Afin
		d’alimenter la planification de ces projets, la Ville de Saint-Constant s’interroge sur la portée
		de ses interventions sur ses paysages, autant du point de vue de ses résidents que des visiteurs.
		À cette fin, la ville désire se doter d’outils pour <strong>améliorer sa connaissance des enjeux de paysage et pour assurer la cohérence des interventions sur l’ensemble du territoire municipal</strong>.
	</p>
	<p class="right" style="margin-top: 6rem;">
		Dans le cadre d’un appel à projets en innovation sociale financé par le <Link rel="external" href="https://www.economie.gouv.qc.ca/accueil/">ministère de l’Économie et de l’Innovation du Québec</Link> et en appui avec la <Link rel="external" href="https://saint-constant.ca/">Ville de Saint-Constant</Link> et la <Link rel="external" href="https://roussillon.ca/">MRC de Roussillon</Link>, l’expertise de la <Link rel="external" href="https://paysage.umontreal.ca">Chaire en paysage et environnement de l’Université de Montréal (CPEUM)</Link> et de la <Link rel="external" href="https://unesco-paysage.umontreal.ca">Chaire UNESCO en paysage urbain (CUPUM)</Link> de la même institution a été mise à profit pour développer de <strong>nouveaux outils et de nouvelles approches de planification territoriale plus sensibles aux valorisations sociales et culturelles des paysages</strong>.
	</p>
</div>
<Logos />
<div class="text-wrap">
	<h2 use:revealText={revealFlyUp}>Objectifs du projet</h2>
	<p class="left">Ce projet vise trois principaux objectifs&nbsp;:</p>
	<List class="left">
		<ListItem>
			Co-construire des outils de connaissance, d’intervention et de gestion des paysages et des
			cadres de vie de la Ville de Saint-Constant;
		</ListItem>
		<ListItem>
			Co-réaliser un modèle stratégique innovant de mise en valeur et de développement des paysages
			urbains;
		</ListItem>
		<ListItem>
			Assurer un dialogue inclusif entre les milieux preneurs (Ville de Saint-Constant, MRC de
			Roussillon) et le public interpellé, ainsi que valoriser et diffuser le processus et les
			résultats de la démarche.
		</ListItem>
	</List>
	<p class="right bg" style="padding-bottom: 5rem; padding-top: 20rem; margin-top: -20rem">
		<strong>Le présent site vise à exposer les résultats de ce travail de co-construction. Il&nbsp;présente ainsi les assises de la vision stratégique d’aménagement des paysages de la Ville de Saint-Constant.</strong> Celles-ci se déclinent selon trois grandes orientations qui reposent sur la lecture des attraits du territoire, des préoccupations et des aspirations entretenues envers les paysages qui ont été dégagés dans le cadre de la phase de diagnostic du projet&nbsp;:
	</p>
</div>
<Orientations />
<p class="bg" style="padding-bottom: 12rem; margin-bottom: -12rem">
	Ces orientations découlent des propositions d’aménagement formulées au cours de la phase d’idéation. Les propositions d’aménagement présentées sont assorties d’une <strong>charte de principes directeurs susceptibles d’assurer, à terme, la cohérence des actions en vue de la préservation, de la mise en valeur et du développement des attraits des paysages de la Ville de Saint-Constant</strong>.
</p>

<style lang="postcss">
	
</style>
