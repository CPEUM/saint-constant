<script>
	import '/src/app.postcss';
	import MapNav from '$components/map/MapNav.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { navigating } from '$app/stores';

	let content;
	$:	$navigating || content?.scrollTo({
				top:0,
				left: 0,
				// behavior: 'smooth'
			});
</script>


<MapNav></MapNav>
<article bind:this={content}>
	<slot></slot>
	<Footer></Footer>
</article>
<Nav></Nav>


<style>
	article {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden scroll;
	}
</style>