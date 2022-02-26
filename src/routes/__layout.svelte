<script lang="ts" context="module">
	import type { LoadInput } from '@sveltejs/kit';

	export function load({ url }: LoadInput) {
		return {
			props: {
				topNavigation: getSegments(url.pathname)[0]
			}
		}
	}
</script>

<script lang="ts">
	import '$styles/styles.postcss';
	import Map from '$components/map/Map.svelte';
	import Nav from '$components/nav/Nav.svelte';
	import Footer from '$components/Footer.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { exercice } from '$stores/route';
	import { getSegments } from '$utils/path';
	import { expoIn, expoOut } from 'svelte/easing';
	import { browser } from '$app/env';

	export let topNavigation: string;

	let mapLoaded = false;
	$:	{
		if (!$navigating && browser) {
			document.body.style.scrollBehavior = 'unset';
			document.body.scrollTop = 0;
			document.body.style.scrollBehavior = 'smooth';
		}
	}
</script>

<Nav />
{#if mapLoaded}
	{#key topNavigation}
		<main
			in:fly={{y: 40, duration: 1550, delay: 350, easing: expoOut}}
			out:fade={{duration: 350}}
		>
			<div class="grain"></div>
			<article>
				<slot />
			</article>
			<Footer />
		</main>
	{/key}
{/if}
<Map on:load={() => mapLoaded = true} />

<style lang="postcss">
	main {
		position: relative;
	}

	.grain {
		opacity: .5;
		z-index: -1;
	}

	article {
		position: relative;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
