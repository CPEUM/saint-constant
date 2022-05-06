<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { mapMask } from '$actions/mapMask';
	import { mapDisplay, mapFocus } from '$stores/map';
	import { parallax } from '$actions/parallax';
	import { base } from '$app/paths';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { getContext } from 'svelte';
	import type { ExerciceRoute } from '$utils/routes';
	import Ribbon from './Ribbon.svelte';
	import RibbonSlide from './RibbonSlide.svelte';
	import Image from '$components/primitives/Image.svelte';

	export let label: string;
	export let title: string;
	export let src: string = '';

	const angle = (Math.random() * 4 - 2).toFixed(1);
</script>

<header style:transform="rotate({angle}deg)">
	<hgroup use:parallax={{ factor: 0.6 }}>
		<span>{label}</span>
		<h3 use:revealText={revealFlyUp}>{title}</h3>
	</hgroup>
	{#if src}
		<div use:parallax={{ factor: 0.8 }} class="image" style:background-image={src ? `url(${base + src})` : ''} />
	{/if}
</header>

<style lang="postcss">
	header {
		position: relative;
		display: flex;
		gap: 0;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		margin: 4rem auto 8rem auto;
		max-width: var(--width-lg);
		padding: 0;
		height: 100vh;
		width: var(--ribbonw, 100%);
		border-radius: 2.5rem;
		box-shadow: 0 2rem 5rem -3rem rgba(0, 0, 30, 0.25);
		background-color: var(--accent2);

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			background-image: url(/grain.svg);
			background-size: 800px;
			background-repeat: repeat;
			width: 100%;
			height: 100%;
			opacity: 0.3;
		}
	}

	.image {
		z-index: 1;
		opacity: 0.9;
		display: inline-block;
		position: relative;
		flex: 0;
		right: -0.25rem;
		top: 15%;
		height: 70%;
		width: 50%;
		min-width: 800px;
		overflow: hidden;
		border-radius: 2rem;
		box-shadow: -2rem 3rem 5rem -3rem rgba(0, 0, 30, 0.5);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	hgroup {
		flex: 1;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		min-height: 100%;
		padding-block: 0;
		padding-inline: 3rem 1rem;
		max-width: var(--width-sm);
	}

	span {
		z-index: 1;
		font-family: var(--font-misc);
		color: var(--light1);
		padding: 0;
		margin: 0;
		font-weight: 400;
		letter-spacing: 3px;
		font-size: var(--xl);
	}

	h3 {
		z-index: 1;
		color: var(--dark3);
		margin: 0;
		padding: 0;
		font-weight: 500;
		font-size: var(--xxl);
	}
</style>
