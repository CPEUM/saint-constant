<script>
	import Concept from '$components/exercice/Concept.svelte';
	import Proposition from '$components/exercice/Proposition.svelte';
	import ExcerptToggle from '$components/excerpt/ExcerptToggle.svelte';
	import Interest from '$components/exercice/Interest.svelte';
	import FigureMap from '$components/figure/FigureMap.svelte';
	import FigureMarker from '$components/figure/FigureMarker.svelte';
	import FigureLegendItem from '$components/figure/FigureLegendItem.svelte';
import BarChart from '$components/chart/BarChart.svelte';
</script>


<h2>Le concept</h2>
<p>Le concept d'agroparc est né dans une perspective de reconnaissance des valeurs environnementales et récréatives du territoire agricole de Saint-Constant.</p>
<p>L’agroparc vise à&nbsp;:</p>
<ul>
	<li>Allier agriculture et environnement</li>
	<li>Améliorer les interrelations ville/campagne</li>
	<li>Promouvoir la relève agricole et les nouvelles pratiques</li>
	<li>Assurer un équilibre économique, social et environnemental dans le développement du territoire</li>
</ul>
<ExcerptToggle key="agroparc1">Quelques références supplémentaires d'agroparcs</ExcerptToggle>
<p>Les exemples d’agroparc en Europe montrent que les parcs agricoles peuvent être initiés à partir&nbsp;:</p>
<ul>
	<li>De la délimitation d’un espace agricole à titre de parc, sans intervention d’aménagement supplémentaire</li>
	<li>Du réaménagement d’un espace agricole afin d’en faire un parc</li>
	<li>De l’aménagement d’un parc public dans lequel certaines aires ont une vocation agricole</li>
	<li>De l’aménagement d’un parc public géré à partir de techniques tirées de l’agriculture</li>
</ul>
<p>Sur le plan programmatique, les exemples initiés en Europe montrent que les parcs agricoles se regroupent en cinq principales catégories&nbsp;:</p>
<ul>
	<li><strong>Activités de production agricole</strong> (cultures maraîchères, productions animales, vergers, potagers collectifs, etc.)</li>
	<li><strong>Activités de conservation</strong> (préservation des zones boisées, des milieux humides et de la biodiversité, etc.)</li>
	<li><strong>Activités récréatives</strong> (sentiers, aires de détentes, terrains sportifs, aires de rassemblements, etc.)</li>
	<li><strong>Activités commerciales</strong> (autocueillette, vente de produits agricoles locaux, restauration ou transformation alimentaire, marché public, etc.)</li>
	<li><strong>Activités éducatives</strong> (accueil de groupes scolaires, sentiers d’interprétation, etc.)</li>
</ul>

<h2>L’intérêt d’un agroparc à Saint-Constant</h2>
<p>Le Plan de développement de la zone agricole (PDZA) de la MRC de Roussillon (2019) mentionne que le développement du territoire agricole de Saint-Constant présente certains défis dont&nbsp;:</p>
<ul>
	<li>La présence de terres en friche à proximité de l’autoroute 30 ou du milieu urbanisé</li>
	<li>Une offre de produits locaux à renforcer</li>
</ul>
<p>De plus, il soulève certaines préoccupations environnementales en regard des pratiques agricoles actuelles liées notamment à&nbsp;:</p>
<ul>
	<li>La faible présence de superficies boisées</li>
	<li>L’érosion des rives et la mauvaise qualité de l’eau</li>
</ul>
<p>Les objectifs d’un agroparc à Saint-Constant&nbsp:</p>
<ul>
	<li>Développements multifonctionnels des terres agricoles</li>
	<li>Valorisation de la production locale</li>
	<li>Améliorer les liens entre le milieu urbain et le milieu agricole</li>
</ul>
<p><strong>Le projet de l’agroparc voit alors les friches agricoles à proximité du noyau villageois comme lieux d’opportunités de création d’un pôle d’interaction multifonctionnel entre producteurs et citoyens.</strong></p>

<h2>Préférences</h2>
<p>Le secteur du noyau villageois a été identifié comme territoire potentiel de développement de l’agroparc pour une première phase. Il présente plusieurs potentiels stratégiques comme&nbsp;:</p>
<ul>
	<li>La présence de terrains publics en zone agricole</li>
	<li>Le développement de projets municipaux capables de s’intégrer aux principes d’aménagement de l’agroparc (pôle récréotouristique du château d’eau)</li>
</ul>
<p>Dans ce secteur, six sous-secteurs d’intervention ont été identifiés par les participants présents au rendez-vous citoyens du 13 février 2020.</p>
<FigureMap>
	<FigureMarker lat={45.36999} lon={-73.57000} label="1" />
	<FigureMarker lat={45.36949} lon={-73.57010} label="2" />
	<FigureMarker lat={45.36939} lon={-73.57005} label="3" />
	<FigureMarker lat={45.36991} lon={-73.57001} label="4" />
	<FigureMarker lat={45.36929} lon={-73.57000} label="5" />
	<FigureMarker lat={45.36979} lon={-73.57003} label="6" />
	<FigureLegendItem label="1">Parc Leblanc</FigureLegendItem>
	<FigureLegendItem label="2">Site de l’église de Saint-Constant</FigureLegendItem>
	<FigureLegendItem label="3">Chandellerie</FigureLegendItem>
	<FigureLegendItem label="4">Site des travaux publics</FigureLegendItem>
	<FigureLegendItem label="5">Bassin de rétention de la rue Chantale</FigureLegendItem>
	<FigureLegendItem label="6">Parc des Citoyens</FigureLegendItem>
</FigureMap>
<h3>Sous-secteurs ciblés pour le développement de l’agroparc et activités préférées tels que dégagés lors du rendez-vous citoyen</h3>
<BarChart src="/chartdata/agroparc-sous-secteurs.json" />
<h4>Sous-secteur 5&nbsp;: Bassin de rétention de la rue Chantale <span>(ainsi que l’ensemble de ses espaces verts adjacents)</span>&nbsp;:</h4>
<p>Implantation d’activités de production agricole, de récréation et de conservation.</p>
<h4>Sous-secteur 6&nbsp;: Parc des Citoyens&nbsp;:</h4>
<p>Implantation d’activités de récréation et de conservation, suivies des activités de production agricole.</p>
<h4>Sous-secteur 2&nbsp;: Site de l’église <span>et</span> Secteur 3&nbsp;: Site de la chandellerie&nbsp;:</h4>
<p>Implantation d’activités commerciales et de récréation.</p>
<h4>Sous-secteur 1&nbsp;: Parc Leblanc <span>et</span> Secteur 4&nbsp;: Site des travaux publics&nbsp;:</h4>
<p>Peu de potentiel de développement d’activités liées à l’agro-parc.</p>


<h2>Propositions</h2>
<p>Le travail d’idéation sur la proposition de l’agroparc de Saint-Constant a été effectué à deux échelles&nbsp;:</p>
<ul>
	<li>L’échelle de la municipalité pour déterminer la programmation territoriale</li>
	<li>L’échelle du secteur du noyau villageois pour détailler certaines propositions d’aménagement et mettre en images les activités de l’agroparc.</li>
</ul>
<p>Les deux échelles de projet permettent une cohabitation multifonctionnelle des espaces. Les lieux de production agricole deviennent à la fois des lieux de promenades (récréation), de découvertes (éducation), des espaces naturels (conservation) et des lieux de vente directe entre producteurs et consommateurs (commercial).</p>
<h3>À l’échelle de la municipalité</h3>
<p>On retrouve quatre principales actions&nbsp;:</p>
<ul>
	<li><strong>Un sentier multifonctionnel</strong>, participe à faire le lien nord-sud entre le territoire agricole et le noyau villageois.</li>
	<li><strong>L’implantation d’agriculture urbaine</strong>, souligne l’identité agricole de la ville en milieu urbain en s’implantant à l’emplacement de la ligne de transport électrique. Marque l’entrée de ville et renforce la convivialité et la qualité du cadre de vie.</li>
	<li><strong>La préservation des bandes riveraines</strong> des rivières Saint-Pierre et Saint-Régis sur l’ensemble du territoire municipal (urbain et agricole). L’implantation ou la restauration de bandes naturalisées (15 m minimum) permettront de maintenir les cours d’eaux en santé et d’en faire des espaces récréatifs conviviaux.</li>
	<li><strong>La création d’un pôle d’accueil</strong> dans le secteur du noyau villageois. Ce projet détaillé dans les prochaines sections permettra d’illustrer une diversité d’actions (récréatives, de conservation, commerciales et de production) à la suite des consultations entreprises lors du rendez-vous citoyens. </li>
</ul>
<h3>À l’échelle du noyau villageois</h3>
<p>La phase 1 du projet de l’agroparc se situe dans le noyau villageois et ses environs. Il découle des aspirations souhaitées par les citoyens, des analyses et constats effectués par les professionnels de l’aménagement.</p>
<p>Une variété d’aménagements sont proposés, regroupés dans 4 grands groupes d’activités&nbsp;:</p>
<ul>
	<li>Productives</li>
	<li>Récréatives</li>
	<li>De conservation</li>
	<li>Commerciales</li>
</ul>

<Proposition
	title="Site A"
	subtitle="Le secteur agricole du bassin de rétention de la rue Chantal"
	key="a"
>
		<p>Le secteur du bassin de rétention est actuellement une friche agricole à proximité du noyau villageois, d’un quartier résidentiel et bordé au sud par l’autoroute 30. Ce lieu a le potentiel de pouvoir se transformer en un lieu aux activités hybrides.</p>
		<p>Le projet propose d’aménager&nbsp;:</p>
		<h4>Des activités de productions agricoles</h4>
		<p>Ce secteur vise à fournir un espace d’expérimentation et de développement en <strong>agriculture bio-intensive</strong> sur 8 hectares. Des pratiques de productions similaires se développent de plus en plus au Québec et démontrent la productivité et la rentabilité de ces méthodes plus respectueuses de l’environnement. Ces terres pourront être divisées et se répartir entre plusieurs producteurs pour une plus grande variété de production. Chaque exploitation est dotée d’un kiosque qui sert à la fois de point de vente direct et de hangar de rangement du matériel. Des haies brises vents sont suggérées afin de structurer chacune des exploitations, favoriser la biodiversité, la qualité des sols, protéger les cultures des vents et augmenter la qualité paysagère.</p>
		<p>L’implantation de ce type d’agriculture dans le secteur du bassin de rétention est stratégique. Par sa proximité au noyau villageois et du tissu urbain résidentiel cela permet à la fois d’offrir une visibilité aux producteurs et de sensibiliser le public aux nouvelles pratiques innovantes, favoriser les circuits courts (proximité entre les lieux de production, distribution et consommation) et transformer ces espaces en milieux de vie mixte.</p>
		<h4>Des activités récréatives</h4>
		<p>À la périphérie nord des jardins de production alimentaire, une allée de promenade multifonctionnelle offre un accès public à ce secteur maraîcher et invite à venir s’y balader. Un grand soin est porté sur les accès vers ce secteur et les liens avec le noyau villageois. La connexion principale est faite avec la place de l’église par l’aménagement d’en sentier en diagonal, en direction du clocher. De plus il y a des accès à l’est pour relier le parc des Citoyens, et à l’ouest avec la rue Saint-Pierre.</p>
		<p>Cet axe diagonal traverse également une forêt nourricière, qui consolide la présence actuelle d’une friche arbustive, où les visiteurs seraient invités à cueillir les fruits produits pour les déguster directement durant leur balade. Cette forêt a la capacité d’être ponctuée d’activités récréatives comme les labyrinthes de maïs, formant des clairières dans la forêt. Cette intervention a l’opportunité de devenir un véritable terrain de jeu pour les familles à proximité tout en répondant à des enjeux de développement durable.</p>
		<h4>Des activités de conservation</h4>
		<p>Au nord des exploitations, le sentier multifonctionnel est doublé d’une bande végétalisée. Celle-ci prend la forme d’une noue paysagère capable de récupérer les eaux de ruissellement. Des végétaux d’espèces indigènes adaptés aux milieux humides, capables d’attirer les pollinisateurs, et ce, durant une longue période (printemps, été, automne), y seront favorisés. Ce système de captation permettra de filtrer les eaux avant d’être déversés dans le cours d’eau de la rivière Saint-Pierre.</p>
		<p>Une plantation d’arbres est suggérée au sud pour faire le tampon entre la zone de cultures et l’autoroute. Cela permettra de réduire les nuisances visuelles et l’exposition au vent, tout en favorisant une plus grande biodiversité et permettant de connecter <strong>les boisés existants à conserver</strong>.</p>
</Proposition>
<Proposition
	title="Site B"
	subtitle="Le parc des Citoyens"
	key="b"
>
	<p>Situé dans une zone résidentielle, le parc des Citoyens est un véritable lieu de vie et de loisirs pour les résidents. Principalement axés sur la présence de nombreux terrains sportifs et de modules de jeux pour enfants, les usages actuels y sont cependant très peu diversifiés. Cette situation est sur le point de changer, car le parc des Citoyens est ciblé pour devenir un nouveau pôle de développement récréotouristique par la transformation du château d’eau en tour d’observation. Cette nouvelle vocation offre une occasion de bonifier l’aménagement du parc afin d’y créer un point d’accueil pour l’agroparc de Saint-Constant ainsi que d’y diversifier la programmation.</p>
	<p>À cette fin, la proposition d’aménagement cherche à améliorer la convivialité de ces lieux, le projet propose d’aménager&nbsp;:</p>
	<h4>Des activités récréatives</h4>
	<p>Pour accompagner la transformation du château d’eau, une place publique minérale est proposée, composée d’un bassin sinueux pour rappeler la présence de l’eau, de mobilier urbain, d’arbres et d’une aire de stationnement écologique. La place du château d’eau pourrait alors aussi bien profiter aux habitants du quartier qu'aux visiteurs curieux de découvrir le terroir de Saint-Constant.</p>
	<h4>Des activités de conservation</h4>
	<p>La plantation d’arbres et d’une prairie fleurie donnera un aspect de campagne champêtre au parc. La prairie fleurie permet de renouveler la gestion des grandes aires gazonnées actuelles. Des semis différents apporteraient une qualité esthétique à cet ensemble en période de floraison et favorisera la biodiversité.</p>
	<h4>Des activités de production agricole</h4>
	<p>Pour rappeler l’identité agricole de la ville et valoriser l’aspect pédagogique et de partage, une série de potagers collectifs sont également proposés au sein du parc des Citoyens. Accessibles à tous, proches d’habitations, ils permettent d’impliquer les citoyens dans la valorisation de leurs espaces publics. Les potagers de tailles variés ont la capacité d’accueillir une diversité de cultures aussi bien ornementales que comestibles.</p>
</Proposition>
<Proposition
	title="Site C"
	subtitle="Le secteur paroissial"
	key="c"
>
	<p>L’église de Saint-Constant et l’ensemble paroissial qui l’entoure constituent le cœur du noyau villageois de Saint-Constant. L’église est néanmoins entourée à l’heure actuelle d’un très grand nombre de places de stationnement afin de desservir les citoyens lors d’événements ponctuels, qu’ils soient religieux ou culturels.</p>
	<p>Afin d’accompagner la création de l’agroparc de Saint-Constant, il est proposé de réaménager ce secteur avec&nbsp;:</p>
	<h4>Des activités commerciales</h4>
	<p>Les aires de stationnement, aux pourtours de l’église, peuvent se transformer en espace multifonctionnel. Le projet propose d’aménager une place pavée polyvalente du côté nord de l’église. Composée d’arbres et d’un kiosque, elle est capable de conserver sa fonction d’aire de stationnement ou encore d'être convertie en place de marché (pour vendre les récoltes maraîchères produites localement) ou en espace événementiel selon les besoins.</p>
	<p>Le long de la montée Lasaline, une allée pavée est aménagée pour maintenir un petit nombre de places de stationnement pour les jours d’événement. De plus, un partenariat pourrait être réalisé avec la MRC de Roussillon afin de permettre l’utilisation des cases situées sur sa propriété de la rue Saint-Pierre lors d’événements. Ceux-ci se déroulant principalement les soirs et les jours de fin de semaine, il y aurait ainsi peu de conflits avec l’utilisation de l’aire de stationnement par les employés de la MRC.</p>
	<p>L’édifice sur montée Lasaline, actuellement occupé par une imprimerie qui accueillait auparavant le Club des 20 a la capacité d’être reconverti en espace d’accueil pour l’agroparc de Saint-Constant. Parfaitement localisé à proximité de la zone agricole et de la Route Verte, le bâtiment pourrait accueillir une aire de restauration et de renseignements pour les visiteurs.</p>
	<h4>Des activités de conservation</h4>
	<p>Au sud de l’église, le long de la montée Lasaline, le concept d’aménagement proposé met en valeur la végétation existante située sur le parvis de l’église, en la prolongeant tout autour. Des sentiers sont aménagés et permettent de relier l’église au cimetière et au site des travaux publics qui pourrait être reconverti en milieu résidentiel.</p>
	<p>De plus, les aménagements proposés visent à mettre en valeur et entretenir la végétation des berges de la rivière Saint-Pierre. Une attention particulière serait apportée au choix de végétaux indigènes. </p>
</Proposition>