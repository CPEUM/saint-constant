<script lang="ts">
	import type { ExerciceRoute } from '$utils/routes'
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
	import Table from '$components/table/Table.svelte';
	import TableCell from '$components/table/TableCell.svelte';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { exerciceRoutes } from '$utils/routes';
	import { text } from '$transitions/text';

	let orientationIndex = 0;
	const descriptions: Record<ExerciceRoute['key'], string> = {
		agroparc: '',
		promenades: '',
		poles: ''
	}
</script>

<header>
	<h2 use:revealText={revealFlyUp}>Chartes des principes directeurs</h2>
</header>
<p>Cette section vise à présenter une synthèse des recommandations qui émanent de la démarche de caractérisation des paysages et de l’exercice d’idéation de Saint-Constant. Elle prend la forme d’une charte des principes directeurs pour l’élaboration d’un projet de paysage. Les valeurs principales qui ont conduit à l’élaboration de cette charte sont&nbsp;:</p>
<List>
	<ListItem>Une ville pour tous;</ListItem>
	<ListItem>Une ville de proximité;</ListItem>
	<ListItem>Une ville de nature;</ListItem>
	<ListItem>Une ville ancrée dans son territoire agricole.</ListItem>
</List>

<p>Ces valeurs ont été mises en action à travers trois orientations d’aménagements&nbsp;:</p>
<List>
	<ListItem>Le développement d’un agroparc visant à créer des interconnexions entre le milieu urbain et agricole, illustré par la revitalisation du noyau villageois;</ListItem>
	<ListItem>L’aménagement de promenades citoyennes visant à créer des parcours de mobilités actives continus, fonctionnels, écologiques et conviviaux à travers le territoire de la municipalité;</ListItem>
	<ListItem>Le développement de pôle de mixité et de densification capables de s’intégrer au contexte urbain actuel.</ListItem>
</List>

<p>Toutes ces propositions visent à révéler et mettre en valeur les principaux éléments identitaires des paysages de Saint-Constant, à savoir&nbsp;:</p>
<List>
	<ListItem>Les abords de la rivière Saint-Pierre et Saint-Régis;</ListItem>
	<ListItem>La connexion diagonale de la ligne de transport électrique;</ListItem>
	<ListItem>La proximité entre le noyau villageois et le milieu agricole;</ListItem>
	<ListItem>Les axes de densification de la route 132, de la rue Saint-Pierre, de la montée Saint-Régis et du chemin Sainte-Catherine.</ListItem>
</List>
<!-- [INSÉRER TABLEAUX: 4.1, 4.2, 4.3, 4.4] -->
<!-- Switch entre les 3 orientations... -->
<section>
	[PREV]
	<div class="text-wrap">
		<h3 use:revealText={revealFlyUp}>Synthèse du projet</h3>
		{#if }
		
		{/if}
		<h4>
			<span>Projet phare&nbsp;:</span>
			{#key orientationIndex}
				<span>
					{exerciceRoutes[orientationIndex].heading}
				</span>
			{/key}
		</h4>
	</div>
	<p></p>
	<Table cols="6">
		<TableCell type="heading" rowspan="2">Orientations</TableCell>
		<TableCell type="heading" rowspan="2">Principes spécifiques d'aménagment</TableCell>
		<TableCell type="heading" colspan="4">Valeurs territoriales en émergence</TableCell>
		<TableCell type="heading">Une ville pour tous</TableCell>
		<TableCell type="heading">Une ville de proximité</TableCell>
		<TableCell type="heading">Une ville de nature</TableCell>
		<TableCell type="heading">Une ville ancrée dans son territoire agricole</TableCell>
		<TableCell type="heading">
			<p><strong>1.</strong> Revitaliser le noyau villageois par le développement d’un pôle d’interconnexion entre le milieu urbain et rural</p>
			<p>Projet phare&nbsp;: <strong>Agroparc de Saint-Constant</strong></p>
		</TableCell>
	</Table>
	[NEXT]
</section>

<h3 use:revealText={revealFlyUp}>Synthèse des principes directeurs</h3>
<Table cols="2">
		<TableCell type="heading">Valeurs territoriales en émergence</TableCell>
		<TableCell type="heading">Principes spécifiques d'aménagment</TableCell>
		<TableCell type="heading">Une ville pour tous</TableCell>
		<TableCell align="left">Promouvoir la diversité des usagers et des usages dans les espaces publics.</TableCell>
		<TableCell type="heading">Une ville de proximité</TableCell>
		<TableCell>
			<ul>
				<li>Développer l’activité commerciale de la portion sud du territoire municipal et tout particulièrement du noyau villageois.</li>
				<li>Relier les attraits de Saint-Constant (parcs, écoles, commerces, etc.) par des corridors de mobilité douce.</li>
			</ul>
		</TableCell>
		<TableCell type="heading">Une ville de nature</TableCell>
		<TableCell>
			<ul>
				<li>Mettre en valeur les attraits naturels de Saint-Constant et favoriser le verdissement du milieu urbain.</li>
				<li>Valoriser la prairie comme figure paysagère identitaire de Saint-Constant</li>
			</ul>
		</TableCell>
		<TableCell type="heading">Une ville ancrée dans son territoire agricole</TableCell>
		<TableCell align="left">Valoriser l’identité agricole du territoire de Saint-Constant.</TableCell>
</Table>

<style>

</style>