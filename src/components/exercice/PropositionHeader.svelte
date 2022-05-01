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
</script>

<header>
	<hgroup use:parallax={{ factor: 0.7 }}>
		<span>{label}</span>
		<h3 use:revealText={revealFlyUp}>{title}</h3>
	</hgroup>
	<div class="image" style:background-image={src ? `url(${base + src})` : ''} />
</header>

<style lang="postcss">
	section {
		margin: 0 auto;
		max-width: var(--width-lg);
		position: relative;
		width: 100%;
		padding-inline: 0;
		padding-block: 2rem 8rem;
	}

	header {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		margin: 0;
		margin-bottom: 6rem;
		padding: 0;
		min-height: 100vh;
		width: 100%;
		/* width: 100vw;
		left: calc(50% - 100vw / 2); */
		overflow: hidden;
		background-color: transparent;
		border-radius: 2rem;
		background-color: var(--accent2);

		/* &::after {
			z-index: 0;
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 900px;
			opacity: 0.2;
		} */
	}

	.image {
		/* z-index: -1; */
		display: block;
		position: relative;
		flex: 1;
		width: 50%;
		height: auto;
		min-height: 100%;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	hgroup {
		flex: 1;
		z-index: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		min-height: 100%;
		padding: 2rem 3rem;
		min-width: var(--width-sm);
		width: 100%;
		overflow: hidden;
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
		color: var(--dark2);
		margin: 0;
		padding: 0;
		font-weight: 500;
		font-size: var(--xxl);
	}
</style>
