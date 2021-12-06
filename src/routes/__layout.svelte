<script>
	import '/src/app.postcss';
	import MapOverview from '$components/map/MapOverview.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import Loading from '$components/Loading.svelte';

	let content;

	function resetScroll() {
		content?.scrollTo({
			top:0,
			left: 0,
			// behavior: 'smooth'
		});
	}
</script>


<svelte:window on:sveltekit:navigation-start={resetScroll} />

<MapOverview />
<div bind:this={content}>
	<main>
		<slot/>
	</main>
	<Footer></Footer>
</div>
<Loading />
<Nav />


<style>
	div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden scroll;
	}

	main {
		width: 100%;
		background-color: red;
	}
</style>