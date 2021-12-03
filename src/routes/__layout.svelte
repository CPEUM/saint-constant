<script>
	import '/src/app.postcss';
	import MapNav from '$components/map/MapNav.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';

</script>


<MapNav></MapNav>
<article>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden scroll;
	}
</style>