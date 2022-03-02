<script lang="ts">
	import { intersection } from '$actions/intersect';
	import BarChart from '$components/chart/BarChart.svelte';
	import List from '$components/list/List.svelte';
	import ListItem from '$components/list/ListItem.svelte';
	import { mapState } from '$stores/map';

	// function enter() {
	// 	mapState.setClass('medium right');
	// }

	// function leave() {
	// 	mapState.clearClass();
	// }
</script>

<div class="text-wrap">
	<h3 class="center">Sous-secteurs ciblés pour le développement de l’agroparc et activités préférées tels que dégagés lors du rendez-vous citoyen</h3>
</div>
<BarChart src="/data/charts/agroparc-sous-secteurs.json" />
<List class="text-wrap" style="max-width: var(--width-sm)">
	<!-- style="margin-left: 0;" -->
	<ListItem>
		<p><strong>Sous-secteur 5&nbsp;: Bassin de rétention de la rue Chantale</strong> (ainsi que l’ensemble de ses espaces verts adjacents)&nbsp;:</p>
		<p>Implantation d’activités de production agricole, de récréation et de conservation.</p>
	</ListItem>
	<ListItem>
		<p><strong>Sous-secteur 6&nbsp;: Parc des Citoyens&nbsp;:</strong></p>
		<p>Implantation d’activités de récréation et de conservation, suivies des activités de production agricole.</p>
	</ListItem>
	<ListItem>
		<p><strong>Sous-secteur 2&nbsp;: Site de l’église</strong> et <strong>Secteur 3&nbsp;: Site de la chandellerie&nbsp;:</strong></p>
		<p>Implantation d’activités commerciales et de récréation.</p>
	</ListItem>
	<ListItem>
		<p><strong>Sous-secteur 1&nbsp;: Parc Leblanc</strong> et <strong>Secteur 4&nbsp;: Site des travaux publics&nbsp;:</strong></p>
		<p>Peu de potentiel de développement d’activités liées à l’agro-parc.</p>
	</ListItem>
</List>

<style lang="postcss">
	span {
		font-weight: 400;
		opacity: .7;
	}
</style>