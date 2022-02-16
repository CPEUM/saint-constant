<script>
	import { intersection } from '$actions/intersect';
	import { mapState, mapFocus } from '$stores/map';
	import { mainScroll } from '$stores/scroll';

	export let title;
	export let subtitle;
	export let key;

	let header;
	let offset = 0;

	function setFocus() {
		mapFocus.set(key);
	}

	function clearFocus() {
		mapFocus.clear();
	}

	function showMap() {
		// mapViewMode.set('proposition');
	}

	function hideMap() {
		// mapViewMode.unset('proposition')
	}

	function updateParallax() {
		if (header) {
			const rect = header.getBoundingClientRect();
			offset = rect.top + (rect.bottom - rect.top) / 2;
		}
	}

	$: 	$mainScroll, updateParallax();
</script>


<section
	use:intersection
	on:enter={setFocus}
	on:leave={clearFocus}
	style="--offset: {offset}px"
>
	<header
		use:intersection
		on:enter={showMap}
		on:leave={hideMap}
		bind:this={header}
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
		overflow: hidden;
		background-color: grey;
	}

	hgroup {
		transform: translateY(calc(var(--offset) * -0.5));
	}

	div {
		background-color: red;
	}
</style>