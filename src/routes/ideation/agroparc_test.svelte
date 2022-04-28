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
	import Loading from '$components/Loading.svelte';
	import { GeoJSONFeature } from 'maplibre-gl';
	import colors from '$styles/colors.json';
	import bbox from '@turf/bbox';
	import MapFeature from '$components/map/MapFeature.svelte';
	import Section from '$components/exercice/Section.svelte';
	import SectionSlide from '$components/exercice/SectionSlide.svelte';

	const sousSecteurs = getData('/data/geo/agroparc/sous-secteurs.geojson');
	const echelleMunicipale = getData('/data/geo/agroparc/echelle-municipale.geojson');
</script>

<Exercice key="agroparc">
	<Section>
		<SectionSlide>
			<h2 use:revealText={revealFlyUp}>Le concept d'agroparc</h2>
			<p>
				Le concept d'agroparc est né dans une perspective de reconnaissance des valeurs
				environnementales et récréatives du territoire agricole de Saint-Constant.
			</p>
			<p>L’agroparc vise à&nbsp;:</p>
			<Bodies>
				<BodiesItem>Allier agriculture et environnement</BodiesItem>
				<BodiesItem>Améliorer les interrelations ville/campagne</BodiesItem>
				<BodiesItem>Promouvoir la relève agricole et les nouvelles pratiques</BodiesItem>
				<BodiesItem
					>Assurer un équilibre économique, social et environnemental dans le
					développement du territoire</BodiesItem
				>
			</Bodies>
		</SectionSlide>
		<SectionSlide>
			<Excerpt name="Agroparc1">Quelques références supplémentaires d'agroparcs</Excerpt>
			<p>
				Les exemples d’agroparc en Europe montrent que les parcs agricoles peuvent être
				initiés à partir&nbsp;:
			</p>
			<Bodies>
				<BodiesItem
					>De la délimitation d’un espace agricole à titre de parc, sans intervention
					d’aménagement supplémentaire</BodiesItem
				>
				<BodiesItem
					>Du réaménagement d’un espace agricole afin d’en faire un parc</BodiesItem
				>
				<BodiesItem
					>De l’aménagement d’un parc public dans lequel certaines aires ont une vocation
					agricole</BodiesItem
				>
				<BodiesItem
					>De l’aménagement d’un parc public géré à partir de techniques tirées de
					l’agriculture</BodiesItem
				>
			</Bodies>
		</SectionSlide>
	</Section>

	<p>
		Sur le plan programmatique, les exemples initiés en Europe montrent que les parcs agricoles
		se regroupent en cinq principales catégories&nbsp;:
	</p>
	<List>
		<ListItem
			><strong>Activités de production agricole</strong> (cultures maraîchères, productions animales,
			vergers, potagers collectifs, etc.)</ListItem
		>
		<ListItem
			><strong>Activités de conservation</strong> (préservation des zones boisées, des milieux
			humides et de la biodiversité, etc.)</ListItem
		>
		<ListItem
			><strong>Activités récréatives</strong> (sentiers, aires de détentes, terrains sportifs,
			aires de rassemblements, etc.)</ListItem
		>
		<ListItem
			><strong>Activités commerciales</strong> (autocueillette, vente de produits agricoles locaux,
			restauration ou transformation alimentaire, marché public, etc.)</ListItem
		>
		<ListItem
			><strong>Activités éducatives</strong> (accueil de groupes scolaires, sentiers d’interprétation,
			etc.)</ListItem
		>
	</List>
</Exercice>
