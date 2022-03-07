<script lang="ts">
	import type { ExerciceRoute } from '$utils/routes';
	import { exerciceRoutes } from '$utils/routes';
	import Table from '$components/table/Table.svelte';
	import TableCell from '$components/table/TableCell.svelte';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { fly, slide } from 'svelte/transition';
	import { getAccentColors } from '$utils/exerciceColors';

	let orientationIndex = 0;

	const template = ['', ]

	let direction: 'next' | 'prev' = 'next';
	function setDirectionValue(distance: number, transition: 'in' | 'out') {
		return direction === 'next' ? transition === 'in' ? distance : -1 * distance
				: transition === 'in' ? -1 * distance : distance;
	}

	const duration = 250;

	function next() {
		direction = 'next';
		orientationIndex = orientationIndex < exerciceRoutes.length -1 ? orientationIndex + 1 : 0;
	}

	function prev() {
		direction = 'prev';
		orientationIndex = orientationIndex > 0 ? orientationIndex - 1 : exerciceRoutes.length - 1;
	}
</script>

<section>
	<div class="text-wrap">
		<h3 use:revealText={revealFlyUp}>Synthèse par orientation</h3>
	</div>
	<div style="position: relative;">
		{#if orientationIndex === 0}
			<div
				in:fly={{x: setDirectionValue(500, 'in'), duration, delay: duration}}
				out:fly={{x: setDirectionValue(500, 'out'), duration}}
				class="orientation"
				style={getAccentColors('agroparc')}
			>
				<h4>Orientation 1</h4>
				<p>Revitaliser le noyau villageois par le développement d’un pôle d’interconnexion entre le milieu urbain et rural.</p>
				<h4>Projet phare&nbsp;: {exerciceRoutes[0].heading}</h4>
				<Table cols="5" colsWidth={{2: '150px'}}>
					<TableCell type="spacer" colspan="2" rowspan="2" />
					<TableCell type="heading" colspan="3">Principes spécifiques d'aménagement</TableCell>
					<TableCell type="subheading">Bonifier les dimensions récréatives et agrotouristiques de la zone agricole.</TableCell>
					<TableCell type="subheading">Développer l’identité agricole du territoire de Saint-Constant.</TableCell>
					<TableCell type="subheading">Établir le noyau villageois comme un pôle d’accueil de l’agroparc.</TableCell>
					<TableCell type="heading" orientation="vertical" align="center" rowspan="4">Valeurs territoriales en émergence</TableCell>
					<TableCell type="heading">Une ville pour tous</TableCell>
					<TableCell>Aménager des espaces cyclables dans la zone agricole (abords des routes ou sur l’ancienne voie ferrée du C.N.).</TableCell>
					<TableCell>Aménager des jardins collectifs ou communautaires à proximité des aires de densité.</TableCell>
					<TableCell>Aménager des places publiques pour la socialisation à l’entrée des parcs et espaces verts du noyau villageois.</TableCell>
					<TableCell type="heading">Une ville de proximité</TableCell>
					<TableCell>Favoriser l’émergence de production maraîchère de proximité afin de bonifier l’offre en produits agricoles locaux.</TableCell>
					<TableCell>Aménager un sentier multifonctionnel en interface des milieux urbains et agricoles.</TableCell>
					<TableCell>Rendre possible l’utilisation temporaires des aires de stationnements du noyau villageois pour des usages événementiels comme un marché public hebdomadaire.</TableCell>
					<TableCell type="heading">Une ville de nature</TableCell>
					<TableCell>Encourager la renaturalisation des bandes riveraines localisées en territoire agricole.</TableCell>
					<TableCell>Favoriser la réalisation d’aménagement en milieu urbain qui encourage la présence des pollinisateurs afin de générer des bénéfices environnementaux entre autres, pour le milieu agricole.</TableCell>
					<TableCell>Consolider le boisé en émergence au sud de la rue Chantal par la plantation d’arbres nourriciers.</TableCell>
					<TableCell type="heading">Une ville ancrée dans son territoire agricole</TableCell>
					<TableCell>Utiliser l’emprise de la ligne de transport d’électricité comme aire d’exploitation d’agriculture urbaine.</TableCell>
					<TableCell>Favoriser la perception de la dimension agricole en entrée de ville, notamment à partir de la route 132, par l’aménagement d’une place rappelant la présence du milieu agricole.</TableCell>
					<TableCell>Convertir les friches agricoles en jardins biointensifs.</TableCell>
				</Table>
			</div>
		{:else if orientationIndex === 1}
			<div
				in:fly={{x: setDirectionValue(500, 'in'), duration, delay: duration}}
				out:fly={{x: setDirectionValue(500, 'out'), duration}}
				class="orientation"
				style={getAccentColors('promenades')}
			>
				<h4>Orientation 2</h4>
				<p>Aménager des parcours de mobilité active afin de faire la promotion de la qualité du cadre de vie et des milieux naturels de Saint-Constant.</p>
				<h4>Projet phare&nbsp;: {exerciceRoutes[1].heading}</h4>
				<Table cols="3" colsWidth={{2: '150px'}}>
					<TableCell type="spacer" colspan="2" rowspan="2" />
					<TableCell type="heading">Principes spécifiques d'aménagement</TableCell>
					<TableCell type="subheading">
						Bonifier l’expérience de déambulation le long des parcours par la thématisation des aménagements paysagers&nbsp;:
						<ul>
							<li>Le corridor des pollinisateurs longe les rues du Maçon et de Lausanne;</li>
							<li>Le corridor nourricier longe la voie ferrée;</li>
							<li>Le corridor découverte traverse une diversité de milieux naturels et agricoles; >> Le corridor riverain suivant un tracé parallèle à la rivière Saint-Pierre.</li>
						</ul>
					</TableCell>
					<TableCell type="heading" orientation="vertical" align="center" rowspan="4">Valeurs territoriales en émergence</TableCell>
					<TableCell type="heading">Une ville pour tous</TableCell>
					<TableCell>
						<ul>
							<li>Assurer la continuité des trottoirs et des pistes cyclables tout au long de ces parcours et tout particulièrement sur la rue Saint-Pierre.</li>
							<li>Distinguer clairement les espaces dédiés aux déplacements actifs de la chaussée véhiculaire par l’utilisation de bollards afin de créer un sentiment accru de sécurité pour les piétons et cyclistes.</li>
							<li>Disposer des bandes végétalisées en bordure des parcours afin de bonifier l’expérience de déambulation.</li>
						</ul>
					</TableCell>
					<TableCell type="heading">Une ville de proximité</TableCell>
					<TableCell>
						<ul>
							<li>Utiliser l’aménagement des parcours afin de relier des attraits et de faciliter l’accès aux infrastructures, commerces et équipements municipaux.</li>
							<li>Ériger un nouveau pont sur la rivière Saint-Régis afin de réduire le temps de marche entre les nouveaux développements de la montée Saint-Régis et la gare Sainte-Catherine.</li>
						</ul>
					</TableCell>
					<TableCell type="heading">Une ville de nature</TableCell>
					<TableCell>
						<ul>
							<li>Lorsque le parcours traverse un parc ou une aire naturelle, distinguer la piste cyclable du sentier pédestre par l’utilisation d’un revêtement perméable sur les sentiers et ainsi minimiser l’empreinte des surfaces imperméables.</li>
							<li>Utiliser des espèces végétales indigènes au caractère de prairie sauvage est un principe important de la qualité de l’aménagement de la bordure végétale pour favoriser la présence des pollinisateurs tout au long du parcours.</li>
						</ul>
					</TableCell>
					<TableCell type="heading">Une ville ancrée dans son territoire agricole</TableCell>
					<TableCell>
						<ul>
							<li>Connecter les promenades citoyennes au futur réseau de la Route verte.</li>
							<li>Privilégier des espèces d’arbres, d’arbustes et d’herbacés comestibles qui produisent des fruits ou des noix afin de créer un corridor nourricier le long de certains parcours de mobilité active.</li>
						</ul>
					</TableCell>
				</Table>
			</div>
		{:else if orientationIndex === 2}
			<div
				in:fly={{x: setDirectionValue(500, 'in'), duration, delay: duration}}
				out:fly={{x: setDirectionValue(500, 'out'), duration}}
				class="orientation"
				style={getAccentColors('poles')}
			>
				<h4>Orientation 3</h4>
				<p>Étudier les perspectives de densification du territoire qui s’intègrent au paysage actuel.</p>
				<h4>Projet phare&nbsp;: {exerciceRoutes[2].heading}</h4>
				<Table cols="4" colsWidth={{2: '150px'}}>
					<TableCell type="spacer" colspan="2" rowspan="2" />
					<TableCell type="heading" colspan="2">Principes spécifiques d'aménagement</TableCell>
					<TableCell type="subheading">Développer une typologie soulignant le caractère identitaire de Saint-Constant.</TableCell>
					<TableCell type="subheading">Ancrer chacune des aires de densification par l’aménagement d’une place publique.</TableCell>
					<TableCell type="heading" orientation="vertical" align="center" rowspan="4">Valeurs territoriales en émergence</TableCell>
					<TableCell type="heading">Une ville pour tous</TableCell>
					<TableCell>
						Diminuer la perception des immeubles en hauteur par les choix de localisation, d’implantation et de volumétrie&nbsp;:
						<ul>
							<li>Les immeubles de plus de trois niveaux sont localisés à proximité de la route 132;</li>
							<li>L’implantation favorise la disposition des petits côtés face aux rues principales;</li>
							<li>La volumétrie présente des reculs à partir du 3e niveau ainsi que des toitures en pente dont les combles sont habités.</li>
						</ul>
					</TableCell>
					<TableCell>Diversifier les équipements et mobiliers présents afin de favoriser une occupation par une diversité d'usagers.</TableCell>
					<TableCell type="heading">Une ville de proximité</TableCell>
					<TableCell>Favoriser la présence de commerces de proximité autour des places publiques et des rues commerciales afin de contribuer à l’attractivité et à l’animation des espaces publics.</TableCell>
					<TableCell>
						<ul>
							<li>Développer les abords de la route 132 par la création d’un axe de desserte commerciale parallèle prenant la forme d’une rue commerciale conviviale et animée.</li>
							<li>Sur l’ensemble des pôles de densité, aménager des sentiers piétons accessibles afin d’assurer la perméabilité des secteurs à développer.</li>
						</ul>
					</TableCell>
					<TableCell type="heading">Une ville de nature</TableCell>
					<TableCell>
						Maintenir les attraits naturels ou végétalisés des milieux à construire&nbsp;:
						<ul>
							<li>Favoriser la construction des stationnements en souterrain ou réduire la superficie des aires de stationnement extérieurs;</li>
							<li>Favoriser la présence de toit-terrasses végétalisés.</li>
						</ul>
					</TableCell>
					<TableCell>
						<ul>
							<li>Arrimer la connexion visuelle et physique des places publiques avec les milieux naturels de la rivière Saint- Pierre.</li>
							<li>Le long de la route 132, aménager une infrastructure verte doublée d’un corridor de mobilité active.</li>
							<li>Maintenir la présence d’espaces verts perpendiculaires à la route 132 afin d’éviter l’érection d’une façade de ville continue sur l’ensemble du futur boulevard urbain.</li>
						</ul>
					</TableCell>
					<TableCell type="heading">Une ville ancrée dans son territoire agricole</TableCell>
					<TableCell colspan="2">Favoriser la création de serres communes ou de jardins trois saisons sur les immeubles résidentiels.</TableCell>
				</Table>
			</div>
		{/if}
		<div class="switch prev" on:click={prev}><button><svg width=100 height=100 viewBox="0 0 100 100"><path d="M0,50 L100,50 M40,0 L0,50 L40,100" vector-effect=non-scaling-stroke/></svg></button></div>
		<div class="switch next" on:click={next}><button><svg width=100 height=100 viewBox="0 0 100 100"><path d="M0,50 L100,50 M60,0 L100,50 L60,100" vector-effect=non-scaling-stroke/></svg></button></div>
	</div>
	
</section>

<style lang="postcss">
	section {
		position: relative;
		width: 100%;
	}

	.switch {
		opacity: .8;
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		top: 0;
		left: calc(50% - 50vw);
		width: 80px;
		height: 100%;
		border-radius: 0 40px 40px 0;
		cursor: pointer;
		padding-block: 20px;
		transition: all .15s cubic-bezier(.2, 0, .4, 1);

		&:hover {
			width: 120px;
			background-color: white;

			& button {
				background-color: white;
				box-shadow: 0 1em 2em -1em rgba(0,0,30, .3);
			}
		}

		&.next {
			left: unset;
			right: calc(50% - 50vw);
			border-radius: 40px 0 0 40px;
		}

		button {
			cursor: pointer;
			position: sticky;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 50%;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			border: none;
			background-color: var(--light3);
			transition: all .25s ease-out;
			margin: 0;
			padding: 20px;
		}
	}

	.orientation {
		width: 100%;

		& h4 {
			color: var(--accent3);
		}
	}

	svg {
		width: 100%;
		height: 100%;
		overflow: visible;

		path {
			fill: none;
			stroke: var(--dark2);
			stroke-width: 3px;
			stroke-linejoin: round;
			stroke-linecap: round;
		}
	}
</style>