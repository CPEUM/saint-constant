<script lang="ts">
	import { revealFlyUp, revealText } from '$actions/revealText';
	import LogoBanner from '$components/team/LogoBanner.svelte';
	import Link from '$components/primitives/Link.svelte';

</script>

<section>
	<div id="pres">
		<div class="text-wrap">
			<h2 use:revealText={revealFlyUp}>Partenaires du projet</h2>
		</div>
	</div>
	<div id="over">
		<LogoBanner />
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