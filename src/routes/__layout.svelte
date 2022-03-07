<script lang="ts" context="module">
	export function load({ url }) {
		return {
			props: {
				topRoute: 'key' + getSegments(url.pathname)[0]
			}
		};
	}
</script>

<script lang="ts">
	import '$styles/styles.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { getSegments } from '$utils/path';
	import { expoIn, expoOut } from 'svelte/easing';
	import { browser } from '$app/env';
	import Loading from '$components/Loading.svelte';
	import { mainScroll } from '$stores/scroll';
	import { mapState } from '$stores/map';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	export let topRoute = null;
	export let topNavigating = true;
	let mapLoaded = false;

	beforeNavigate(({from, to}) => {
		if (getSegments(from?.href)[0] !== getSegments(to?.href)?.[0]) topNavigating = true;
	});

	afterNavigate(({from, to}) => {
		if (topNavigating) topNavigating = false;
		if (browser) {
			document.body.style.scrollBehavior = 'unset';
			document.body.scrollTop = 0;
			document.body.style.scrollBehavior = 'smooth';
		}
	});

	function outroend() {
		if (topNavigating) topNavigating = false;
	}
</script>

<Nav />
{#key topRoute}
	{#if mapLoaded && !topNavigating}
		<main
			in:fly={{ y: 40, duration: 1550, easing: expoOut }}
			out:scale={{ opacity: 0, start: 0.98, duration: 350 }}
			on:outroend={outroend}
			style:transform-origin="center {$mainScroll.y}px"
		>
			<div class="grain" />
			<article>
				<slot />
			</article>
			<Footer />
		</main>
	{/if}
{/key}
{#if !mapLoaded || topNavigating}
	<Loading />
{/if}
<Map on:load={() => (mapLoaded = true)} />

<style lang="postcss">
	main {
		position: relative;
	}

	.grain {
		opacity: 0.5;
		z-index: -1;
	}

	article {
		position: relative;
		padding: 0 4rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		@media screen and (max-width: 900px) {
			padding: 0 1rem;
		}
	}
</style>
