<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { base } from '$app/paths';
	import { createEventDispatcher } from 'svelte';

	export let src: string;
	export let alt: string;

	let loaded = false;
	let appliedSrc = '';
	const dispatch = createEventDispatcher();

	async function loadsrc() {
		appliedSrc = src;
	}

	function onload() {
		loaded = true;
		dispatch('load');
	}

</script>

<img
	use:intersection={{rootMargin: '200px'}}
	on:enter|once={loadsrc}
	on:load={onload}
	loading="lazy"
	decoding="async"
	src={base + appliedSrc}
	{alt}
	{...$$restProps}
	class:hidden={!loaded}
/>

<style lang="postcss">
	img {
		position: relative;
		width: 100%;
		height: auto;
		background-color: var(--light3);
		min-height: 100px;
		object-fit: contain;
		/* box-shadow: 0 15px 60px -35px rgba(0,0,30,.2); */
		border-radius: 4px;
		transition: all .5s ease-out;
	}

	.hidden {
		opacity: 0;
		transform: scale(0.9);
	}
</style>