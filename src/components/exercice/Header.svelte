<script lang="ts">
	import Image from '$components/primitives/Image.svelte';
	import { exercice } from '$stores/route';
	import { mainScroll } from '$stores/scroll';
	import { text } from '$transitions/text';
	import { getThemeColors } from '$utils/themeColors';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { generateSvgPaths } from '$utils/generateSvgPaths';
	import { getRandomThemeColor } from '$utils/themeColors';
	import type { ExerciceRoute } from '$utils/routes';
	import { exerciceRoutes } from '$utils/routes';
	import { revealFlyDown, revealFlyUp, revealText } from '$actions/revealText';

	let mounted = false;
	let waves;

	const viewBox = { width: 1500, height: 1200 };
	function makeWaves(key: ExerciceRoute['key']) {
		return [...generateSvgPaths(2, { viewBox, padding: 800 }), ...generateSvgPaths(1, { viewBox, padding: 200 })].map((svgPath) => {
			return {
				viewBox: `0 0 ${viewBox.width} ${viewBox.height}`,
				d: svgPath,
				fill: getRandomThemeColor([1, 2, 3], [$exercice.key]),
				dashArray: [Math.random() * 500 + 50, Math.random() * 300 + 10]
			};
		});
	}

	$: waves = makeWaves($exercice.key);

	onMount(() => {
		mounted = true;
	});
</script>

<header style={getThemeColors($exercice.key)}>
	{#if mounted}
		<svg transition:fade|local height={viewBox.height} width={viewBox.width} viewBox="0 0 {viewBox.width} {viewBox.height}" preserveAspectRatio="xMidYMax slice">
			{#key $exercice}
				{#each waves as wave}
					<path transition:fade vector-effect="non-scaling-stroke" d={wave.d} fill={wave.fill} opacity={0.8} stroke-width={1} stroke="none" stroke-opacity={0.5} />
				{/each}
			{/key}
			<!-- <text x="100" y="75" font-size="200" text-anchor="middle" dominant-baseline="baseline">{$exercice.title}</text> -->
		</svg>
		{#key $exercice}
			<hgroup style:--scroll="{$mainScroll.y}px">
				<span transition:text={{ ...revealFlyUp, granularity: 'char' }}>eXERCicE 0{exerciceRoutes.indexOf($exercice) + 1}</span>
				<h1
					in:text={{
						y: '.5em',
						mask: true,
						maskPadding: '.1em',
						granularity: 'word',
						staggerDelay: 50,
						delay: 500
					}}
					out:text={{ y: '-.5em', mask: true, maskPadding: '.1em', delay: 0 }}
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
		margin-bottom: 200px;
	}

	hgroup {
		transform: translateY(calc(var(--scroll) * 0.3));
		width: 100%;
		max-width: var(--width-md);
		position: absolute;
	}

	span {
		display: block;
		color: var(--light1);
		font-size: var(--xl);
		font-family: var(--font-misc);
		margin: 0;
		padding: 0;
		letter-spacing: 3px;
		line-height: 1em;
	}

	h1 {
		width: 100%;
		display: inline-block;
		font-size: var(--xxxl);
		color: var(--dark2);
		font-weight: 500;
		line-height: 1em;
		margin: 2rem 0;
		padding: 0;
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
		z-index: -30;
		width: 100%;
		height: calc(100vh + 200px);
		transform: rotate(var(--angle));

		text {
			font-family: var(--font-misc);
			opacity: 0.7;
			stroke-linejoin: round;
			stroke-linecap: round;
			letter-spacing: -0.25em;
			/* stroke-dasharray: 100% 20%; */
			stroke-dasharray: 30% 40%;
			stroke-width: 3px;
			stroke: var(--accent1);
			fill: var(--accent3);
			/* animation: stroky 160s infinite linear; */
		}
	}
</style>
