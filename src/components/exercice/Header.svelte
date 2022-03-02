<script lang="ts">
	import Image from '$components/primitives/Image.svelte';
	import { exercice } from '$stores/route';
	import { mainScroll } from '$stores/scroll';
	import { text } from '$transitions/text';
	import { getAccentColors } from '$utils/exerciceColors';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { generateSvgPaths } from '$utils/generateSvgPaths';
	import { getRandomThemeColor } from '$utils/randomThemeColor';
	import { ExerciceRoute } from '$utils/routes';
	
	let mounted = false;
	let waves;

	const waveVb = { width: 1000, height: 1500 };
	function makeWaves(key: ExerciceRoute['key']) {
		return generateSvgPaths(2, { viewBox: waveVb, padding: 900 })
			.map((svgPath) => {
				return {
					viewBox: `0 0 ${waveVb.width} ${waveVb.height}`,
					d: svgPath,
					fill: getRandomThemeColor([2, 3], [$exercice.key]),
				}
			});
	}

	$:	waves = makeWaves($exercice.key);

	onMount(() => {
		mounted = true
	});
</script>

<header style={getAccentColors($exercice.key)}>
	{#if mounted}
		{#key $exercice}
			<!-- <svg transition:fade height="100" width="200" viewBox="0 0 200 100" preserveAspectRatio="xMidYMin slice">
				<text x="100" y="75" font-size="200" text-anchor="middle" dominant-baseline="baseline">{$exercice.title}</text>
			</svg> -->
			<hgroup style:--scroll="{$mainScroll.y}px">
				<h1
					in:text={{y: '.5em', mask: true, maskPadding: '.1em', granularity: 'word', staggerDelay: 50, delay: 500}}
					out:text={{y: '-.5em', mask: true, maskPadding: '.1em', delay: 0}}
				>
					{$exercice.heading}
				</h1>
			</hgroup>
		{/key}
	{/if}
</header>

<style lang="postcss">
	header {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	hgroup {
		transform: translateY(calc(var(--scroll) * 0.3));
		width: 100%;
		max-width: var(--width-md);
		position: absolute
	}

	h1 {
		width: 100%;
		max-width: 500px;
		display: inline-block;
		font-size: var(--xxxl);
		font-weight: 500;
		line-height: 1em;
	}

	@keyframes stroky {
		from {
			stroke-dashoffset: 0%;
		}
		to {
			stroke-dashoffset: 70%;
		}
	}
	svg {
		top: 0;
		overflow: visible;
		position: absolute;
		z-index: -2;
		width: 100%;
		height: 75vh;
		transform: rotate(var(--angle));

		text {
			font-family: var(--font-misc);
			opacity: .7;
			stroke-linejoin: round;
			stroke-linecap: round;
			letter-spacing: -.25em;
			/* stroke-dasharray: 100% 20%; */
			stroke-dasharray: 30% 40%;
			stroke-width: 3px;
			stroke: var(--accent1);
			fill: var(--accent3);
			/* animation: stroky 160s infinite linear; */
		}
	}
</style>