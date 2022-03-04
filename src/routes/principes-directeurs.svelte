<script>
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
	import Table from '$components/table/Table.svelte';
	import { revealFlyUp, revealText } from '$actions/revealText';

</script>

<header>
	<h2 use:revealText={revealFlyUp}>Chartes des principes directeurs</h2>
</header>
<section>
	<div class="text-wrap">
		<p>Cette section vise à présenter une synthèse des recommandations qui émanent de la démarche de caractérisation des paysages et de l’exercice d’idéation de Saint-Constant. Elle prend la forme d’une charte des principes directeurs pour l’élaboration d’un projet de paysage. Les valeurs principales qui ont conduit à l’élaboration de cette charte sont&nbsp;:</p>
	</div>
	<List>
		<ListItem>Une ville pour tous;</ListItem>
		<ListItem>Une ville de proximité;</ListItem>
		<ListItem>Une ville de nature;</ListItem>
		<ListItem>Une ville ancrée dans son territoire agricole.</ListItem>
	</List>
</section>
<section>
	<div class="text-wrap">
		<p>Ces valeurs ont été mises en action à travers trois orientations d’aménagements&nbsp;:</p>
	</div>
	<List>
		<ListItem>Le développement d’un agroparc visant à créer des interconnexions entre le milieu urbain et agricole, illustré par la revitalisation du noyau villageois;</ListItem>
		<ListItem>L’aménagement de promenades citoyennes visant à créer des parcours de mobilités actives continus, fonctionnels, écologiques et conviviaux à travers le territoire de la municipalité;</ListItem>
		<ListItem>Le développement de pôle de mixité et de densification capables de s’intégrer au contexte urbain actuel.</ListItem>
	</List>
</section>
<section>
	<div class="text-wrap">
		<p>Toutes ces propositions visent à révéler et mettre en valeur les principaux éléments identitaires des paysages de Saint-Constant, à savoir&nbsp;:</p>
	</div>
	<List>
		<ListItem>Les abords de la rivière Saint-Pierre et Saint-Régis;</ListItem>
		<ListItem>La connexion diagonale de la ligne de transport électrique;</ListItem>
		<ListItem>La proximité entre le noyau villageois et le milieu agricole;</ListItem>
		<ListItem>Les axes de densification de la route 132, de la rue Saint-Pierre, de la montée Saint-Régis et du chemin Sainte-Catherine.</ListItem>
	</List>
</section>
<section>
	<!-- [INSÉRER TABLEAUX: 4.1, 4.2, 4.3, 4.4]
	<Table>
		
	</Table> -->
</section>

<style>

</style>