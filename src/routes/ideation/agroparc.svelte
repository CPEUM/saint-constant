<script lang="ts">
	import Concept from '$components/exercice/Concept.svelte';
	import Proposition from '$components/exercice/Proposition.svelte';
	import Excerpt from '$components/excerpt/Excerpt.svelte';
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
	import Tandem from '$components/tandem/Tandem.svelte';
	import Image from '$components/primitives/Image.svelte';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { base } from '$app/paths';
	import { getData } from '$utils/getData';
	import { GeoJSONFeature } from 'maplibre-gl';
	import colors from '$styles/colors.json';
	import bbox from '@turf/bbox';
	import MapFeature from '$components/map/MapFeature.svelte';
	import MapImage from '$components/map/MapImage.svelte';

	const sousSecteurs = getData('/data/geo/agroparc/sous-secteurs.geojson');
	const echelleNoyauMisc = getData('/data/geo/agroparc/echelle-noyau-misc.geojson');
	const echelleNoyauMarkers = getData('/data/geo/agroparc/echelle-noyau-markers.geojson');
	const siteA = getData('/data/geo/agroparc/site-a.geojson');
</script>

<Exercice key="agroparc">
	<Concept heading="Le concept d’agroparc">
		<p>Le concept d'agroparc est né dans une perspective de reconnaissance des valeurs environnementales et récréatives du territoire agricole de Saint-Constant. L’agroparc vise à&nbsp;:</p>
		<Bodies>
			<BodiesItem>Allier agriculture et environnement</BodiesItem>
			<BodiesItem>Améliorer les interrelations ville/campagne</BodiesItem>
			<BodiesItem>Promouvoir la relève agricole et les nouvelles pratiques</BodiesItem>
			<BodiesItem>Assurer un équilibre économique, social et environnemental dans le développement du territoire</BodiesItem>
		</Bodies>
		<Excerpt name="Agroparc1">Quelques références supplémentaires d'agroparcs</Excerpt>
		<p>Les exemples d’agroparc en Europe montrent que les parcs agricoles peuvent être initiés à partir&nbsp;:</p>
		<Bodies>
			<BodiesItem>De la délimitation d’un espace agricole à titre de parc, sans intervention d’aménagement supplémentaire</BodiesItem>
			<BodiesItem>Du réaménagement d’un espace agricole afin d’en faire un parc</BodiesItem>
			<BodiesItem>De l’aménagement d’un parc public dans lequel certaines aires ont une vocation agricole</BodiesItem>
			<BodiesItem>De l’aménagement d’un parc public géré à partir de techniques tirées de l’agriculture</BodiesItem>
		</Bodies>
		<p>Sur le plan programmatique, les exemples initiés en Europe montrent que les parcs agricoles se regroupent en cinq principales catégories&nbsp;:</p>
		<List>
			<ListItem><strong>Activités de production agricole</strong> (cultures maraîchères, productions animales, vergers, potagers collectifs, etc.)</ListItem>
			<ListItem><strong>Activités de conservation</strong> (préservation des zones boisées, des milieux humides et de la biodiversité, etc.)</ListItem>
			<ListItem><strong>Activités récréatives</strong> (sentiers, aires de détentes, terrains sportifs, aires de rassemblements, etc.)</ListItem>
			<ListItem><strong>Activités commerciales</strong> (autocueillette, vente de produits agricoles locaux, restauration ou transformation alimentaire, marché public, etc.)</ListItem>
			<ListItem><strong>Activités éducatives</strong> (accueil de groupes scolaires, sentiers d’interprétation, etc.)</ListItem>
		</List>
	</Concept>
	<Interest heading="L’intérêt d’un agroparc à Saint-Constant">
		<p>
			Le Plan de développement de la zone agricole (PDZA) de la MRC de Roussillon (2019) mentionne que le développement du territoire agricole de Saint-Constant présente certains défis
			dont&nbsp;:
		</p>
		<List>
			<ListItem>La présence de terres en friche à proximité de l’autoroute 30 ou du milieu urbanisé</ListItem>
			<ListItem>Une offre de produits locaux à renforcer</ListItem>
		</List>
		<p>De plus, il soulève certaines préoccupations environnementales en regard des pratiques agricoles actuelles liées notamment à&nbsp;:</p>
		<List>
			<ListItem>La faible présence de superficies boisées</ListItem>
			<ListItem>L’érosion des rives et la mauvaise qualité de l’eau</ListItem>
		</List>
		<p>Les objectifs d’un agroparc à Saint-Constant touchent&nbsp:</p>
		<Bodies>
			<BodiesItem>Le développement multifonctionnel des terres agricoles</BodiesItem>
			<BodiesItem>La valorisation de la production locale</BodiesItem>
			<BodiesItem>L'amélioration des liens entre le milieu urbain et le milieu agricole</BodiesItem>
		</Bodies>
		<p>
			<strong
				>Le projet de l’agroparc voit alors les friches agricoles à proximité du noyau villageois comme lieux d’opportunités de création d’un pôle d’interaction multifonctionnel entre
				producteurs et citoyens.</strong
			>
		</p>
	</Interest>
	<Preferences>
		<p>
			Le secteur du noyau villageois a été identifié comme territoire potentiel de développement de l’agroparc pour une première phase. Il présente plusieurs potentiels stratégiques comme&nbsp;:
		</p>
		<List>
			<ListItem>La présence de terrains publics en zone agricole</ListItem>
			<ListItem>Le développement de projets municipaux capables de s’intégrer aux principes d’aménagement de l’agroparc (pôle récréotouristique du château d’eau)</ListItem>
		</List>
		<p class="bg" style:--bgtop="-1000px" style:padding-bottom="100px">
			Dans ce secteur, six sous-secteurs d’intervention ont été identifiés par les participants présents au rendez-vous citoyens du 13 février 2020.
		</p>
		<FigureMap
			bounds={[
				[-73.6, 45.375],
				[-73.55, 45.348]
			]}
		>
			{#await sousSecteurs then data}
				{#each data.features as feature}
					<FigureMarker
						lnglat={feature.geometry.coordinates}
						label={feature.properties.label}
						key="sous-secteur-{feature.properties.label}"
						color={colors.light1}
						fill={colors.agroparc2}
						colorHighlight="white"
						fillHighlight={colors.agroparc3}
					/>
				{/each}
			{/await}
			<svelte:fragment slot="legend">
				{#await sousSecteurs then data}
					{#each data.features as feature}
						<LegendItem label={feature.properties.label} key="sous-secteur-{feature.properties.label}">Sous-secteur: {feature.properties.name}</LegendItem>
					{/each}
				{/await}
			</svelte:fragment>
		</FigureMap>
		<h4 class="bg" style:padding-top="50px" style:--bgbottom="-1000px">
			Sous-secteurs ciblés pour le développement de l’agroparc et activités préférées tels que dégagés lors du rendez-vous citoyen
		</h4>
		<BarChart src="/data/charts/agroparc/sous-secteurs.json" />
		<List>
			<ListItem>
				<p>
					<strong>Sous-secteur 5&nbsp;: Bassin de rétention de la rue Chantale</strong>
					(ainsi que l’ensemble de ses espaces verts adjacents)&nbsp;:<br />
					Implantation d’activités de production agricole, de récréation et de conservation.
				</p>
			</ListItem>
			<ListItem>
				<p>
					<strong>Sous-secteur 6&nbsp;: Parc des Citoyens&nbsp;:</strong><br />
					Implantation d’activités de récréation et de conservation, suivies des activités de production agricole.
				</p>
			</ListItem>
			<ListItem>
				<p>
					<strong>Sous-secteur 2&nbsp;: Site de l’église</strong> et
					<strong>Secteur 3&nbsp;: Site de la chandellerie&nbsp;:</strong><br />
					Implantation d’activités commerciales et de récréation.
				</p>
			</ListItem>
			<ListItem>
				<p>
					<strong>Sous-secteur 1&nbsp;: Parc Leblanc</strong> et
					<strong>Secteur 4&nbsp;: Site des travaux publics&nbsp;:</strong><br />
					Peu de potentiel de développement d’activités liées à l’agro-parc.
				</p>
			</ListItem>
		</List>
	</Preferences>
	<Propositions>
		<p>Le travail d’idéation sur la proposition de l’agroparc de Saint-Constant a été effectué à deux échelles&nbsp;:</p>
		<List>
			<ListItem>L’échelle de la municipalité pour déterminer la programmation territoriale</ListItem>
			<ListItem>L’échelle du secteur du noyau villageois pour détailler certaines propositions d’aménagement et mettre en images les activités de l’agroparc.</ListItem>
		</List>
		<p>
			Les deux échelles de projet permettent une cohabitation multifonctionnelle des espaces. Les lieux de production agricole deviennent à la fois des lieux de promenades (récréation), de
			découvertes (éducation), des espaces naturels (conservation) et des lieux de vente directe entre producteurs et consommateurs (commercial).
		</p>
		<div class="text-wrap">
			<h3 use:revealText={revealFlyUp} class="left">À l’échelle de la municipalité</h3>
		</div>
		<p>On retrouve quatre principales actions&nbsp;:</p>
		<List>
			<ListItem><strong>Un sentier multifonctionnel</strong>, participe à faire le lien nord-sud entre le territoire agricole et le noyau villageois.</ListItem>
			<ListItem
				><strong>L’implantation d’agriculture urbaine</strong>, souligne l’identité agricole de la ville en milieu urbain en s’implantant à l’emplacement de la ligne de transport électrique.
				Marque l’entrée de ville et renforce la convivialité et la qualité du cadre de vie.</ListItem
			>
			<ListItem
				><strong>La préservation des bandes riveraines</strong> des rivières Saint-Pierre et Saint-Régis sur l’ensemble du territoire municipal (urbain et agricole). L’implantation ou la restauration
				de bandes naturalisées (15 m minimum) permettront de maintenir les cours d’eaux en santé et d’en faire des espaces récréatifs conviviaux.</ListItem
			>
			<ListItem
				><strong>La création d’un pôle d’accueil</strong> dans le secteur du noyau villageois. Ce projet détaillé dans les prochaines sections permettra d’illustrer une diversité d’actions (récréatives,
				de conservation, commerciales et de production) à la suite des consultations entreprises lors du rendez-vous citoyens.</ListItem
			>
		</List>
		<div class="bgdiv" style="--bgtop: -1000px; padding-bottom: 60px;" />
		<FigureMap
			pitch={0}
			bounds={[
				[-73.6122, 45.4],
				[-73.5495, 45.356]
			]}
		>
			<MapImage
				id="agroparc-3-1-4"
				url={base + '/media/agroparc/3-1-4-md.jpg'}
				coordinates={[
					[-73.6122, 45.4],
					[-73.5495, 45.4],
					[-73.5495, 45.356],
					[-73.6122, 45.356]
				]}
			/>
			<svelte:fragment slot="legend">
				<LegendItem src={base + '/media/agroparc/legend-striped-red.png'}>Production agricole</LegendItem>
				<LegendItem shape="square" fill="#d29f47">Lieu de conservation</LegendItem>
				<LegendItem shape="square" fill="#d7794e">Lieu multifonctionnel</LegendItem>
				<LegendItem shape="square" fill="#e1b7ab">Agro-tourisme</LegendItem>
				<LegendItem shape="circle" symbolScale={0.5} fill="#b71313">Pôle d'accueil</LegendItem>
				<!-- <LegendItem shape="circle" zoom={14.5} lnglat={[-73.568, 45.366]} label="A" fill="#d5e4e8">Noyau villageois</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.58, 45.368]} label="B" fill="#d5e4e8">Montée Saint-Régis</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.599, 45.375]} label="C" fill="#d5e4e8">Rue Sainte-Catherine / Montée Saint-Régis</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.6, 45.382]} label="D" fill="#d5e4e8">Gare Sainte-Catherine</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.586, 45.385]} label="E" fill="#d5e4e8">Rue Sainte-Catherine / Meunier</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.575, 45.389]} label="F" fill="#d5e4e8">La route 132</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.559, 45.382]} label="G" fill="#d5e4e8">La rue Saint-Pierre</LegendItem>
				<LegendItem shape="circle" zoom={14.5} lnglat={[-73.57, 45.376]} label="H" fill="#d5e4e8">Gare Saint-Constant</LegendItem> -->
			</svelte:fragment>
		</FigureMap>
		<div class="text-wrap bg" style="--bgbottom:-1000px; padding-top: 40px;">
			<h3 use:revealText={revealFlyUp}>À l’échelle du noyau villageois</h3>
		</div>
		<p>
			La phase 1 du projet de l’agroparc se situe dans le noyau villageois et ses environs. Il découle des aspirations souhaitées par les citoyens, des analyses et constats effectués par les
			professionnels de l’aménagement. Une variété d’aménagements sont proposés, regroupés dans 4 grands groupes d’activités&nbsp;:
		</p>
		<Bodies>
			<BodiesItem size={210}>Productives</BodiesItem>
			<BodiesItem size={200}>Récréatives</BodiesItem>
			<BodiesItem size={220}>De conservation</BodiesItem>
			<BodiesItem size={200}>Commerciales</BodiesItem>
		</Bodies>
		<FigureMap
			bounds={[
				[-73.582, 45.369],
				[-73.552, 45.353]
			]}
		>
			<MapImage
				id="noyau"
				url={base + '/media/agroparc/plan_noyau_villageois-01.jpg'}
				coordinates={[
					[-73.57312202453613, 45.365895919964046],
					[-73.55619192123413, 45.36184042166606],
					[-73.56029033660889, 45.35407536661815],
					[-73.57713460922241, 45.357965566229666]
				]}
			/>
			{#await echelleNoyauMisc then data}
				<MapFeature id="agroparc-noyau-misc" {data} strokeColor={colors.dark1} strokeOpacity={1} strokeWidth={1} />
			{/await}
			{#await echelleNoyauMarkers then points}
				{#each points.features as feature}
					<FigureMarker
						lnglat={feature.geometry.coordinates}
						label={feature.properties.label}
						key="agroparc-marker-{feature.properties.label}"
						color={colors.light1}
						fill={colors.agroparc2}
						colorHighlight="white"
						fillHighlight={colors.agroparc3}
					/>
				{/each}
			{/await}
			<svelte:fragment slot="legend">
				{#await echelleNoyauMarkers then points}
					{#each points.features as feature}
						<LegendItem label={feature.properties.label} key="agroparc-marker-{feature.properties.label}">
							{feature.properties.title}
						</LegendItem>
					{/each}
				{/await}
			</svelte:fragment>
		</FigureMap>
		<Proposition label="Site A" title="Le secteur agricole du bassin de rétention de la rue Chantal" key="a" src="/media/agroparc/3-1-6.jpg">
			<FigureMap
				bounds={[
					[-73.575, 45.364],
					[-73.56, 45.356]
				]}
				pitch={0}
			>
				<MapImage
					id="noyau"
					url={base + '/media/agroparc/plan_noyau_villageois-01.jpg'}
					coordinates={[
						[-73.57312202453613, 45.365895919964046],
						[-73.55619192123413, 45.36184042166606],
						[-73.56029033660889, 45.35407536661815],
						[-73.57713460922241, 45.357965566229666]
					]}
				/>
				{#await echelleNoyauMisc then data}
					<MapFeature id="agroparcnoyaumisc" {data} strokeColor={colors.dark1} strokeOpacity={1} strokeWidth={1} />
				{/await}
				{#await siteA then points}
					{#each points.features as feature}
						<FigureMarker
							lnglat={feature.geometry.coordinates}
							label={feature.properties.label}
							key="site-a-{feature.properties.label}"
							color={colors.light1}
							fill={colors.agroparc2}
							colorHighlight="white"
							fillHighlight={colors.agroparc3}
						/>
					{/each}
				{/await}
				<svelte:fragment slot="legend">
					{#await siteA then points}
						{#each points.features.filter((f) => !f.properties.nolegend) as feature}
							<LegendItem label={feature.properties.label} key="site-a-{feature.properties.label}">
								{feature.properties.title}
							</LegendItem>
						{/each}
					{/await}
				</svelte:fragment>
			</FigureMap>
			<div style="position:relative; padding-top: 100px;" class="bg" style:--bgbottom="-800px">
				<Excerpt name="Agroparc2">Pour les curieux&nbsp;: Agriculture bio-intensive</Excerpt>
			</div>
			<Image style="max-width: var(--width-lg);" src="/media/agroparc/3-1-8.jpg" alt="Perspective de l'agroparc proposé" />
			<p>
				Le secteur du bassin de rétention est actuellement une friche agricole à proximité du noyau villageois, d’un quartier résidentiel et bordé au sud par l’autoroute 30. Ce lieu a le
				potentiel de pouvoir se transformer en un lieu aux activités hybrides. Le projet propose d’aménager&nbsp;:
			</p>
			<h4>Des activités de productions agricoles</h4>
			<p>
				Ce secteur vise à fournir un espace d’expérimentation et de développement en <strong>agriculture bio-intensive</strong> sur 8 hectares. Des pratiques de productions similaires se développent
				de plus en plus au Québec et démontrent la productivité et la rentabilité de ces méthodes plus respectueuses de l’environnement. Ces terres pourront être divisées et se répartir entre plusieurs
				producteurs pour une plus grande variété de production. Chaque exploitation est dotée d’un kiosque qui sert à la fois de point de vente direct et de hangar de rangement du matériel. Des
				haies brises vents sont suggérées afin de structurer chacune des exploitations, favoriser la biodiversité, la qualité des sols, protéger les cultures des vents et augmenter la qualité paysagère.
			</p>
			<p>
				L’implantation de ce type d’agriculture dans le secteur du bassin de rétention est stratégique. Par sa proximité au noyau villageois et du tissu urbain résidentiel cela permet à la
				fois d’offrir une visibilité aux producteurs et de sensibiliser le public aux nouvelles pratiques innovantes, favoriser les circuits courts (proximité entre les lieux de production,
				distribution et consommation) et transformer ces espaces en milieux de vie mixte.
			</p>
			<Figure src="/media/agroparc/st-constant_axo_agri.jpg" description="" bearing={35}>
				<svelte:fragment slot="markers">
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="a" x={75} y={6} label="A" />
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="b" x={67} y={10} label="B" />
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="c" x={52} y={75} label="C" />
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="d" x={61} y={25} label="D" />
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="e" x={28} y={10} label="E" />
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="f" x={35} y={24} label="F" />
					<FigureMarker fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} key="g" x={29} y={57} label="G" />
				</svelte:fragment>
				<svelte:fragment slot="legend">
					<LegendItem shape="line" fill="none" stroke={colors.agroparc3} strokeWidth={2}>Accès à l'agroparc</LegendItem>
					<LegendItem key="a" label="A" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Forêt nourricière</LegendItem>
					<LegendItem key="b" label="B" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Kiosque</LegendItem>
					<LegendItem key="c" label="C" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Sentier multifonctionnel</LegendItem>
					<LegendItem key="d" label="D" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Noue paysagère</LegendItem>
					<LegendItem key="e" label="E" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Agriculture bio-intensive</LegendItem>
					<LegendItem key="f" label="F" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Haie brise-vent</LegendItem>
					<LegendItem key="g" label="G" fill={colors.agroparc2} fillHighlight={colors.agroparc3}>Boisé tampon</LegendItem>
				</svelte:fragment>
			</Figure>
			<h4>Des activités récréatives</h4>
			<p>
				À la périphérie nord des jardins de production alimentaire, une allée de promenade multifonctionnelle offre un accès public à ce secteur maraîcher et invite à venir s’y balader. Un
				grand soin est porté sur les accès vers ce secteur et les liens avec le noyau villageois. La connexion principale est faite avec la place de l’église par l’aménagement d’en sentier en
				diagonal, en direction du clocher. De plus il y a des accès à l’est pour relier le parc des Citoyens, et à l’ouest avec la rue Saint-Pierre.
			</p>
			<p>
				Cet axe diagonal traverse également une forêt nourricière, qui consolide la présence actuelle d’une friche arbustive, où les visiteurs seraient invités à cueillir les fruits produits
				pour les déguster directement durant leur balade. Cette forêt a la capacité d’être ponctuée d’activités récréatives comme les labyrinthes de maïs, formant des clairières dans la forêt.
				Cette intervention a l’opportunité de devenir un véritable terrain de jeu pour les familles à proximité tout en répondant à des enjeux de développement durable.
			</p>
			<h4>Des activités de conservation</h4>
			<p>
				Au nord des exploitations, le sentier multifonctionnel est doublé d’une bande végétalisée. Celle-ci prend la forme d’une noue paysagère capable de récupérer les eaux de ruissellement.
				Des végétaux d’espèces indigènes adaptés aux milieux humides, capables d’attirer les pollinisateurs, et ce, durant une longue période (printemps, été, automne), y seront favorisés. Ce
				système de captation permettra de filtrer les eaux avant d’être déversés dans le cours d’eau de la rivière Saint-Pierre.
			</p>
			<p>
				Une plantation d’arbres est suggérée au sud pour faire le tampon entre la zone de cultures et l’autoroute. Cela permettra de réduire les nuisances visuelles et l’exposition au vent,
				tout en favorisant une plus grande biodiversité et permettant de connecter <strong>les boisés existants à conserver</strong>.
			</p>
		</Proposition>
		<Proposition label="Site B" title="Le parc des Citoyens" key="b" src="/media/agroparc/3-1-10.jpg">
			<Figure src="/media/agroparc/st-constant_axo_parc_citoyen.jpg" description="" bearing={35}>
				<svelte:fragment slot="markers">
					<FigureMarker x={47} y={14} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="A" key="a" />
					<FigureMarker x={62} y={17} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="B" key="b" />
					<FigureMarker x={74} y={20} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="C" key="c" />
					<FigureMarker x={79} y={10} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="D" key="d" />
					<FigureMarker x={43} y={30} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="E" key="e" />
					<FigureMarker x={54} y={52} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="F" key="f" />
					<FigureMarker x={35} y={64} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="G" key="g" />
				</svelte:fragment>
				<svelte:fragment slot="legend">
					<LegendItem label="A" key="a">Jeux pour enfants conservés</LegendItem>
					<LegendItem label="B" key="b">Château d'eau / Tour d'observation</LegendItem>
					<LegendItem label="C" key="c">Place publique</LegendItem>
					<LegendItem label="D" key="d">Stationnements</LegendItem>
					<LegendItem label="E" key="e">Prairie fleurie</LegendItem>
					<LegendItem label="F" key="f">Potagers</LegendItem>
					<LegendItem label="G" key="g">Terrains sportifs conservés</LegendItem>
				</svelte:fragment>
			</Figure>
			<p>
				Situé dans une zone résidentielle, le parc des Citoyens est un véritable lieu de vie et de loisirs pour les résidents. Principalement axés sur la présence de nombreux terrains sportifs
				et de modules de jeux pour enfants, les usages actuels y sont cependant très peu diversifiés. Cette situation est sur le point de changer, car le parc des Citoyens est ciblé pour
				devenir un nouveau pôle de développement récréotouristique par la transformation du château d’eau en tour d’observation. Cette nouvelle vocation offre une occasion de bonifier
				l’aménagement du parc afin d’y créer un point d’accueil pour l’agroparc de Saint-Constant ainsi que d’y diversifier la programmation.
			</p>
			<p>À cette fin, la proposition d’aménagement cherche à améliorer la convivialité de ces lieux, le projet propose d’aménager&nbsp;:</p>
			<h4>Des activités récréatives</h4>
			<p>
				Pour accompagner la transformation du château d’eau, une place publique minérale est proposée, composée d’un bassin sinueux pour rappeler la présence de l’eau, de mobilier urbain,
				d’arbres et d’une aire de stationnement écologique. La place du château d’eau pourrait alors aussi bien profiter aux habitants du quartier qu'aux visiteurs curieux de découvrir le
				terroir de Saint-Constant.
			</p>
			<h4>Des activités de conservation</h4>
			<p>
				La plantation d’arbres et d’une prairie fleurie donnera un aspect de campagne champêtre au parc. La prairie fleurie permet de renouveler la gestion des grandes aires gazonnées
				actuelles. Des semis différents apporteraient une qualité esthétique à cet ensemble en période de floraison et favorisera la biodiversité.
			</p>
			<h4>Des activités de production agricole</h4>
			<p>
				Pour rappeler l’identité agricole de la ville et valoriser l’aspect pédagogique et de partage, une série de potagers collectifs sont également proposés au sein du parc des Citoyens.
				Accessibles à tous, proches d’habitations, ils permettent d’impliquer les citoyens dans la valorisation de leurs espaces publics. Les potagers de tailles variés ont la capacité
				d’accueillir une diversité de cultures aussi bien ornementales que comestibles.
			</p>
		</Proposition>
		<Proposition label="Site C" title="Le secteur paroissial" key="c" src="/media/agroparc/3-1-12.jpg">
			<Figure src="/media/agroparc/st-constant_axo_eglise.jpg" description="" bearing={35}>
				<svelte:fragment slot="markers">
					<FigureMarker x={59} y={10} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="A" key="a" />
					<FigureMarker x={50} y={34} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="B" key="b" />
					<FigureMarker x={63} y={29} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="C" key="c" />
					<FigureMarker x={73} y={62} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="D" key="d" />
					<FigureMarker x={18} y={46} fill={colors.agroparc2} fillHighlight={colors.agroparc3} color={colors.light1} label="E" key="e" />
				</svelte:fragment>
				<svelte:fragment slot="legend">
					<LegendItem label="A" key="a">Place pavée polyvalente</LegendItem>
					<LegendItem label="B" key="b">Contre-allée</LegendItem>
					<LegendItem label="C" key="c">Végétalisation autour de l'église</LegendItem>
					<LegendItem label="D" key="d">Accueil de l'agroparc</LegendItem>
					<LegendItem label="E" key="e">Sentier piéton <span style="opacity: .5">(lien entre la rue Saint-Pierre et l'agroparc)</span></LegendItem>
				</svelte:fragment>
			</Figure>
			<p>
				L’église de Saint-Constant et l’ensemble paroissial qui l’entoure constituent le cœur du noyau villageois de Saint-Constant. L’église est néanmoins entourée à l’heure actuelle d’un
				très grand nombre de places de stationnement afin de desservir les citoyens lors d’événements ponctuels, qu’ils soient religieux ou culturels.
			</p>
			<p>Afin d’accompagner la création de l’agroparc de Saint-Constant, il est proposé de réaménager ce secteur avec&nbsp;:</p>
			<h4>Des activités commerciales</h4>
			<p>
				Les aires de stationnement, aux pourtours de l’église, peuvent se transformer en espace multifonctionnel. Le projet propose d’aménager une place pavée polyvalente du côté nord de
				l’église. Composée d’arbres et d’un kiosque, elle est capable de conserver sa fonction d’aire de stationnement ou encore d'être convertie en place de marché (pour vendre les récoltes
				maraîchères produites localement) ou en espace événementiel selon les besoins.
			</p>
			<p>
				Le long de la montée Lasaline, une allée pavée est aménagée pour maintenir un petit nombre de places de stationnement pour les jours d’événement. De plus, un partenariat pourrait être
				réalisé avec la MRC de Roussillon afin de permettre l’utilisation des cases situées sur sa propriété de la rue Saint-Pierre lors d’événements. Ceux-ci se déroulant principalement les
				soirs et les jours de fin de semaine, il y aurait ainsi peu de conflits avec l’utilisation de l’aire de stationnement par les employés de la MRC.
			</p>
			<p>
				L’édifice sur montée Lasaline, actuellement occupé par une imprimerie qui accueillait auparavant le Club des 20 a la capacité d’être reconverti en espace d’accueil pour l’agroparc de
				Saint-Constant. Parfaitement localisé à proximité de la zone agricole et de la Route Verte, le bâtiment pourrait accueillir une aire de restauration et de renseignements pour les
				visiteurs.
			</p>
			<h4>Des activités de conservation</h4>
			<p>
				Au sud de l’église, le long de la montée Lasaline, le concept d’aménagement proposé met en valeur la végétation existante située sur le parvis de l’église, en la prolongeant tout
				autour. Des sentiers sont aménagés et permettent de relier l’église au cimetière et au site des travaux publics qui pourrait être reconverti en milieu résidentiel.
			</p>
			<p>
				De plus, les aménagements proposés visent à mettre en valeur et entretenir la végétation des berges de la rivière Saint-Pierre. Une attention particulière serait apportée au choix de
				végétaux indigènes.
			</p>
		</Proposition>
	</Propositions>
</Exercice>
