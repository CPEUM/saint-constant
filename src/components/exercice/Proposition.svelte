<script>
	import { intersection } from '$actions/intersect';
	import { mapViewMode, mapFocus } from '$stores/map';
	import { parallax } from '$actions/parallax';

	export let title;
	export let subtitle;
	export let key;

	let clientHeight;
	let header;

	function setFocus() {
		mapFocus.set(key);
	}

	function clearFocus() {
		mapFocus.clear();
	}

	function showMap() {
		mapViewMode.set('proposition');
	}

	function hideMap() {
		mapViewMode.unset('proposition')
	}

	function handleScroll() {
	}
</script>


<svelte:window on:scroll={handleScroll} />


<section
	use:intersection
	on:enter={setFocus}
	on:leave={clearFocus}
>
	<header
		use:intersection
		on:enter={showMap}
		on:leave={hideMap}
		bind:this={header}
		use:parallax
	>
		<hgroup>
			<h3>{title}</h3>
			<span>{subtitle}</span>
		</hgroup>
		<!-- <div></div> -->
	</header>
	<slot></slot>
</section>


<style lang="postcss">
	section {
		width: 100%;
	}

	header {
		position: relative;
		min-height: 140vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	hgroup {
		transition: all .5s ease;
	}

	div {
		background-color: red;
	}
</style>