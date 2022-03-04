<script lang="ts">
	import { revealFlyUp, revealText } from '$actions/revealText';
	import LogoBanner from '$components/team/LogoBanner.svelte';
	import Link from '$components/primitives/Link.svelte';

</script>

<section>
	<div id="pres">
		<div class="text-wrap">
			<h2 use:revealText={revealFlyUp}>Partenaires du projet</h2>
			<p>Ce travail a été réalisé par la <Link href="https://paysage.umontreal.ca">Chaire en paysage et environnement de l’Université de Montréal (CPEUM)</Link> en collaboration avec la <Link href="https://unesco-paysage.umontreal.ca">Chaire UNESCO en paysage urbain de l'Université de Montréal (CUPUM)</Link> ainsi qu’en vertu du soutien financier du ministère de l’Économie et de l’Innovation du Québec et de la <Link href="https://saint-constant.ca/">Ville de Saint-Constant</Link>. Ce projet a été rendu possible également grâce au soutien partenarial de la <Link href="https://roussillon.ca/">MRC de Roussillon</Link>.</p>
		</div>
	</div>
	<div id="over">
		<LogoBanner></LogoBanner>
	</div>
</section>

<style lang="postcss">
	section {
		width: 100%;
		position: relative;
	}

	#pres {
		width: 100%;
		padding: 25vh;
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#over {
		position: relative;
		background-color: var(--light1);
		box-shadow: 0 -1px 0 0 var(--light3);
	}
</style>