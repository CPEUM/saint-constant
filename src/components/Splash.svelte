<script>
	import InlineSvg from 'svelte-inline-svg';
	import { mainScroll } from '$stores/scroll';
	import { getRandomThemeColor } from '$utils/randomThemeColor';
	import { decorations } from '$utils/decorations';
	import { fade } from 'svelte/transition';
	import { generateSvgPaths } from '$utils/generateSvgPaths';
	import { reveal } from '$actions/reveal';

	function generateParallaxFactor(range = 0.5) {
		return Math.random() * range - 0.5 * range;
	}

	const svgs = decorations.map(deco => ({
		svgProps: {
			width: deco.width,
			height: deco.height,
			viewBox: `0 0 ${deco.width} ${deco.height}`
		},
		pathProps: {
			d: deco.d,
			fill: deco.fill ? getRandomThemeColor([1, 2]) : 'none',
			stroke: deco.stroke ? getRandomThemeColor([1, 2]) : 'none',
		},
		parallax: generateParallaxFactor(),
		offset: {
			x: Math.random() * 100,
			y: Math.random() * 100
		}
	}))

	const bgSvgsViewBox = {width: 1000, height: 1500}
	const bgSvgs = generateSvgPaths(2).map(svgPath => ({
		svgProps: {
			viewBox: '0 0 1000 1000'
		},
		pathProps: {
			d: svgPath,
			fill: getRandomThemeColor([1, 2])
		},
		parallax: generateParallaxFactor(1)
	}))
</script>

<header>
	{#each bgSvgs as bgSvg}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...bgSvg.svgProps}
			preserveAspectRatio="none"
			style="top: {$mainScroll.y * bgSvg.parallax}px; left: 0px; width: 100%; min-width: 1000px; height: 150vh;"
		>
			<path {...bgSvg.pathProps} filter="url(#grain)" />
		</svg>
	{/each}
	{#each svgs as svg, i}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...svg.svgProps}
			style:left="{svg.offset.x}%"
			style="top: {$mainScroll.y * svg.parallax}px"
			style:transform="translate(-50%, {svg.offset.y - 50}%)"
			preserveAspectRatio="xMidYMin"
			in:fade={{delay: i * 50, duration: 150}}
		>
			<path
				filter="url(#grain)"
				{...svg.pathProps}
				vector-effect="non-scaling-stroke"
			/>
		</svg>
	{/each}
	<hgroup>
		<h1 style="transform: translateY({$mainScroll.y / 2}px)">
			<span use:reveal={{stagger: true}}>LA CO-CRÉATION DES PAYSAGES URBAINS DE LA VILLE DE SAINT-CONSTANT</span>
		</h1>
	</hgroup>
</header>

<style lang="postcss">
	header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding-inline: 6rem;
		padding-bottom: 100vh;
		width: 100%;
		height: 200vh;
		overflow: visible;
	}

	svg {
		overflow: visible;
		position: absolute;
		/* transition: all .08s; */
	}

	hgroup {
		width: 100%;
		max-width: var(--width-lg);
		z-index: 1;
		text-align: center;
	}

	h1 {
		text-align: left;
		display: inline-block;
		font-size: 72px;
		font-weight: 400;
		max-width: 100%;
		width: auto;
		color: var(--dark2);
		/* white-space: nowrap; */
		line-height: 1.5em;
		padding: 0;
		margin: 0;
		font-family: var(--font-misc);

		& .misc {
			font-family: var(--font-misc);
		}
	}

	span {
		display: block;
		position: relative;
	}
</style>
