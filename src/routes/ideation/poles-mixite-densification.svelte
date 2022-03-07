<script>
	import Bodies from '$components/bodies/Bodies.svelte';
	import BodiesItem from '$components/bodies/BodiesItem.svelte';
	import Concept from '$components/exercice/Concept.svelte';
	import Exercice from '$components/exercice/Exercice.svelte';
	import Interest from '$components/exercice/Interest.svelte';
	import Preferences from '$components/exercice/Preferences.svelte';
	import Propositions from '$components/exercice/Propositions.svelte';
	import FigureMap from '$components/figure/FigureMap.svelte';
	import Legend from '$components/legend/Legend.svelte';
	import LegendItem from '$components/legend/LegendItem.svelte';
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
</script>

<Exercice key="poles">
	<Concept heading="Le concept de pôles de mixité et de densification">
		<div class="text-wrap">
			<p>Le concept de densité urbaine en aménagement est complexe, il fait généralement référence à des données <strong>quantitatives</strong>&nbsp;:</p>
		</div>
		<List>
			<ListItem><strong>Densité de population</strong> (ex.&nbsp;: nombre de personne au km<sup>2</sup>)</ListItem>
			<ListItem><strong>Densité de construction</strong> (ex.&nbsp;: nombre de logements/hectare).</ListItem>
		</List>
		<div class="text-wrap">
			<p>Il est à noter que lorsqu’on parle de haute densité cela n’est pas synonyme d’immeuble de grande hauteur. Il est possible de construire des quartiers à haute densité, mais de faible hauteur.</p>
			<p>Le concept de densité fait aussi référence à des appréciations <strong>qualitatives</strong>, il est alors nécessaire de se pencher sur&nbsp;:</p>
		</div>
		<List>
			<ListItem>Ses <strong>relations avec les qualités formelles</strong> générées à l’échelle du paysage&nbsp;urbain</ListItem>
			<ListItem>Les <strong>perceptions sociales</strong> qu’elle suscite</ListItem>
		</List>
		<div class="text-wrap">
			<p>Ainsi, plusieurs éléments de composition de l’environnement bâti peuvent faire varier la perception de l’observateur envers la densité urbaine&nbsp;:</p>
		</div>
		<Bodies>
			<BodiesItem>La composition volumétrique des bâtiments</BodiesItem>
			<BodiesItem>L’implantation du bâtiment et son rapport à la rue</BodiesItem>
			<BodiesItem>La mixité des usages avec l’implantations de commerces en rez-de-chaussée</BodiesItem>
			<BodiesItem>La présence d’espaces publics</BodiesItem>
		</Bodies>
	</Concept>
	<Interest heading="L’intérêt de nouveaux pôles de mixité et de densification à Saint-Constant">
		<div class="text-wrap">
			<p>Saint-Constant est une ville au caractère familial, visible, entre autres, par la prédominance des habitations unifamiliales pavillonnaires. Cependant les études préalables révèlent&nbsp;:</p>
		</div>
		<List>
			<ListItem>La présence d’une diversification de la composition démographique qu’il faut prendre en compte dans les aménagements futurs</ListItem>
			<ListItem>Un besoin de développer une diversité fonctionnelle du territoire pour favoriser une plus grande autonomie du milieu</ListItem>
			<ListItem>La présence de trois aires T.O.D. (Transit Oriented Developement) soumises à̀ des paramètres de densification selon la réglementation du Plan métropolitain d’aménagement et de développement</ListItem>
			<ListItem>Une pression à la densification qui s’exerce dans ce contexte autant en milieu construit (ex.&nbsp;: sur la rue Saint-Pierre), que dans les zones de requalification (ex.&nbsp;: la Route 132) ou dans les milieux à bâtir (ex.&nbsp;: La gare Sainte-Catherine)</ListItem>
		</List>
		<div class="text-wrap">
			<p><strong>Dans un tel contexte, il est donc primordial de penser des modèles de densification qui s’insèrent harmonieusement dans le paysage urbain de Saint-Constant.</strong></p>	
		</div>
	</Interest>
	<Preferences>
		<div class="text-wrap">
			<p>Issus de la démarche de caractérisation des paysages, les neuf secteurs de densification identifiés sont&nbsp;:</p>
		</div>
		<FigureMap>
			<!-- <Legend>
				<LegendItem label="1">Smart Centres Saint-Constant</LegendItem>
				<LegendItem label="2">Voie de la Desserte</LegendItem>
				<LegendItem label="3">Rue Saint-Pierre (intersection Route 132)</LegendItem>
				<LegendItem label="4">Gare Saint-Constant</LegendItem>
				<LegendItem label="5">Noyau villageois (chandellerie)</LegendItem>
				<LegendItem label="6">Montée Saint-Régis (1)</LegendItem>
				<LegendItem label="7">Montée Saint-Régis (2)</LegendItem>
				<LegendItem label="8">Gare Sainte-Catherine</LegendItem>
				<LegendItem label="9">Chemin Sainte-Catherine</LegendItem>
			</Legend> -->
		</FigureMap>
		<div class="text-wrap">
			<p>Afin d’identifier les préoccupations et aspirations des participants présent au rendez-vous citoyen envers la densité urbaine, deux types de paramètres ont été ciblés&nbsp;:</p>
		</div>
		<List>
			<ListItem>La composition architecturale et urbaine des bâtiments</ListItem>
			<ListItem>La localisation des projets (selon les neuf secteurs de densification identifiés)</ListItem>
		</List>
		<div class="text-wrap">
			<p>Pour ce faire, six exemples de projets de densification, représentant une variété de typologies de bâtiments, ont été exposés aux participants. Ils se différenciaient par les caractéristiques suivantes&nbsp;:</p>
		</div>
		<List>
			<ListItem>La hauteur du bâtiment en étages</ListItem>
			<ListItem>La composition volumétrique</ListItem>
			<ListItem>La présence de commerces en rez-de-chaussée</ListItem>
			<ListItem>La dimension de la cour avant et le rapport à la rue</ListItem>
			<ListItem>La présence d’arbres en cours avant</ListItem>
		</List>
		<div class="text-wrap">
			<h3>Exemples de projets de densification</h3>
			<h3>Résultats des préférences énoncées par les participants du rendez-vous citoyen</h3>
		</div>
		<Legend>
			<LegendItem>Les immeubles de plus grandes hauteurs (ex.: A et B) présentent un faible intérêt, n’appartenant pas à l’identité de Saint-Constant selon les participants</LegendItem>
			<LegendItem>Les immeubles de moyenne densité  (ex.:  C et D) présentent un certain intérêt. L’exemple C est préféré dans les secteurs en transformation (montée Saint-Régis, rue Bélanger et la rue Marois). L’exemple D est privilégié en bordure de la rue Saint-Régis et à l’intersection du chemin Sainte-Catherine et du boulevard Montchamp</LegendItem>
			<LegendItem>Les immeubles de plus faible densité  (ex.: E et F) sont fortement appréciés. L’exemple E séduit pour son apparence abordable, il est préféré pour les sites de la gare Saint-Constant, la montée Saint-Régis et le site de la Chandellerie. L’exemple F est affectionné pour son caractère moderne, il est proposé pour la montée de Lasaline, la rue Saint-Pierre et le chemin Sainte-Catherine.</LegendItem>
		</Legend>
		<div class="text-wrap">
			<p>La hauteur des bâtiments demeure un élément d’appréciation négatif des projets de densification. Aussi, la présence de la végétation ainsi que de l’activité commerciale contribuent à apaiser la perception négative des projets. Nonobstant ces commentaires généraux, il est à noter que certaines tables de discussion ont été en défaveur de tous les exemples présentés.</p>	
		</div>
	</Preferences>
	<Propositions>
		
	</Propositions>
</Exercice>