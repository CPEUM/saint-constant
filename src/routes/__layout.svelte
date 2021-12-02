<script>
	import '/src/app.css';
	import MapNav from '$components/MapNav.svelte';
	import Nav from '$components/Nav.svelte';
	import Footer from '$components/Footer.svelte';
</script>


<MapNav></MapNav>
<main>
	<Nav></Nav>
	<article>
		<slot></slot>
		<Footer></Footer>
	</article>
</main>


<style>
	main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden scroll;
		height: 100%;
	}
</style>