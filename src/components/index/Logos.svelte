<script lang="ts">
	import type { TooltipOptions } from '$actions/tooltip';
	import { intersection } from '$actions/intersect';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { tooltip } from '$actions/tooltip';
	import { base } from '$app/paths';
	import logos from '$utils/logos';
	import { hoverbubble } from '$actions/hoverBubble';

	export let heading: boolean = true;
	let hidden = true;
	const ttipOpts: TooltipOptions = {
		follow: true,
		position: 'bottom'
	};
</script>

<section use:intersection on:enter|once={() => (hidden = false)} class:hidden>
	{#if heading}
		<h2 use:revealText={revealFlyUp}>Partenaires</h2>
	{/if}
	<div>
		{#each logos.prime as logo}
			<a href={logo.href} rel="external" target="_blank" title={logo.alt} use:hoverbubble={{ color: 'var(--light3)', size: 250 }}>
				<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
			</a>
		{/each}
	</div>
	<div>
		{#each logos.second as logo}
			<a href={logo.href} rel="external" target="_blank" title={logo.alt} use:hoverbubble={{ color: 'var(--light3)', size: 250 }} class="secondary">
				<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
			</a>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		user-select: none;
		pointer-events: none;
		padding-top: 5rem;
		padding-bottom: 8rem;
		width: 100%;
		max-width: var(--width-md);

		&:hover a:not(:hover) {
			opacity: 0.5;
			/* filter: saturate(0); */
		}
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.hidden a {
		opacity: 0;
	}

	a {
		pointer-events: all;
		position: relative;
		display: inline-block;
		flex: 0;
		padding: 2rem;
		flex-basis: 33%;
		opacity: 0.8;
		aspect-ratio: 1.125;
		transition: all 0.2s ease-out;

		&.secondary {
			aspect-ratio: 1.75;
		}

		& img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			position: relative;
			transition: all 0.2s ease-out;
		}

		&:hover {
			opacity: 1;

			& img {
				transform: scale(1.05);
			}
		}
	}
</style>
