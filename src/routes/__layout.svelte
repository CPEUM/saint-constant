<script>
	import '/src/app.postcss';
	import MapOverview from '$components/map/MapOverview.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { isMapOverview } from '$stores/map';
</script>


<main class:ismap={$isMapOverview}>
	<!-- <Loading /> -->
	<slot/>
</main>
<Footer />
<MapOverview />
<Nav />


<style lang="postcss">
	main {
		width: 100%;
		transition: transform 1s;

		&.ismap {
			transform: translateX(-100%);
		}
	}
</style>