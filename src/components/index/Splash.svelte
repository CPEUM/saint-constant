<script lang="ts">
	import { mainScroll } from '$stores/scroll';
	import { getRandomThemeColor } from '$utils/randomThemeColor';
	import { fade } from 'svelte/transition';
	import { generateSvgPaths } from '$utils/generateSvgPaths';
	import { onMount } from 'svelte';
	import { revealText } from '$actions/revealText';
	import { decorations } from '$utils/decorations';
	import { exerciceRoutes } from '$utils/routes';
	import { parallax } from '$actions/parallax';

	const shapes = decorations.map((deco) => {
		return {
			...deco,
			fillColor: deco.fill ? getRandomThemeColor([2, 3], exerciceRoutes.map(r => r.key)) : 'none',
			strokeColor: deco.stroke ? getRandomThemeColor([1, 2]) : 'none',
		}
	});

	const waveVb = { width: 1000, height: 1500 };
	const waves = generateSvgPaths(2, { viewBox: waveVb, padding: 900 }).map((svgPath) => ({
		viewBox: `0 0 ${waveVb.width} ${waveVb.height}`,
		d: svgPath,
		fill: getRandomThemeColor([2, 3]),
	}));

	let mounted = false;

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 0);
	});
</script>

<!-- style:--scroll="{$mainScroll.y}px" -->
<header>
	<svg
		viewBox={waves[1].viewBox}
		preserveAspectRatio="none"
	>
		<path
			d={waves[0].d}
			fill={waves[0].fill}
		/>
	</svg>
	<svg viewBox={waves[1].viewBox} preserveAspectRatio="xMidYMax slice">
		<clipPath id="wave-mask">
			<path
				d={waves[1].d}
			/>
		</clipPath>
		<g clip-path="url(#wave-mask)">
			{#each shapes as shape}
				<path
					vector-effect="non-scaling-stroke"
					d={shape.d}
					fill={shape.fillColor}
					stroke={shape.strokeColor}
				/>
			{/each}
		</g>
	</svg>
	<hgroup use:parallax>
		<h1 use:revealText={{
				duration: 600,
				staggerDelay: 15,
				transformOrigin: '0% 20%',
				rotateX: -80
			}}
		>
			&#8594;LA <span class="alt">CO-CREATION</span> DES PAYSaGES URBAINS <span class="left">DE LA VILLE DE SaINT-CONSTANT &#8595;</span>
		</h1>
	</hgroup>
</header>

<style lang="postcss">
	header {
		position: relative;
		margin: 0;
		padding-inline: 6rem;
		padding-bottom: 50vh;
		width: 100%;
		min-height: 150vh;
		overflow: visible;
		user-select: none;
	}

	svg {
		pointer-events: none;
		user-select: none;
		position: absolute;
		padding: 0;
		margin: 0;
		width: 100vw;
		height: 175vh;
		left: 50%;
		transform: translateX(-50%);
		overflow: visible;
		z-index: -10;
	}

	hgroup {
		min-height: 100vh;
		max-width: var(--width-lg);
		margin: 0 auto;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		position: relative;
		display: inline-block;
		font-size: clamp(56px, 7vw, 92px);
		font-weight: 400;
		color: var(--dark1);
		line-height: 1.1em;
		padding: 0;
		margin-block: 200px;
		margin-inline: auto;
		font-family: var(--font-misc);
		letter-spacing: 0.2em;
		text-align: right;
		transform: translateY(calc(var(--scroll) / 3));

		& .left {
			display: inline-block;
			text-align: left;
		}
	}
</style>
