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

<div use:intersection={{ rootMargin: '200px 200px 200px 200px' }} on:enter|once={loadsrc} class:hidden={!loaded} {...$$restProps}>
	<img on:load={onload} loading="lazy" decoding="async" src={base + appliedSrc} {alt} />
	<span>
		{alt}
	</span>
</div>

<style lang="postcss">
	div {
		position: relative;
		display: flex;
		max-width: 100%;
		height: auto;
		min-height: 100px;
		max-height: 90vh;
		padding: 0;
		margin: 0 auto;
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.5s ease-out;
	}

	img {
		position: relative;
		object-fit: cover;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.hidden {
		opacity: 0;
		transform: scale(0.9);
	}

	span {
		display: block;
		position: absolute;
		font-size: 14px;
		color: var(--dark1);
		background-color: var(--light2);
		margin: 12px;
		border-radius: 12px;
		padding: 1em;
		opacity: 0;
		bottom: 0;
		transform: translateY(10px) scale(0.98) skewY(1deg);
		transition: all 0.2s ease-out;
	}

	div:hover span {
		opacity: 0.75;
		transform: translateY(0) scale(1);
	}
</style>
