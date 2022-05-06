<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { mapMask } from '$actions/mapMask';
	import { mapDisplay, mapFocus } from '$stores/map';
	import { parallax } from '$actions/parallax';
	import { base } from '$app/paths';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { getContext } from 'svelte';
	import type { ExerciceRoute } from '$utils/routes';
	import PropositionHeader from './PropositionHeader.svelte';

	export let label: string;
	export let title: string;
	export let key: string;
	export let src: string = '';

	let exerciceKey = getContext<ExerciceRoute['key']>('exercice');

	function setFocus() {}

	function clearFocus() {}
</script>

<section use:intersection on:enter={setFocus} on:leave={clearFocus} id={key}>
	<PropositionHeader {label} {title} {src} />
	<slot />
</section>

<style lang="postcss">
	section {
		margin: 0 auto;
		position: relative;
		width: 100%;
		padding-inline: 0;
		padding-block: 2rem 8rem;
	}
</style>
