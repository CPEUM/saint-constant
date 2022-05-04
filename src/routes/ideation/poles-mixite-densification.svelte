<script>
	import Bodies from '$components/bodies/Bodies.svelte';
	import BodiesItem from '$components/bodies/BodiesItem.svelte';
	import Concept from '$components/exercice/Concept.svelte';
	import Exercice from '$components/exercice/Exercice.svelte';
	import Interest from '$components/exercice/Interest.svelte';
	import Preferences from '$components/exercice/Preferences.svelte';
	import Proposition from '$components/exercice/Proposition.svelte';
	import Propositions from '$components/exercice/Propositions.svelte';
	import FigureMap from '$components/figure/FigureMap.svelte';
	import FigureMarker from '$components/figure/FigureMarker.svelte';
	import Legend from '$components/legend/Legend.svelte';
	import LegendItem from '$components/legend/LegendItem.svelte';
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
	import Table from '$components/table/Table.svelte';
	import TableCell from '$components/table/TableCell.svelte';
	import { getData } from '$utils/getData';
	import colors from '$styles/colors.json';
	import PieChart from '$components/chart/PieChart.svelte';
	import MapImage from '$components/map/MapImage.svelte';
	import { base } from '$app/paths';

	const identifiedSectors = getData('/data/geo/poles/identified-sectors.geojson');
	const preferencesData = getData('/data/charts/poles/preferences.json');
</script>

<Exercice key="poles">
	<Concept heading="Le concept de pôles de mixité et de densification">
		<p>Le concept de densité urbaine en aménagement est complexe, il fait généralement référence à des données <strong>quantitatives</strong>&nbsp;:</p>
		<List>
			<ListItem><strong>Densité de population</strong> (ex.&nbsp;: nombre de personne au km<sup>2</sup>);</ListItem>
			<ListItem><strong>Densité de construction</strong> (ex.&nbsp;: nombre de logements/hectare).</ListItem>
		</List>
		<p>
			Il est à noter que lorsqu’on parle de haute densité cela n’est pas synonyme d’immeuble de grande hauteur. Il est possible de construire des quartiers à haute densité, mais de faible
			hauteur.
		</p>
		<p>Le concept de densité fait aussi référence à des appréciations <strong>qualitatives</strong>, il est alors nécessaire de se pencher sur&nbsp;:</p>
		<List>
			<ListItem>Ses <strong>relations avec les qualités formelles</strong> générées à l’échelle du paysage&nbsp;urbain;</ListItem>
			<ListItem>Les <strong>perceptions sociales</strong> qu’elle suscite.</ListItem>
		</List>
		<p>Ainsi, plusieurs éléments de composition de l’environnement bâti peuvent faire varier la perception de l’observateur envers la densité urbaine&nbsp;:</p>
		<Bodies>
			<BodiesItem>La composition volumétrique des bâtiments</BodiesItem>
			<BodiesItem>L’implantation du bâtiment et son rapport à la rue</BodiesItem>
			<BodiesItem>La mixité des usages avec l’implantations de commerces en rez-de-chaussée</BodiesItem>
			<BodiesItem>La présence d’espaces publics</BodiesItem>
		</Bodies>
	</Concept>
	<Interest heading="L’intérêt de nouveaux pôles de mixité et de densification à Saint-Constant">
		<p>
			Saint-Constant est une ville au caractère familial, visible, entre autres, par la prédominance des habitations unifamiliales pavillonnaires. Cependant les études préalables révèlent&nbsp;:
		</p>
		<List>
			<ListItem>La présence d’une diversification de la composition démographique qu’il faut prendre en compte dans les aménagements futurs</ListItem>
			<ListItem>Un besoin de développer une diversité fonctionnelle du territoire pour favoriser une plus grande autonomie du milieu</ListItem>
			<ListItem
				>La présence de trois aires T.O.D. (<i>Transit Oriented Developement</i>) soumises à̀ des paramètres de densification selon la réglementation du Plan métropolitain d’aménagement et de
				développement</ListItem
			>
			<ListItem
				>Une pression à la densification qui s’exerce dans ce contexte autant en milieu construit (ex.&nbsp;: sur la rue Saint-Pierre), que dans les zones de requalification (ex.&nbsp;: la
				Route 132) ou dans les milieux à bâtir (ex.&nbsp;: La gare Sainte-Catherine)</ListItem
			>
		</List>
		<p><strong>Dans un tel contexte, il est donc primordial de penser des modèles de densification qui s’insèrent harmonieusement dans le paysage urbain de Saint-Constant.</strong></p>
	</Interest>
	<Preferences>
		<p class="bg" style="--bgtop: -1000px; padding-bottom: 40px;">Issus de la démarche de caractérisation des paysages, les neuf secteurs de densification identifiés sont&nbsp;:</p>
		<FigureMap
			bounds={[
				[-73.6168, 45.3994],
				[-73.5395, 45.3546]
			]}
		>
			{#await identifiedSectors then geojson}
				{#each geojson.features as feature}
					<FigureMarker
						zoom={14}
						key={feature.properties.label + '-secteur'}
						lnglat={feature.geometry.coordinates}
						label={feature.properties.label}
						fill={colors.poles2}
						fillHighlight={colors.poles3}
						color={colors.light1}
					/>
				{/each}
				<Legend>
					{#each geojson.features as feature}
						<LegendItem key={feature.properties.label + '-secteur'} label={feature.properties.label} fill={colors.poles2} fillHighlight={colors.poles3} color={colors.light1}
							>{feature.properties.title}</LegendItem
						>
					{/each}
				</Legend>
			{/await}
		</FigureMap>
		<p class="bg" style="--bgbottom: -800px; padding-top: 40px;">
			Afin d’identifier les préoccupations et aspirations des participants présent au rendez-vous citoyen envers la densité urbaine, deux types de paramètres ont été ciblés&nbsp;:
		</p>
		<List>
			<ListItem>La composition architecturale et urbaine des bâtiments;</ListItem>
			<ListItem>La localisation des projets (selon les neuf secteurs de densification identifiés).</ListItem>
		</List>
		<p>
			Pour ce faire, six exemples de projets de densification, représentant une variété de typologies de bâtiments, ont été exposés aux participants. Ils se différenciaient par les
			caractéristiques suivantes&nbsp;:
		</p>
		<List>
			<ListItem>La hauteur du bâtiment en étages;</ListItem>
			<ListItem>La composition volumétrique;</ListItem>
			<ListItem>La présence de commerces en rez-de-chaussée;</ListItem>
			<ListItem>La dimension de la cour avant et le rapport à la rue;</ListItem>
			<ListItem>La présence d’arbres en cours avant.</ListItem>
		</List>
		<h4>Exemples de projets de densification</h4>
		<!-- figures des exemples -->
		<h4 style="--bgtop: -800px; padding-bottom: 20px;">Résultats des préférences énoncées par les participants du rendez-vous citoyen</h4>
		<FigureMap
			bounds={[
				[-73.6168, 45.3994],
				[-73.5395, 45.3546]
			]}
		>
			{#await preferencesData then res}
				{#each res.charts as chart}
					<PieChart data={chart.data} lnglat={chart.coordinates} columns={res.groups} mapKey={chart.id} />
				{/each}
			{/await}
		</FigureMap>
		<List>
			<ListItem>Les immeubles de plus grandes hauteurs (ex.: A et B) présentent un faible intérêt, n’appartenant pas à l’identité de Saint-Constant selon les participants</ListItem>
			<ListItem
				>Les immeubles de moyenne densité (ex.: C et D) présentent un certain intérêt. L’exemple C est préféré dans les secteurs en transformation (montée Saint-Régis, rue Bélanger et la rue
				Marois). L’exemple D est privilégié en bordure de la rue Saint-Régis et à l’intersection du chemin Sainte-Catherine et du boulevard Montchamp</ListItem
			>
			<ListItem
				>Les immeubles de plus faible densité (ex.: E et F) sont fortement appréciés. L’exemple E séduit pour son apparence abordable, il est préféré pour les sites de la gare Saint-Constant,
				la montée Saint-Régis et le site de la Chandellerie. L’exemple F est affectionné pour son caractère moderne, il est proposé pour la montée de Lasaline, la rue Saint-Pierre et le chemin
				Sainte-Catherine.</ListItem
			>
		</List>
		<p class="bg" style="--bgbottom: -800px; padding-top: 40px;">
			La hauteur des bâtiments demeure un élément d’appréciation négatif des projets de densification. Aussi, la présence de la végétation ainsi que de l’activité commerciale contribuent à
			apaiser la perception négative des projets. Nonobstant ces commentaires généraux, il est à noter que certaines tables de discussion ont été en défaveur de tous les exemples présentés.
		</p>
	</Preferences>
	<Propositions>
		<p>
			À la suite des analyses précédemment présentées, un plan stratégique de densification pour les secteurs urbains identifiés a été établi. Chacun des secteurs sont à vocation mixte pour
			permettre de développer une vie de quartier singulière tout en respectant le caractère paysager déjà présent.
		</p>
		<FigureMap
			bounds={[
				[-73.6168, 45.4024],
				[-73.5449, 45.3537]
			]}
			pitch={0}
		>
			<MapImage
				id="poles-sommaire"
				url={base + '/media/poles/poles-carte-sommaire.png'}
				coordinates={[
					[-73.6123, 45.4],
					[-73.5494, 45.4],
					[-73.5494, 45.3561],
					[-73.6123, 45.3561]
				]}
			/>
			<Legend>
				<LegendItem color={colors.light1} shape="square" fill="#8a9fb5">Sites potentiels à densifier</LegendItem>
				<LegendItem color={colors.light1} shape="square" fill="#b6d4d9">Faible densité</LegendItem>
				<LegendItem color={colors.light1} shape="square" fill="#6e8ba1">Moyenne densité</LegendItem>
				<LegendItem color={colors.light1} shape="square" fill="#394a5b">Haute densité</LegendItem>
				<LegendItem color={colors.light1} shape="circle" symbolScale={0.5} fill="#cf9a83">Places ajoutées</LegendItem>
				<LegendItem color={colors.light1} fill="none" shape="line" stroke="#cf9a83" strokeWidth={1}>Chemins piétons publics ajoutés</LegendItem>
				<LegendItem color={colors.light1} fill="none" shape="line" stroke="#9c1a36" strokeWidth={2}>Voie commerciale de desserte locale</LegendItem>
				<LegendItem color={colors.light1} fill="none" shape="line" stroke="#73adad" strokeWidth={4}>Voie de type promenade</LegendItem>
				<LegendItem color={colors.light1} fill="none" shape="line" stroke="#73adad" strokeWidth={2}>Voies principales locales</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5674, 45.3655]} label="A">Noyau villageois (Chandellerie)</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5799, 45.3683]} label="B">Montée Saint-Régis</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5995, 45.3752]} label="C">Rue Sainte-Catherine / Montée Saint-Régis</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5996, 45.3824]} label="D">Gare Sainte-Catherine</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.586, 45.3852]} label="E">Rue Sainte-Catherine / Meunier</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5744, 45.3884]} label="F">La route 132</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5588, 45.3823]} label="G">La rue Saint-Pierre</LegendItem>
				<LegendItem color={colors.light1} fill="#c9dfe3" zoom={15} lnglat={[-73.5698, 45.376]} label="H">Gare Saint-Constant</LegendItem>
			</Legend>
		</FigureMap>
		<Proposition label="Secteur A" title="Le site de la chandellerie" key="a">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Site patrimonial;</li>
						<li>Proximité de la rivière Saint-Pierre</li>
						<li>Proximité de l'église</li>
						<li>Possibilités d'aménagements de places publiques</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Manque d’aménagements publics extérieurs afin de privilégier des aménagements propices pour les piétons;</li>
						<li>Manque de terrasses et d'animation au niveau de la rue;</li>
						<li>Manque de percées visuelles vers la rivière Saint-Pierre et de valorisation du milieu naturel;</li>
						<li>Manque de commerces dans un noyau villageois.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong></TableCell>
				<TableCell align="center">Rue Saint-Pierre et Montée Saint-Régis</TableCell>
				<TableCell align="center">1 à 2 étages ou<br />5 à 8 mètres</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets immobiliers à basse densité</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Construire un ensemble poreux grâce à la disposition des bâtiments de logements perpendiculaires à la rue. Cela permet de créer des liens piétons et visuels vers la rivière
					Saint-Pierre et de mettre en valeur ce milieu naturel. De plus, cela réduit l’impact de façades linéaires sur la rue, au risque d’être trop monumentales, ce qui engendrerait une
					rupture avec le contexte;</ListItem
				>
				<ListItem
					>Accorder les bâtiments avec le cadre existant. Ils font référence aux constructions localisées dans le milieu agricole (toits à versants, matériau bois favorisé). Pour atténuer
					l’effet de hauteur, des terrasses sont proposées en toiture permettant un recul de la façade;</ListItem
				>
				<ListItem
					>Aménager une place publique et des commerces de proximités en rez-de-chaussée des bâtiments qui donne sur celle-ci. Ces services apporteront de l’animation au site et favoriseront
					le développement d’une vie de quartier.</ListItem
				>
			</List>
		</Proposition>
		<Proposition label="Secteur B" title="La montée Saint-Régis" key="b">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Pôle sportif et familial;</li>
						<li>Quartier à dominance résidentiel;</li>
						<li>École;</li>
						<li>Terrain de jeux à proximité de l’école.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Manque de commerces de proximité;</li>
						<li>Importance visuelle du stationnement d'autobus;</li>
						<li>Manque de trottoirs et de pistes cyclables.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong>, <strong>C</strong></TableCell>
				<TableCell align="center">Montée Saint-Régis</TableCell>
				<TableCell align="center">1 à 4 étages ou<br />5 à 16 mètres</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets moyenne densité (similaire à l'existant)</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Intégrer des axes piétons végétalisés, sécuritaires afin de relier l’école, les commerces, les résidences et le terrain de jeux présents. Ces axes piétons desserviraient les
					entrées des bâtiments familiaux projetés. Les façades côté rue accueilleraient les commerces de proximité;</ListItem
				>
				<ListItem>Implanter des bâtiments de logements reprenant les principes typologiques et de gabarits développés dans le secteur A;</ListItem>
				<ListItem>Aménager des aires de stationnement subdivisées en plusieurs lots réparties sur le site afin de réduire leur perception sur le plan visuel.</ListItem>
			</List>
		</Proposition>
		<Proposition label="Secteur C" title="L’intersection de la rue Sainte-Catherine et de la montée Saint-Régis" key="c">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Nouveau développement;</li>
						<li>Base de plein air (pôle récréatif);</li>
						<li>Possibilité de liens avec le parc agricole.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Manque d’aménagements publics extérieurs afin de privilégier des aménagements propices pour les piétons;</li>
						<li>Manque de commerces de proximité;</li>
						<li>Manque de trottoirs et de pistes cyclables;</li>
						<li>Secteur dépendant à l’automobile.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong></TableCell>
				<TableCell align="center">À l’intersection de la rue Sainte-Catherine et la montée Saint-Régis</TableCell>
				<TableCell align="center">N/D</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets immobiliers à moyenne densité</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Greffer des serres aux façades des bâtiments résidentiels. Ce langage formel et fonctionnel, contribue à unifier l’environnement urbain au milieu agricole. Les serres
					individuelles permettent d’agrandir le logement en offrant un balcon quatre saisons. Des serres collectives sont aussi proposées pour servir d’aires communes à un même immeuble.
					Finalement, des serres commerciales peuvent également s’implanter en toiture pour profiter de la chaleur des logements et pratiquer l’agriculture urbaine;</ListItem
				>
				<ListItem
					>Implanter des commerces et des espaces publics en rez-de-chaussée des bâtiments sur le chemin Sainte-Catherine et la montée Saint-Régis, pour pallier le manque de commerces de
					proximités dans ce secteur. Cela répondra aux concepts d’aires T.O.D préconisant des aménagements denses et diversifiés;</ListItem
				>
				<ListItem>Faire des connexions piétonnes entre la gare Sainte-Catherine et l’agroparc.</ListItem>
			</List>
		</Proposition>
		<Proposition label="Secteur D" title="Le site entre la gare Sainte-Catherine et le lac des fées" key="d">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Présence du lac des Fées;</li>
						<li>Nouveau développement;</li>
						<li>Base de plein air (pôle récréatif);</li>
						<li>Grande zone de conservation;</li>
						<li>Liens avec la rivière Saint-Régis.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Projets à développer;</li>
						<li>Manque de commerces de proximité;</li>
						<li>Corridor de bruits et de vibrations;.</li>
						<li>Enjeu de sécurité près des voies ferroviaires;</li>
						<li>Grandes aires de stationnement non aménagées et végétalisées.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong></TableCell>
				<TableCell align="center">Proximité de la gare Sainte-Catherine et du Lac des Fées</TableCell>
				<TableCell align="center">N/D</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets immobiliers à moyenne densité</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Implanter des services de proximité au rez-de-chaussée des bâtiments face au chemin Sainte-Catherine. L’aménagement d’une place publique permet l’installation de terrasses selon
					la nature des commerces qui s’y implantent. Cette place est reliée à un réseau piéton qui mène à la gare Saint-Catherine;</ListItem
				>
				<ListItem
					>Préserver et mettre en valeur les milieux naturels par l’aménagement de connexions visuelles et physiques entre le lac des Fées et l’axe des voies ferrées. De plus, l’aménagement
					de la majorité des places de stationnements seraient en souterrain;</ListItem
				>
				<ListItem>Conserver un recul important vis-à-vis de l’emprise ferroviaire avec les bâtiments de logements pour éviter les nuisances engendrées (bruits, vibrations etc.).</ListItem>
			</List>
		</Proposition>
		<Proposition label="Secteur E" title="La rue Sainte-Catherine à l’intersection de la rue Meunier" key="e">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Quartier à dominance résidentiel;</li>
						<li>Services essentiels le long de l’axe routier à distance de marche des habitations.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Manque de commerces de proximité;</li>
						<li>Cadre bâti commercial à améliorer;</li>
						<li>Possibilité de densification;</li>
						<li>Grandes aires de stationnement à l’avant.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong></TableCell>
				<TableCell align="center">Rue Sainte-Catherine / Meunier</TableCell>
				<TableCell align="center">1 à 2 étages ou<br />5 à 10 mètres</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets immobiliers de basse à moyenne densité</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Favoriser l’interaction directe des locaux commerciaux avec l’espace public. La reconstruction des bâtiments commerciaux en front de rue, le déplacement des stationnements en
					arrière-cours, l’ajout de placettes publiques et l’aménagement du trottoir bordé d’arbres, permettraient cette interaction et plus de convivialité;</ListItem
				>
				<ListItem>Ajouter des unités de logements au-dessus des commerces.</ListItem>
			</List>
		</Proposition>
		<Proposition label="Secteur F" title="Requalification de la 132" key="f">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Pôle commercial;</li>
						<li>Plusieurs services essentiels, services de santé et bureaux de professionnels;</li>
						<li>Mixité entre le résidentiel et le commercial.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Nécessité d’une requalification de la voie routière afin de privilégier des aménagements propices pour les piétons;</li>
						<li>Manque d'installations à une échelle humaine;</li>
						<li>Manque de terrasses et d’animation au niveau de la rue.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<p>
				Le projet vise à illustrer le potentiel de densification tout en examinant les potentiels de mise en valeur des parcours d’entrées de ville tirant profit de l’identité de
				Saint-Constant.
			</p>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong>, <strong>C</strong></TableCell>
				<TableCell align="center">Ajout d'un boulevard au sud, parallèle à la 132</TableCell>
				<TableCell align="center">Variable</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets immobiliers de moyenne à haute densité</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Créer un axe commercial poreux et convivial parallèle à la route 132. Le projet suggère d’aménager une rue de desserte locale, parallèle à l’artère pour favoriser un environnement
					à échelle humaine privilégiant la circulation douce. Cette rue serait encadrée de commerces aux rez-de-chaussée des bâtiments et composée de terrasses et d’installations publiques.
					Finalement, l’axe se connecterait au nouveau pôle récréatif régional (complexe aquatique, aréna) et offrirait un axe de mobilité active vert et convivial;</ListItem
				>
				<ListItem
					>Adapter la hauteur des bâtiments de logements en fonction du contexte actuel. Ainsi, du côté sud du boulevard, secteur moins dense, des bâtiments de faible hauteur seront
					favorisés. Tandis que du côté nord des bâtiments de plus grande hauteur sont suggérés. Pour éviter un linéaire de façade trop important, qui donnerait l’effet d’un mur et d’une
					ville très dense, il est proposé de maintenir des espaces verts transversaux à la route 132. Il est conseillé de favoriser des bâtiments de faibles hauteurs à leurs pourtours pour
					diminuer les ombres portées.</ListItem
				>
			</List>
		</Proposition>
		<Proposition label="Secteur G" title="la rue Saint-Pierre" key="g">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Pôle commercial;</li>
						<li>Plusieurs services essentiels, services de santé et bureaux de professionnels;</li>
						<li>Mixité entre le résidentiel et le commercial.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Manque d’aménagements publics extérieurs;</li>
						<li>Nécessité d’une requalification de la voie routière afin de privilégier des aménagements propices pour les piétons;</li>
						<li>Manque de terrasses et d’animation au niveau de la rue.</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<p>
				Le projet vise à illustrer le potentiel de densification tout en examinant les potentiels de mise en valeur des parcours d’entrées de ville tirant profit de l’identité de
				Saint-Constant.
			</p>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong>, <strong>C</strong></TableCell>
				<TableCell align="center">Le long de la rue Saint-Pierre sur un axe commercial et résidentiel</TableCell>
				<TableCell align="center">1 à 4 étages ou<br />5 à 16 mètres</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets immobiliers de basse à moyenne densité</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Réduire les contrastes d’échelle et de hauteur visibles entre les nouvelles et les anciennes constructions. À cet effet, il est proposé d’insérer les bâtiments perpendiculairement
					pour orienter les plus petites façades vers la rue Saint-Pierre. Des retraits des derniers étages sont recommandés pour atténuer la sensation de hauteur et donc de densité;</ListItem
				>
				<ListItem>Insérer aux bâtiments des commerces aux rez-de-chaussée pour faire des milieux mixtes et fonctionnels;</ListItem>
				<ListItem
					>Apporter une grande attention au verdissement de la rue Saint-Pierre, actuellement très minérale. Les surfaces végétales des lots privés doivent être maintenues, l’aménagement
					d’une portion d’aires de stationnements souterraines est suggéré. Les aires en surfaces devraient être maintenues à l’arrière des lots pour permettre un verdissement des façades
					avant;</ListItem
				>
				<ListItem>Aménager la rue pour favoriser la marche comme des allées d’arbres, du mobilier urbain etc.</ListItem>
			</List>
		</Proposition>
		<Proposition label="Secteur H" title="Le site de la gare Saint-Constant" key="h">
			<h4>Contexte, forces et faiblesses</h4>
			<Table cols="3" style="max-width: var(--width-md)">
				<TableCell type="spacer" />
				<TableCell type="heading" align="center">Forces</TableCell>
				<TableCell type="heading" align="center">Faiblesses</TableCell>
				<TableCell type="heading" orientation="vertical">Noyau villageois</TableCell>
				<TableCell>
					<ul>
						<li>Pôle commercial et ferroviaire;</li>
						<li>Plusieurs services essentiels, services de santé et bureaux de professionnels;</li>
						<li>Présence de la rivière Saint-Pierre;</li>
						<li>Entrée de ville.</li>
					</ul>
				</TableCell>
				<TableCell>
					<ul>
						<li>Manque d’aménagements publics extérieurs et le besoin de privilégier des aménagements propices pour les piétons;</li>
						<li>Corridor de bruits et de vibrations;</li>
						<li>Enjeu de sécurité près des voies ferroviaires;</li>
						<li>Importance visuelle du stationnement incitatif et possibles îlots de chaleur (surfaces asphaltées sans végétation).</li>
					</ul>
				</TableCell>
			</Table>
			<h4>Informations relatives au site projeté</h4>
			<p>
				Le projet vise à illustrer le potentiel de densification tout en examinant les potentiels de mise en valeur des parcours d’entrées de ville tirant profit de l’identité de
				Saint-Constant.
			</p>
			<Table cols="5" style="max-width: var(--width-md)">
				<TableCell type="heading" align="center">Exemples</TableCell>
				<TableCell type="heading" align="center">Implantation</TableCell>
				<TableCell type="heading" align="center">Hauteur des bâtiments adjacents</TableCell>
				<TableCell type="heading" align="center">Programme recommandé</TableCell>
				<TableCell type="heading" align="center">Densité recommandée</TableCell>
				<TableCell align="center"><strong>A</strong>, <strong>B</strong>, <strong>C</strong></TableCell>
				<TableCell align="center">Le long de la rue Saint-Pierre et d'un axe ferroviaire</TableCell>
				<TableCell align="center">1 à 2 étages ou<br />5 à 10 mètres</TableCell>
				<TableCell align="center">Commercial et résidentiel</TableCell>
				<TableCell align="center">Projets de moyenne à haute densité avec ajout de stationnement</TableCell>
			</Table>
			<h4>Ce que le projet propose</h4>
			<List>
				<ListItem
					>Implanter une végétalisation massive des aires de stationnements afin d’améliorer la qualité de l’environnement en termes d’usages et de bilan écologique. La proposition
					d’aménagement suggère l’ajout de bandes de plantations et des noues paysagères pour récolter les eaux de ruissellement pluviales entre les rangs de stationnements. L’ajout d’arbres
					permettrait de générer de l’ombre, contribuant à réduire les effets d’îlots de chaleur. Des stratégies semblent également envisageables pour réduire le nombre de stationnements
					condensés dans un même vaste espace. Par exemple, des stationnements incitatifs pourraient être aménagés pour le soir et les fins de semaines;</ListItem
				>
				<ListItem
					>Insérer des chemins piétons le long des commerces et entre les rangs de stationnements le long des bandes de plantations, reliés à la rue Saint-Pierre et la gare de
					Saint-Constant. Cette stratégie permettrait d’apporter une plus grande convivialité à ce site;</ListItem
				>
				<ListItem
					>Ajouter un bâtiment aux fonctions mixtes avec des commerces en rez-de-chaussée (ex. : aires de “coworking”, cafés, atelier de vélo etc.) le long de la rue Pacifique. Son
					emplacement permettrait de séparer le milieu résidentiel des stationnements incitatifs.</ListItem
				>
			</List>
		</Proposition>
	</Propositions>
</Exercice>
