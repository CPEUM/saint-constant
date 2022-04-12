<script lang="ts">
	import { base } from '$app/paths';
	import objectives from '$utils/objectives';
	import { getThemeColors } from '$utils/themeColors';
	import { exerciceRoutes } from '$utils/routes';
	import RouteHeader from '$components/RouteHeader.svelte';
</script>

<RouteHeader>Conclusion</RouteHeader>
<p>Les propositions d’aménagement présentées ici visent à̀ fournir à la Ville de Saint-Constant de nouveaux <strong>outils</strong> et de nouvelles <strong>approches de planification</strong> territoriale en phase avec l’esprit des pratiques en <strong>innovation sociale</strong>. L’originalité de ce projet réside ainsi dans sa capacité à traduire les préoccupations et les aspirations exprimées par les citoyens et les acteurs clés du développement urbain envers le devenir souhaitable des paysages et des cadres de vies. La démarche de co-construction adoptée avec les partenaires du projet, soit la Ville de Saint-Constant et la MRC de Roussillon, aura permis en effet de développer des outils de connaissances, de concertation et d’intervention en vue d’assurer une cohérence dans la gestion des paysages urbains de Saint-Constant. Il importe de mentionner que les orientations d’aménagement s’inscrivent en arrimage avec les grands projets d’infrastructures municipales et les principaux pôles de développement économiques portés par la Ville de Saint-Constant.</p>
<p>Notons enfin que le projet prône l’idée de mesure et de précaution tout autant que de responsabilités sociale et environnementale. À ce titre, il s’inscrit en phase directe avec plusieurs objectifs stratégiques du programme de développement durable à l’horizon 2030, intitulé <i>Agenda 2030</i>, porté par l’Organisation des Nations unies (ONU).</p>
<p>Les objectifs de développement durable suivants pourraient ainsi être&nbsp;atteints&nbsp;:</p>
{#each objectives as o}
	<section style:--accent={o.color}>
		<img src="{base}/media/odd/odd-{o.num}.svg" alt="Pastille de l'ODD{o.num}"/>
		<div class="details">
			<p>{o.description}</p>
			<ul>
				{#each o.implementations as imp}
					<li>
						{#if imp.orientations}
							Orientation{imp.orientations.length > 1 ? 's' : ''}&nbsp;
							{#each imp.orientations as orientation}
								<a class="orientation" href={exerciceRoutes[orientation - 1].path} sveltekit:prefetch style={getThemeColors(exerciceRoutes[orientation - 1].key)}>0{orientation}</a>&nbsp;
							{/each}:
						{/if}
						&ensp;{imp.explanation}
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/each}

<style lang="postcss">
	section {
		/* z-index: -10; */
		display: flex;
		flex-direction: row;
		gap: 2rem;
		width: 100%;
		max-width: var(--width-md);
		padding: 2rem 0;

		& img {
			width: 250px;
			height: 250px;
			margin: 2.5rem 0;
			border-radius: 1rem;
		}

		p {
			color: var(--accent);
			font-size: var(--lg);
			font-weight: 400;
		}

		a.orientation {
			text-decoration: none;
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			padding: 0 .5em;
			min-width: 2em;
			height: 2em;
			box-shadow: 0 0 0 1px var(--accent1);
			border-radius: 1em;
			color: var(--accent3);
			font-family: var(--font-misc);
			transition: all .2s ease-out;

			&:hover {
				background-color: var(--accent1);
			}
		}

		ul {
			padding: 0;
			margin: 0;
			list-style-type: none;
			max-width: var(--width-sm)
		}

		li {
			position: relative;
			/* z-index: -10; */
			margin: 1rem auto;
			padding: 1rem 2rem 1.25rem 2rem;
			border-radius: 1rem;
			/* background-color: var(--light1); */
			box-shadow: 0 0 0 1px var(--light3);
			/* box-shadow: 0 1.5rem 2.5rem -1.5rem rgba(0,0,30,.1); */

			&::after {
				content: '';
				position: absolute;
				top: 1.5em;
				left: -.25em;
				width: .5em;
				bottom: 1.5em;
				background-color: var(--accent);
				border-radius:.25em;
			}
		}
	}
</style>