<script lang="ts">
	import type { TooltipOptions } from '$actions/tooltip';
	import { intersection } from '$actions/intersect';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { tooltip } from '$actions/tooltip';
	import { base } from '$app/paths';
	import logos from '$utils/logos';

	export let heading: boolean = true;
	let hidden = true;
	const ttipOpts: TooltipOptions = {
		follow: true,
		position: 'bottom'
	}
</script>

<section
	use:intersection
	on:enter|once={() => hidden = false}
	class:hidden
>
	{#if heading}
		<h2 use:revealText={revealFlyUp}>Partenaires</h2>
	{/if}
	<div>
		{#each logos.prime as logo}
			<a
				href={logo.href}
				rel="external"
				target="_blank"
				title={logo.alt}
				use:tooltip={ttipOpts}
			>
				<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
			</a>
		{/each}
	</div>
	<div>
		{#each logos.second as logo}
			<a
				href={logo.href}
				rel="external"
				target="_blank"
				title={logo.alt}
				use:tooltip={ttipOpts}
			>
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
			opacity: .5;
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
		padding: 3rem;
		flex-basis: 33%;
		opacity: .8;
		transition: all .2s ease-out;
		
		& img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			position: relative;
			transition: all .2s ease-out;
		}

		&:hover {
			opacity: 1;

			& img {
				transform: scale(1.05);
			}
		}
	}
</style>