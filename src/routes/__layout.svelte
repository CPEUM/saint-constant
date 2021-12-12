<script>
	import '/src/app.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import Background from '$components/Background.svelte';
	import { isMapFull } from '$stores/map';
	import { mainScroll } from '$stores/scroll';
</script>


<div class:ismap={$isMapFull}>
	<!-- <Background /> -->
	<main>
		<slot/>
	</main>
	<Footer />
</div>
<!-- <Map /> -->
<Nav />


<style lang="postcss">
	div {
		position: relative;
		width: 100%;
		left: 0;
		background-color: var(--light1);

		&::after {
			z-index: 1;
			content: '';
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			background: url(/grain.svg);
			background-repeat: repeat;
			opacity: .3;
		}

		&.ismap {
			
		}
	}

	main {
		z-index: 2;
		position: relative;
		width: 100%;
		left: 0;
		transition: all .4s cubic-bezier(.75, 0, .2, 1);
	}

	.ismap main {
		left: -100%;
		opacity: 0;
	}
</style>