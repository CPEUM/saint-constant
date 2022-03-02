<script lang="ts">
	import Concept from '$components/exercice/Concept.svelte';
	import Proposition from '$components/exercice/Proposition.svelte';
	import ExcerptToggle from '$components/excerpt/ExcerptToggle.svelte';
	import Interest from '$components/exercice/Interest.svelte';
	import Figure from '$components/figure/Figure.svelte';
	import FigureMap from '$components/figure/FigureMap.svelte';
	import FigureMarker from '$components/figure/FigureMarker.svelte';
	import Preferences from '$components/exercice/Preferences.svelte';
	import Propositions from '$components/exercice/Propositions.svelte';
	import BarChart from '$components/chart/BarChart.svelte';
	import Exercice from '$components/exercice/Exercice.svelte';
	import Bodies from '$components/bodies/Bodies.svelte';
	import BodiesItem from '$components/bodies/BodiesItem.svelte';
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
	import Legend from '$components/legend/Legend.svelte';
	import LegendItem from '$components/legend/LegendItem.svelte';
	import SousSecteurs from '$components/agroparc/SousSecteurs.svelte';
	import Tandem from '$components/tandem/Tandem.svelte';
	import Image from '$components/primitives/Image.svelte';
	import { highlight } from '$actions/highlight';
	import { revealFlyUp, revealText } from '$actions/revealText';

	let prop1key = null;
</script>

<Exercice key="{'agroparc'}">
	<Concept heading="Le concept d’agroparc">
		<div class="text-wrap">
			<p>Le concept d'agroparc est né dans une perspective de reconnaissance des valeurs environnementales et récréatives du territoire agricole de Saint-Constant.</p>
			<p>L’agroparc vise à&nbsp;:</p>
		</div>
		<Bodies>
			<BodiesItem>Allier agriculture et environnement</BodiesItem>
			<BodiesItem>Améliorer les interrelations ville/campagne</BodiesItem>
			<BodiesItem>Promouvoir la relève agricole et les nouvelles pratiques</BodiesItem>
			<BodiesItem>Assurer un équilibre économique, social et environnemental dans le développement du territoire</BodiesItem>
		</Bodies>
		<div class="text-wrap">
			<ExcerptToggle key="agroparc1">Quelques références supplémentaires d'agroparcs</ExcerptToggle>
			<p>Les exemples d’agroparc en Europe montrent que les parcs agricoles peuvent être initiés à partir&nbsp;:</p>
		</div>
		<Bodies>
			<BodiesItem>De la délimitation d’un espace agricole à titre de parc, sans intervention d’aménagement supplémentaire</BodiesItem>
			<BodiesItem>Du réaménagement d’un espace agricole afin d’en faire un parc</BodiesItem>
			<BodiesItem>De l’aménagement d’un parc public dans lequel certaines aires ont une vocation agricole</BodiesItem>
			<BodiesItem>De l’aménagement d’un parc public géré à partir de techniques tirées de l’agriculture</BodiesItem>
		</Bodies>
		<div class="text-wrap">
			<p>Sur le plan programmatique, les exemples initiés en Europe montrent que les parcs agricoles se regroupent en cinq principales catégories&nbsp;:</p>
		</div>
		<List>
			<ListItem><strong>Activités de production agricole</strong> (cultures maraîchères, productions animales, vergers, potagers collectifs, etc.)</ListItem>
			<ListItem><strong>Activités de conservation</strong> (préservation des zones boisées, des milieux humides et de la biodiversité, etc.)</ListItem>
			<ListItem><strong>Activités récréatives</strong> (sentiers, aires de détentes, terrains sportifs, aires de rassemblements, etc.)</ListItem>
			<ListItem><strong>Activités commerciales</strong> (autocueillette, vente de produits agricoles locaux, restauration ou transformation alimentaire, marché public, etc.)</ListItem>
			<ListItem><strong>Activités éducatives</strong> (accueil de groupes scolaires, sentiers d’interprétation, etc.)</ListItem>
		</List>
	</Concept>
	<Interest heading="L’intérêt d’un agroparc à Saint-Constant">
		<div class="text-wrap">
			<p>Le Plan de développement de la zone agricole (PDZA) de la MRC de Roussillon (2019) mentionne que le développement du territoire agricole de Saint-Constant présente certains défis dont&nbsp;:</p>
		</div>
		<List>
			<ListItem>La présence de terres en friche à proximité de l’autoroute 30 ou du milieu urbanisé</ListItem>
			<ListItem>Une offre de produits locaux à renforcer</ListItem>
		</List>
		<div class="text-wrap">
			<p>De plus, il soulève certaines préoccupations environnementales en regard des pratiques agricoles actuelles liées notamment à&nbsp;:</p>
		</div>
		<List>
			<ListItem>La faible présence de superficies boisées</ListItem>
			<ListItem>L’érosion des rives et la mauvaise qualité de l’eau</ListItem>
		</List>
		<div class="text-wrap">
			<p>Les objectifs d’un agroparc à Saint-Constant touchent&nbsp:</p>
		</div>
		<Bodies>
			<BodiesItem>Le développement multifonctionnel des terres agricoles</BodiesItem>
			<BodiesItem>La valorisation de la production locale</BodiesItem>
			<BodiesItem>L'amélioration des liens entre le milieu urbain et le milieu agricole</BodiesItem>
		</Bodies>
		<div class="text-wrap">
			<p><strong>Le projet de l’agroparc voit alors les friches agricoles à proximité du noyau villageois comme lieux d’opportunités de création d’un pôle d’interaction multifonctionnel entre producteurs et citoyens.</strong></p>
		</div>
	</Interest>
	<Preferences>
		<div class="text-wrap">
			<p>Le secteur du noyau villageois a été identifié comme territoire potentiel de développement de l’agroparc pour une première phase. Il présente plusieurs potentiels stratégiques comme&nbsp;:</p>
		</div>
		<List>
			<ListItem>La présence de terrains publics en zone agricole</ListItem>
			<ListItem>Le développement de projets municipaux capables de s’intégrer aux principes d’aménagement de l’agroparc (pôle récréotouristique du château d’eau)</ListItem>
		</List>
		<div class="text-wrap">
			<p>Dans ce secteur, six sous-secteurs d’intervention ont été identifiés par les participants présents au rendez-vous citoyens du 13 février 2020.</p>
		</div>
		<FigureMap>
			<FigureMarker lat={45.36999} lon={-73.57000} label="1" key="asd" />
			<FigureMarker lat={45.36949} lon={-73.57010} label="2" key="asd" />
			<FigureMarker lat={45.36939} lon={-73.57005} label="3" key="asdasd" />
			<FigureMarker lat={45.36991} lon={-73.57001} label="4" key="asd" />
			<FigureMarker lat={45.36929} lon={-73.57000} label="5" key="asd" />
			<FigureMarker lat={45.36979} lon={-73.57003} label="6" key="" />
			<Legend>
				<LegendItem label="1" key="asd">Parc Leblanc</LegendItem>
				<LegendItem label="2" key="asd">Site de l’église de Saint-Constant</LegendItem>
				<LegendItem label="3" key="asd">Chandellerie</LegendItem>
				<LegendItem label="4" key="asd">Site des travaux publics</LegendItem>
				<LegendItem label="5" key="asd">Bassin de rétention de la rue Chantale</LegendItem>
				<LegendItem label="6" key="asd">Parc des Citoyens</LegendItem>
			</Legend>
		</FigureMap>
		<SousSecteurs />
	</Preferences>
	<Propositions>
		<div class="text-wrap">
			<p>Le travail d’idéation sur la proposition de l’agroparc de Saint-Constant a été effectué à deux échelles&nbsp;:</p>
		</div>
		<List>
			<ListItem>L’échelle de la municipalité pour déterminer la programmation territoriale</ListItem>
			<ListItem>L’échelle du secteur du noyau villageois pour détailler certaines propositions d’aménagement et mettre en images les activités de l’agroparc.</ListItem>
		</List>
		<div class="text-wrap">
			<p>Les deux échelles de projet permettent une cohabitation multifonctionnelle des espaces. Les lieux de production agricole deviennent à la fois des lieux de promenades (récréation), de découvertes (éducation), des espaces naturels (conservation) et des lieux de vente directe entre producteurs et consommateurs (commercial).</p>
			<h3 use:revealText={revealFlyUp} class="left">À l’échelle de la municipalité</h3>
			<p>On retrouve quatre principales actions&nbsp;:</p>
		</div>
		<List>
			<ListItem><strong>Un sentier multifonctionnel</strong>, participe à faire le lien nord-sud entre le territoire agricole et le noyau villageois.</ListItem>
			<ListItem><strong>L’implantation d’agriculture urbaine</strong>, souligne l’identité agricole de la ville en milieu urbain en s’implantant à l’emplacement de la ligne de transport électrique. Marque l’entrée de ville et renforce la convivialité et la qualité du cadre de vie.</ListItem>
			<ListItem><strong>La préservation des bandes riveraines</strong> des rivières Saint-Pierre et Saint-Régis sur l’ensemble du territoire municipal (urbain et agricole). L’implantation ou la restauration de bandes naturalisées (15 m minimum) permettront de maintenir les cours d’eaux en santé et d’en faire des espaces récréatifs conviviaux.</ListItem>
			<ListItem><strong>La création d’un pôle d’accueil</strong> dans le secteur du noyau villageois. Ce projet détaillé dans les prochaines sections permettra d’illustrer une diversité d’actions (récréatives, de conservation, commerciales et de production) à la suite des consultations entreprises lors du rendez-vous citoyens. </ListItem>
		</List>
		<!-- FigureMap avec tracés de 3.1.4 -->
		<div class="text-wrap">
			<h3 use:revealText={revealFlyUp}>À l’échelle du noyau villageois</h3>
			<p>La phase 1 du projet de l’agroparc se situe dans le noyau villageois et ses environs. Il découle des aspirations souhaitées par les citoyens, des analyses et constats effectués par les professionnels de l’aménagement.</p>
			<p>Une variété d’aménagements sont proposés, regroupés dans 4 grands groupes d’activités&nbsp;:</p>
		</div>
		<Bodies>
			<BodiesItem size={210}>Productives</BodiesItem>
			<BodiesItem size={200}>Récréatives</BodiesItem>
			<BodiesItem size={220}>De conservation</BodiesItem>
			<BodiesItem size={200}>Commerciales</BodiesItem>
		</Bodies>
		<!-- FigureMap de 3.1.5 -->
		<Proposition
			label="Site A"
			title="Le secteur agricole du bassin de rétention de la rue Chantal"
			key="a"
			src="/media/agroparc/3-1-8.jpg"
		>
			<div class="text-wrap">
				<p>Le secteur du bassin de rétention est actuellement une friche agricole à proximité du noyau villageois, d’un quartier résidentiel et bordé au sud par l’autoroute 30. Ce lieu a le potentiel de pouvoir se transformer en un lieu aux activités hybrides.</p>
			</div>
			<!-- Devrait plutôt être une FigureMap avec un zoom sur la région et l'image (zoom de 3.1.5 => 3.1.9) en superposé -->
			<Figure src="/media/agroparc/plan_noyau_villageois-01.jpg" description="">
				<svelte:fragment slot="markers">
					<FigureMarker x={12} y={25} label="A" />
					<FigureMarker x={22} y={35} label="B" />
					<FigureMarker x={52} y={75} label="C" />
					<FigureMarker x={52} y={75} label="D" />
					<FigureMarker x={52} y={75} label="E" />
					<FigureMarker x={52} y={75} label="F" />
					<FigureMarker x={52} y={75} label="G" />
				</svelte:fragment>
				<Legend>
					<LegendItem shape="line">Accès à l'agroparc</LegendItem>
					<LegendItem label="A">Jardins maraîchers</LegendItem>
					<LegendItem label="B">Forêt nourricière</LegendItem>
					<LegendItem label="C">Boisé restauré</LegendItem>
					<LegendItem label="D">Labyrinthes de maïs</LegendItem>
					<LegendItem label="E">Sentier multifonctionnel</LegendItem>
					<LegendItem label="F">Noue paysagère</LegendItem>
					<LegendItem label="G">Boisé tampon</LegendItem>
				</Legend>
			</Figure>
			<Tandem>
				<div class="text-wrap" slot="1">
					<p>Le projet propose d’aménager&nbsp;:</p>
					<h4 use:revealText={revealFlyUp}>Des activités de productions agricoles</h4>
					<p>Ce secteur vise à fournir un espace d’expérimentation et de développement en <strong>agriculture bio-intensive</strong> sur 8 hectares. Des pratiques de productions similaires se développent de plus en plus au Québec et démontrent la productivité et la rentabilité de ces méthodes plus respectueuses de l’environnement. Ces terres pourront être divisées et se répartir entre plusieurs producteurs pour une plus grande variété de production. Chaque exploitation est dotée d’un kiosque qui sert à la fois de point de vente direct et de hangar de rangement du matériel. Des haies brises vents sont suggérées afin de structurer chacune des exploitations, favoriser la biodiversité, la qualité des sols, protéger les cultures des vents et augmenter la qualité paysagère.</p>
					<p>L’implantation de ce type d’agriculture dans le secteur du bassin de rétention est stratégique. Par sa proximité au noyau villageois et du tissu urbain résidentiel cela permet à la fois d’offrir une visibilité aux producteurs et de sensibiliser le public aux nouvelles pratiques innovantes, favoriser les circuits courts (proximité entre les lieux de production, distribution et consommation) et transformer ces espaces en milieux de vie mixte.</p>
					<Image src="/media/agroparc/3-1-6.jpg" alt="Bassin de rétention" />
					<h4 use:revealText={revealFlyUp}>Des activités récréatives</h4>
					<p>À la périphérie nord des jardins de production alimentaire, une allée de promenade multifonctionnelle offre un accès public à ce secteur maraîcher et invite à venir s’y balader. Un grand soin est porté sur les accès vers ce secteur et les liens avec le noyau villageois. La connexion principale est faite avec la place de l’église par l’aménagement d’en sentier en diagonal, en direction du clocher. De plus il y a des accès à l’est pour relier le parc des Citoyens, et à l’ouest avec la rue Saint-Pierre.</p>
					<p>Cet axe diagonal traverse également une forêt nourricière, qui consolide la présence actuelle d’une friche arbustive, où les visiteurs seraient invités à cueillir les fruits produits pour les déguster directement durant leur balade. Cette forêt a la capacité d’être ponctuée d’activités récréatives comme les labyrinthes de maïs, formant des clairières dans la forêt. Cette intervention a l’opportunité de devenir un véritable terrain de jeu pour les familles à proximité tout en répondant à des enjeux de développement durable.</p>
					<h4 use:revealText={revealFlyUp}>Des activités de conservation</h4>
					<p>Au nord des exploitations, le sentier multifonctionnel est doublé d’une bande végétalisée. Celle-ci prend la forme d’une noue paysagère capable de récupérer les eaux de ruissellement. Des végétaux d’espèces indigènes adaptés aux milieux humides, capables d’attirer les pollinisateurs, et ce, durant une longue période (printemps, été, automne), y seront favorisés. Ce système de captation permettra de filtrer les eaux avant d’être déversés dans le cours d’eau de la rivière Saint-Pierre.</p>
					<p>Une plantation d’arbres est suggérée au sud pour faire le tampon entre la zone de cultures et l’autoroute. Cela permettra de réduire les nuisances visuelles et l’exposition au vent, tout en favorisant une plus grande biodiversité et permettant de connecter <strong>les boisés existants à conserver</strong>.</p>
				</div>
				<svelte:fragment slot="2">
					<!-- 3.1.7 -->
					<Figure src="/media/agroparc/st-constant_axo_agri.jpg" description="">
						<svelte:fragment slot="markers">
							<FigureMarker x={12} y={25} label="A" />
							<FigureMarker x={22} y={35} label="B" />
							<FigureMarker x={52} y={75} label="C" />
							<FigureMarker x={52} y={75} label="D" />
							<FigureMarker x={52} y={75} label="E" />
							<FigureMarker x={52} y={75} label="F" />
							<FigureMarker x={52} y={75} label="G" />
						</svelte:fragment>
						<Legend>
							<LegendItem shape="line">Accès à l'agroparc</LegendItem>
							<LegendItem label="A">Jardins maraîchers</LegendItem>
							<LegendItem label="B">Forêt nourricière</LegendItem>
							<LegendItem label="C">Boisé restauré</LegendItem>
							<LegendItem label="D">Labyrinthes de maïs</LegendItem>
							<LegendItem label="E">Sentier multifonctionnel</LegendItem>
							<LegendItem label="F">Noue paysagère</LegendItem>
							<LegendItem label="G">Boisé tampon</LegendItem>
						</Legend>
					</Figure>
				</svelte:fragment>
			</Tandem>
		</Proposition>
		<Proposition
			label="Site B"
			title="Le parc des Citoyens"
			key="b"
			src="/media/agroparc/3-1-10.jpg"
		>
			<div class="text-wrap">
				<p>Situé dans une zone résidentielle, le parc des Citoyens est un véritable lieu de vie et de loisirs pour les résidents. Principalement axés sur la présence de nombreux terrains sportifs et de modules de jeux pour enfants, les usages actuels y sont cependant très peu diversifiés. Cette situation est sur le point de changer, car le parc des Citoyens est ciblé pour devenir un nouveau pôle de développement récréotouristique par la transformation du château d’eau en tour d’observation. Cette nouvelle vocation offre une occasion de bonifier l’aménagement du parc afin d’y créer un point d’accueil pour l’agroparc de Saint-Constant ainsi que d’y diversifier la programmation.</p>
			</div>
			<Tandem>
				<div class="text-wrap" slot="2">
					<p>À cette fin, la proposition d’aménagement cherche à améliorer la convivialité de ces lieux, le projet propose d’aménager&nbsp;:</p>
					<h4>Des activités récréatives</h4>
					<p>Pour accompagner la transformation du château d’eau, une place publique minérale est proposée, composée d’un bassin sinueux pour rappeler la présence de l’eau, de mobilier urbain, d’arbres et d’une aire de stationnement écologique. La place du château d’eau pourrait alors aussi bien profiter aux habitants du quartier qu'aux visiteurs curieux de découvrir le terroir de Saint-Constant.</p>
					<h4>Des activités de conservation</h4>
					<p>La plantation d’arbres et d’une prairie fleurie donnera un aspect de campagne champêtre au parc. La prairie fleurie permet de renouveler la gestion des grandes aires gazonnées actuelles. Des semis différents apporteraient une qualité esthétique à cet ensemble en période de floraison et favorisera la biodiversité.</p>
					<h4>Des activités de production agricole</h4>
					<p>Pour rappeler l’identité agricole de la ville et valoriser l’aspect pédagogique et de partage, une série de potagers collectifs sont également proposés au sein du parc des Citoyens. Accessibles à tous, proches d’habitations, ils permettent d’impliquer les citoyens dans la valorisation de leurs espaces publics. Les potagers de tailles variés ont la capacité d’accueillir une diversité de cultures aussi bien ornementales que comestibles.</p>
				</div>
				<svelte:fragment slot="1">
					<Figure src="/media/agroparc/st-constant_axo_parc_citoyen.jpg" description="">
						<svelte:fragment slot="markers">
							<FigureMarker x={12} y={25} label="A" />
							<FigureMarker x={22} y={35} label="B" />
							<FigureMarker x={52} y={75} label="C" />
							<FigureMarker x={52} y={75} label="D" />
							<FigureMarker x={52} y={75} label="E" />
							<FigureMarker x={52} y={75} label="F" />
							<FigureMarker x={52} y={75} label="G" />
						</svelte:fragment>
						<Legend>
							<LegendItem label="A">Jeux pour enfants conservés</LegendItem>
							<LegendItem label="B">Château d'eau / Tour d'observation</LegendItem>
							<LegendItem label="C">Place publique</LegendItem>
							<LegendItem label="D">Stationnements</LegendItem>
							<LegendItem label="E">Prairie fleurie</LegendItem>
							<LegendItem label="F">Potagers</LegendItem>
							<LegendItem label="G">Terrains sportifs conservés</LegendItem>
						</Legend>
					</Figure>
				</svelte:fragment>
			</Tandem>
		</Proposition>
		<Proposition
			label="Site C"
			title="Le secteur paroissial"
			key="c"
			src="/media/agroparc/3-1-12.jpg"
		>
			<div class="text-wrap">
				<p>L’église de Saint-Constant et l’ensemble paroissial qui l’entoure constituent le cœur du noyau villageois de Saint-Constant. L’église est néanmoins entourée à l’heure actuelle d’un très grand nombre de places de stationnement afin de desservir les citoyens lors d’événements ponctuels, qu’ils soient religieux ou culturels.</p>
			</div>
			<Tandem>
				<div class="text-wrap" slot="1">
					<p>Afin d’accompagner la création de l’agroparc de Saint-Constant, il est proposé de réaménager ce secteur avec&nbsp;:</p>
					<h4>Des activités commerciales</h4>
					<p>Les aires de stationnement, aux pourtours de l’église, peuvent se transformer en espace multifonctionnel. Le projet propose d’aménager une place pavée polyvalente du côté nord de l’église. Composée d’arbres et d’un kiosque, elle est capable de conserver sa fonction d’aire de stationnement ou encore d'être convertie en place de marché (pour vendre les récoltes maraîchères produites localement) ou en espace événementiel selon les besoins.</p>
					<p>Le long de la montée Lasaline, une allée pavée est aménagée pour maintenir un petit nombre de places de stationnement pour les jours d’événement. De plus, un partenariat pourrait être réalisé avec la MRC de Roussillon afin de permettre l’utilisation des cases situées sur sa propriété de la rue Saint-Pierre lors d’événements. Ceux-ci se déroulant principalement les soirs et les jours de fin de semaine, il y aurait ainsi peu de conflits avec l’utilisation de l’aire de stationnement par les employés de la MRC.</p>
					<p>L’édifice sur montée Lasaline, actuellement occupé par une imprimerie qui accueillait auparavant le Club des 20 a la capacité d’être reconverti en espace d’accueil pour l’agroparc de Saint-Constant. Parfaitement localisé à proximité de la zone agricole et de la Route Verte, le bâtiment pourrait accueillir une aire de restauration et de renseignements pour les visiteurs.</p>
					<h4>Des activités de conservation</h4>
					<p>Au sud de l’église, le long de la montée Lasaline, le concept d’aménagement proposé met en valeur la végétation existante située sur le parvis de l’église, en la prolongeant tout autour. Des sentiers sont aménagés et permettent de relier l’église au cimetière et au site des travaux publics qui pourrait être reconverti en milieu résidentiel.</p>
					<p>De plus, les aménagements proposés visent à mettre en valeur et entretenir la végétation des berges de la rivière Saint-Pierre. Une attention particulière serait apportée au choix de végétaux indigènes. </p>
				</div>
				<svelte:fragment slot="2">
					<Figure src="/media/agroparc/st-constant_axo_eglise.jpg" description="">
						<svelte:fragment slot="markers">
							<FigureMarker x={12} y={25} label="A" />
							<FigureMarker x={22} y={35} label="B" />
							<FigureMarker x={52} y={75} label="C" />
							<FigureMarker x={52} y={75} label="D" />
							<FigureMarker x={52} y={75} label="E" />
							<FigureMarker x={52} y={75} label="F" />
							<FigureMarker x={52} y={75} label="G" />
						</svelte:fragment>
						<Legend>
							<LegendItem label="A">Place pavée polyvalente</LegendItem>
							<LegendItem label="B">Contre-allée</LegendItem>
							<LegendItem label="C">Végétalisation autour de l'église</LegendItem>
							<LegendItem label="D">Accueil de l'agroparc</LegendItem>
							<LegendItem label="E">Sentier piéton <span style="opacity: .5">(lient entre la rue Saint-Pierre et l'agroparc)</span></LegendItem>
						</Legend>
					</Figure>
				</svelte:fragment>
			</Tandem>
		</Proposition>
	</Propositions>
</Exercice>