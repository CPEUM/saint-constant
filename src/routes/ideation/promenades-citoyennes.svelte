<script>
	import { revealFlyUp, revealText } from '$actions/revealText';
	import Bodies from '$components/bodies/Bodies.svelte';
	import BodiesItem from '$components/bodies/BodiesItem.svelte';
	import BarChart from '$components/chart/BarChart.svelte';
	import Concept from '$components/exercice/Concept.svelte';
	import Exercice from '$components/exercice/Exercice.svelte';
	import Interest from '$components/exercice/Interest.svelte';
	import Preferences from '$components/exercice/Preferences.svelte';
	import Proposition from '$components/exercice/Proposition.svelte';
	import Propositions from '$components/exercice/Propositions.svelte';
	import FigureMap from '$components/figure/FigureMap.svelte';
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
</script>

<Exercice key="promenades">
	<Concept heading="Le concept de promenades citoyennes">
		<p>Les promenades citoyennes consistent en l'aménagement de parcours piétons et cyclables à travers le territoire. Ces parcours ont plusieurs objectifs&nbsp;:</p>
		<Bodies>
			<BodiesItem>Inciter les déplacements de mobilités douces et actives </BodiesItem>
			<BodiesItem>Valoriser les milieux naturels</BodiesItem>
			<BodiesItem>Favoriser la biodiversité</BodiesItem>
			<BodiesItem>Augmenter la qualité de l’expérience de promenade offerte aux citoyens et aux visiteurs</BodiesItem>
			<BodiesItem>Contribuer à l’identité du territoire</BodiesItem>
			<BodiesItem>Assurer la sécurité des utilisateurs</BodiesItem>
		</Bodies>
	</Concept>
	<Interest heading="L’intérêt des promenades citoyennes à Saint-Constant">
		<p>Suite aux études préalables réalisées par les professionnels de l’aménagement et le plan directeur des parcs et espaces verts de la ville (Ville de Saint-Constant, 2016) plusieurs arguments et éléments favoriseraient le développement du concept de promenades citoyennes&nbsp;:</p>
		<List>
			<ListItem>Intérêt de la ville à développer des pistes cyclables</ListItem>
			<ListItem>Présence d’un réseau cyclable et de sentiers multifonctionnels déjà en place qui a besoin d’être valorisé et développé</ListItem>
			<ListItem>Présence de corridors verts (Route verte, rivières)</ListItem>
			<ListItem>Présence de pôles sociaux et communautaires (parcs, écoles, centres communautaires) pouvant être reliés</ListItem>
		</List>
		<!-- Excerpt -->
	</Interest>
	<Preferences>
		<p>Lors du rendez-vous citoyen du 13 février 2020, citoyens, élus et professionnels municipaux se sont réunis pour exprimer leurs volontés envers le développement des promenades citoyennes.</p>
		<p>Les questions posées visaient à déterminer&nbsp;:</p>
		<List>
			<ListItem>Les types de configurations d’aménagement des espaces cyclistes et piétons (voies séparées ou partagées)</ListItem>
			<ListItem>Les types d’infrastructures (plantation d’arbres, de végétaux, gestion des eaux)</ListItem>
			<ListItem>Les parcours significatifs</ListItem>
			<ListItem>Les éléments pour agrémenter la balade (ex.: aires de repos)</ListItem>
		</List>
		<div class="text-wrap">
			<h3 use:revealText={revealFlyUp}>Résultats des préférences d’aménagements des espaces pour cyclistes et piétons</h3>
		</div>
		<BarChart src="/data/charts/promenades/preferences.json" centered="{true}" />
		<List>
			<ListItem>Des voies séparées de la route véhiculaire par un espace tampon (espace planté ou bordure)</ListItem>
			<ListItem>Aménagement d’aires de repos ponctuées de mobiliers urbains</ListItem>
		</List>
		<p>Certaines propositions d'aménagements ont reçu des avis mitigés&nbsp:</p>
		<List>
			<ListItem>Aménagement de noues pour la gestion des eaux de ruissellement</ListItem>
			<ListItem>Insertion de mesures d’apaisement de la circulation</ListItem>
			<ListItem>Saillies de trottoirs</ListItem>
		</List>
		<div class="text-wrap">
			<h3 use:revealText={revealFlyUp}>Résultats des préférences de localisation d’aménagements des parcours</h3>
		</div>
		<h4>Parcours possédant déjà des aménagements de pistes cyclables&nbsp;:</h4>
		<Bodies>
			<BodiesItem>Montée Saint-Régis</BodiesItem>
			<BodiesItem>Chemin Sainte-Catherine</BodiesItem>
			<BodiesItem>Boulevard Monchamp</BodiesItem>
		</Bodies>
		<h4>Parcours fréquemment mentionnés et actuellement non ou partiellement aménagés&nbsp;:</h4>
		<Bodies>
			<BodiesItem>Rue Maçon</BodiesItem>
			<BodiesItem>Rang Petit-Saint-Régis Sud</BodiesItem>
			<BodiesItem>Rue Saint-Pierre et rives de la rivière Saint-Pierre</BodiesItem>
		</Bodies>
		<h4>Parcours hors rue mentionnés visant à lier plus directement certains attraits du territoire de Saint-Constant&nbsp;:</h4>
		<Bodies>
			<BodiesItem>Liens plus directs à la gare Sainte-Catherine à partir des rues Morin et Rouvière</BodiesItem>
			<BodiesItem>Pont piéton enjambant la rivière Saint-Régis (à la hauteur de la petite rue Gaillarde) afin de relier la base de plein air depuis la montée Saint-Régis</BodiesItem>
			<BodiesItem>Corridor piéton et cycliste longeant la voie ferrée entre le Centre municipal et la gare de Saint-Constant</BodiesItem>
		</Bodies>
		<p>De plus, plusieurs rues locales ont été désigné afin d’améliorer la sécurité des déplacements des piétons par l’ajout de trottoirs.</p>
		<p>Finalement, les tracés proposés par les citoyens visaient souvent à&nbsp;:</p>
		<List>
			<ListItem>Améliorer et rendre plus direct l’accès aux pôles de services et de mobilité des deux gares (Sainte-Catherine et Saint-Constant)</ListItem>
			<ListItem>Valoriser la dimension récréative des rivières en favorisant l’aménagement de sentiers multifonctionnels parallèles à celles-ci</ListItem>
		</List>
		<p>À la suite de ces analyses, quatre corridors ont été identifiés comme ayant un potentiel d’aménagement&nbsp;:</p>
		<!-- 3.2.3 -->
		<FigureMap>
			<!-- <Legend style="bottom: unset; top: 1rem;">
				<LegendItem label="1">Corridor nord, longeant les rues du Maçon et de Lausanne</LegendItem>
				<LegendItem label="2">Corridor central le long de la voie ferrée</LegendItem>
				<LegendItem label="3">Corridor sud effectuant une diagonale depuis la gare Sainte-Catherine vers la montée Saint-Régis puis rejoignant le noyau villageois</LegendItem>
				<LegendItem label="4">Corridor est longeant la rue et la rivière Saint-Pierre</LegendItem>
			</Legend> -->
		</FigureMap>
		<p>Par la suite, des analyses complémentaires ont été effectuées pour concevoir des propositions adaptées aux milieux et révéler l’identité de chacun dans les projets d’aménagement.</p>
		<p>Les éléments étudiés sur chaque parcours sont&nbsp;:</p>
		<List>
			<ListItem>Identité végétale</ListItem>
			<ListItem>Aménagements présents</ListItem>
			<ListItem>Typologies urbaines</ListItem>
			<ListItem>Principaux attraits à mettre en valeur</ListItem>
		</List>
	</Preferences>
	<Propositions>
		<p>Le projet proposé, souhaite offrir une expérience de qualité de promenade diversifiée alliant fonctionnalité aux citoyens de Saint-Constant. Chaque corridor possède alors son propre thème d’aménagement.</p>
		<Proposition
			label="Parcours A"
			title="Le corridor des pollinisateurs (est-ouest)"
			key="A"
			src=""
	>
			<p>Ce corridor se situe au nord et longe les rues du Maçon et de Lausanne.</p>
			<h4>Contexte actuel</h4>
			<List>
				<ListItem>Quartier résidentiel pavillonnaire</ListItem>
				<ListItem>Vastes cours avant gazonnées</ListItem>
				<ListItem>Des chaussées larges</ListItem>
				<ListItem>Manque d’espaces piétons</ListItem>
				<ListItem>Présence de fossés destinés à la gestion de l’eau</ListItem>
		</List>
			<h4>Attraits actuels</h4>
			<List>
				<ListItem>Le Pavillon de la biodiversité<span style="opacity: .5">, pôle de rassemblement communautaire composé d’une aire boisée ainsi que d’un jardin horticole</span></ListItem>
				<ListItem>Le parc Levasseur <span style="opacity: .5">principalement composé d’une aire de jeux et d’une esplanade gazonnée</span></ListItem>
				<ListItem>Le parc Lafarge</ListItem>
				<ListItem>La rivière Saint-Régis</ListItem>
			</List>
			<h4>Les principaux éléments reliés</h4>
			<p>Le pavillon de la biodiversité et le parc Lafarge</p>
			<h4>Concept général du projet proposé</h4>
			<p>Étendre le jardin des pollinisateurs présent au pavillon de la biodiversité sous la forme de bordures végétales tout le long d’un parcours (trottoirs et bandes cyclables) sécuritaire, fonctionnel et continu.</p>
			<h4>Les aménagements</h4>
			<p><em>Des bordures végétales</em> accompagneront les promeneurs tout au long du parcours. Deux localisations possibles&nbsp;:</p>
			<List numbered={true}>
				<ListItem><em>Entre le corridor de mobilité active et la chaussée</em> séparant ainsi très distinctement les piétons et les voitures, créant un sentiment de sécurité accru. De plus, les eaux de ruissellement pourraient facilement se rendre vers la bordure, limitant ainsi le besoin en eau. Cependant cette solution demande une gestion et un entretien important et diminue la flexibilité saisonnière de l’espace.</ListItem>
				<ListItem><em>En mitoyen des cours gazonnées</em> pour favoriser une collaboration citoyenne dans la gestion de ces bordures. Des guides seraient distribués par la Ville pour aider les citoyens à composer et entretenir ces bordures végétales.</ListItem>
			</List>
			<p>Un <em>caractère de prairie sauvage</em>, champêtre composé d’espèces indigènes sera favorisé pour la composition des bordures. Ces végétaux permettront d’apporter de la <em>couleur</em>, d’attirer les <em>pollinisateurs</em> tout le long du parcours et de se marier avec les cours avant gazonnées. Ces aménagements, permettront de favoriser le développement d’une biodiversité urbaine.</p>
			<p>Quant à elles, <em>les voies piétonnes et cyclistes</em> s'insèrent dans <em>la voie publique</em> suffisamment large pour accueillir une voie cyclable supplémentaire. Une séparation claire est faite entre piétons, cyclistes et voitures.</p>
		</Proposition>
		<Proposition
			label="Parcours B"
			title="Le corridor nourricier (est-ouest)"
			key="B"
			src=""
	>
			<p>Ce corridor longe la voie ferrée.</p>
			<h4>Contexte actuel</h4>
			<p>Centre du territoire urbanisé qui présente une diversité de milieux et d’identités végétales.</p>
			<h5>Tronçon 1 (ouest)</h5>
			<List>
				<ListItem>Quartier résidentiel d’habitations unifamiliales</ListItem>
				<ListItem>Cours avant gazonnées composées d’arbres et d’arbustes</ListItem>
				<ListItem>Chaussée délimitée par des bordures de béton</ListItem>
			</List>
			<h5>Tronçon 2 (centre)</h5>
			<List>
				<ListItem>Vastes espaces verts institutionnels publics, faible diversité végétale</ListItem>
				<ListItem>Rivière Saint-Régis traversée</ListItem>
			</List>
			<h5>Tronçon 3 (est)</h5>
			<List>
				<ListItem>Friches végétales</ListItem>
				<ListItem>Voies ferrées longées</ListItem>
				<ListItem>Rivière Saint-Pierre traversée</ListItem>
			</List>
			<h4>Attraits actuels</h4>
			<List>
				<ListItem>Vastes aires gazonnées (parc du Petit-Bonheur, corridor de transport d’électricité, école Félix-Leclerc et Centre municipal)</ListItem>
				<ListItem>Rivière Saint-Régis et ses rives boisées</ListItem>
				<ListItem>Potentiel d’aménagement d’un sentier piéton longeant la voie ferrée</ListItem>
			</List>
			<h4>Les éléments reliés</h4>
			<p>La gare Sainte-Catherine, la gare Saint-Constant et l’agroparc (est-ouest).</p>
			<h4>Concept général du projet proposé</h4>
			<p>Relier le corridor à l’agroparc en faisant un <em>jardin linéaire comestible</em> tout le long d’un parcours actif piéton et cycliste continu. Intégrant ainsi la <em>thématique de l’agriculture et de la biodiversité en ville</em>. Cette initiative a pour objectif de stimuler le développement de ces milieux et de favoriser la traverse du corridor ferroviaire.</p>
			<h4>Les aménagements</h4>
			<p>L’objectif des aménagements proposés est de planter, tout au long de ce corridor, des arbres, arbustes et herbacées comestibles qui produisent des fruits et des noix. Par la sélection d’espèces indigènes qui nécessitent relativement peu d’entretien. Ils sensibiliseront les citoyens à la diversité du patrimoine végétal local en faisant découvrir des espèces qui se consomment. Ces interventions permettront une plus grande diversité végétale, favorisant la biodiversité de grands espaces publics.</p>
			<p>Dans les secteurs les plus denses du parcours, à proximités des gares, où les résidents des immeubles d’appartement possèdent peu d’espaces extérieur, l’aménagement de jardins collectifs ou communautaires sont proposés.</p>
		</Proposition>
		<Proposition
			label="Parcours C"
			title="Le corridor riverain (nord-sud)"
			key="C"
			src=""
		>
			<p>Le tracé ici proposé est parallèle à la rivière Saint-Pierre.</p>
			<h4>Contexte actuel</h4>
			<p>Ce corridor est caractérisé par la proximité et l’imbrication entre le milieu urbanisé et le milieu riverain qui sont en contraste.</p>
			<List>
				<ListItem>Rivière Saint-Pierre<span style="opacity: .5"> agissant comme coulée verte à travers le territoire, mais principalement dissimulée par l’arrière-cour des propriétés riveraines, peu accessible</span></ListItem>
				<ListItem>Rue Saint-Pierre de nature commerciale<span style="opacity: .5">, constituée de plusieurs surfaces minérales destinées aux stationnements</span></ListItem>
			</List>
			<h4>Attraits actuels</h4>
			<List>
				<ListItem>Site d’Exporail</ListItem>
				<ListItem>Parc Joseph-Narcisse-Cardinal</ListItem>
				<ListItem>Ensemble du noyau villageois et tout particulièrement le cimetière</ListItem>
			</List>
			<h4>Les éléments reliés</h4>
			<p>Le corridor longe approximativement le tracé de la rivière Saint-Pierre depuis la route 132 au nord jusqu’à la montée Lasaline.</p>
			<h4>Concept général du projet proposé</h4>
			<p>Mettre en valeur la rivière Saint-Pierre en la rendant accessible par un sentier continu et en végétalisant ses abords. Conserver le caractère commercial de la rue Saint-Pierre en améliorant la place du piéton et penser des pistes cyclables dans les axes parallèles.</p>
			<h4>Les aménagements</h4>
			<h5>Un sentier piéton le long de la rivière Saint-Pierre</h5>
			<p>Dans un premier temps, il est proposé de rendre plus accessible la rivière Saint-Pierre par l’aménagement d’un sentier piéton le long de ses berges. La rivière présente une opportunité exceptionnelle d’offrir aux habitants un espace naturel dans ce secteur qui possède moins d’espaces verts. Cela permettrait aussi de valoriser l’image du caractère naturel de Saint-Constant.</p>
			<p>Il est proposé que ce sentier soit continu de la route 132 jusqu’au parc agricole. Plusieurs sections possèdent un potentiel d’aménagement (ex.: secteur de l’Exporail et le cimetière). Sur les autres tronçons, l’insertion de ce sentier demande d’entreprendre des négociations avec les propriétaires pour obtenir des droits de passages.</p>
			<h5>Des pistes cyclables sur des rues parallèles à la rue Saint-Pierre</h5>
			<p>À l’image de la bande cyclable de la rue Lasalle qui offre un tracé dans un axe parallèle à la rue Saint-Pierre, le concept d’aménagement du corridor riverain cherche à̀ identifier d’autres axes parallèles à la rue Saint-Pierre qui pourraient facilement accueillir un aménagement cyclable.</p>
			<h5>Amélioration des infrastructures piétonnes de la rue Saint-Pierre</h5>
			<p>La rue Saint-Pierre est un axe commercial important. Afin de valoriser la circulation piétonne sur celle-ci, l’amélioration de l’infrastructure piétonne est un aspect essentiel de l’aménagement du corridor riverain. Le point principal est l’aménagement d’un trottoir continue du côté est. De plus, l’élargissement des trottoirs ou la présence d’une bande de plantation permettrait de sécuriser le parcours piéton en éloignant les usagers de la circulation automobile.</p>
		</Proposition>
		<Proposition
			label="Parcours D"
			title="Le corridor découverte (est-ouest)"
			key="D"
			src=""
		>
			<p>Ce corridor-ci se situe au sud, traversant une diversité de milieux naturels et agricoles.</p>
			<h4>Contexte actuel</h4>
			<p>Il est caractérisé par sa grande diversité paysagère et ses expériences variées&nbsp;:</p>
			<List>
				<ListItem>Milieux naturels</ListItem>
				<ListItem>Friches végétales</ListItem>
				<ListItem>Bassins de rétention</ListItem>
				<ListItem>Territoire agricole</ListItem>
			</List>
			<h4>Attraits actuels</h4>
			<List>
				<ListItem>Lac des Fées</ListItem>
				<ListItem>Base de plein air</ListItem>
				<ListItem>Rivière Saint-Régis</ListItem>
				<ListItem>Rivière Saint-Pierre</ListItem>
				<ListItem>Bassin de rétention de la rue Chantal</ListItem>
				<ListItem>Parc des Citoyens</ListItem>
			</List>
			<h4>Les éléments reliés</h4>
			<p>Le corridor sud relie le secteur de la gare Saint-Catherine et tout particulièrement le lac des Fées au parc des Citoyens sur la Montée Lasaline.</p>
			<h4>Concept général du projet proposé</h4>
			<p>Il vise à faire découvrir la diversité des paysages de Saint-Constant et démontrer son armature naturelle importante par un parcours cycliste et piéton continu. Il est un lieu fonctionnel permettant de mieux relier la gare Sainte-Catherine à la montée Saint-Régis (ex.: création d’un pont piéton sur la rivière Saint-Régis). De même qu’un lieu de promenade de nature récréative, contribuant à la vitalité du noyau villageois.</p>
			<h4>Les aménagements</h4>
			<p>Les tracés du parcours s’adaptent aux caractéristiques spécifiques des milieux qu’ils traversent. Ils s’insèrent dans les espaces ouverts des milieux soit naturels, semi-naturels ou agricoles. Peu d’aménagements sont nécessaires dans les milieux naturels et semi-naturels (ex.: Base de plein air). Il est recommandé de distinguer la piste cyclable du sentier pédestre afin de minimiser l’empreinte des surfaces imperméables cyclistes.</p>
		</Proposition>
	</Propositions>
</Exercice>