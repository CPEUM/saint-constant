<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { mapMask } from '$actions/mapMask';
	import { mapState, mapFocus } from '$stores/map';
	import { parallax } from '$actions/parallax';
	import { base } from '$app/paths';
	import { revealFlyUp, revealText } from '$actions/revealText';

	export let label: string;
	export let title: string;
	export let key: string;
	export let src: string = '';

	function setFocus() {
		mapFocus.set(key);
	}

	function clearFocus() {
		mapFocus.clear();
	}
</script>

<section
	use:intersection
	on:enter={setFocus}
	on:leave={clearFocus}
>
	<header
		style:transform="rotateZ({2.5 - Math.random() * 5}deg)"
	>
		<hgroup use:parallax>
			<!-- big svg proposition key bg -->
			<!-- <div class="bg" /> -->
			<span>{label}</span>
			<h3 use:revealText={revealFlyUp}>{title}</h3>
		</hgroup>
		<div
			class="image"
			style:background-image={src ? `url(${base + src})` : ''}
		/>
	</header>
	<slot></slot>
</section>

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
		width: 100vw;
		left: calc(50% - 100vw / 2);
		overflow: hidden;
		background-color: transparent;
		border-radius: 2rem;
	}

	.image {
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

		/* &::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 1200px;
			opacity: .2;
		} */
	}

	hgroup {
		flex: 1;
		z-index: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		min-height: 100%;
		background-color: var(--accent2);
		padding: 2rem 3rem;
		min-width: var(--width-sm);
		width: 100%;
		overflow: hidden;
		/* box-shadow: 0 0 1px 0 var(--accent3); */

		&::after {
			z-index: -1;
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 900px;
			opacity: .3;
		}
	}

	span {
		z-index: 1;
		font-family: var(--font-misc);
		color: var(--accent3);
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