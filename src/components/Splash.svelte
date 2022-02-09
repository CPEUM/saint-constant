<script>
	import { mainScroll } from '$stores/scroll';
	import { getRandomThemeColor } from '$utils/randomThemeColor';
	import { decorations } from '$utils/decorations';
	import { fade } from 'svelte/transition';
	import { generateSvgPaths } from '$utils/generateSvgPaths';
	import { onMount } from 'svelte';
	import { revealText } from '$actions/revealText';

	function generateParallaxFactor(range = 0.5) {
		return Math.random() * range - 0.5 * range;
	}

	const svgs = decorations.map((deco) => ({
		svgProps: {
			width: deco.width,
			height: deco.height,
			viewBox: `0 0 ${deco.width} ${deco.height}`
		},
		pathProps: {
			d: deco.d,
			fill: deco.fill ? getRandomThemeColor([1, 2]) : 'none',
			stroke: deco.stroke ? getRandomThemeColor([1, 2]) : 'none'
		},
		parallax: generateParallaxFactor(),
		offset: {
			x: Math.random() * 100,
			y: Math.random() * 100
		}
	}));

	const bgSvgsViewBox = { width: 1000, height: 1500 };
	const bgSvgs = generateSvgPaths(2).map((svgPath) => ({
		svgProps: {
			viewBox: '0 0 1000 1000'
		},
		pathProps: {
			d: svgPath,
			fill: getRandomThemeColor([1, 2])
		},
		parallax: generateParallaxFactor(1)
	}));

	let mounted = false;

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 0);
	});
</script>

<header>
	<!-- {#each bgSvgs as bgSvg}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...bgSvg.svgProps}
			preserveAspectRatio="none"
			style="top: {$mainScroll.y *
				bgSvg.parallax}px; left: 0px; width: 100%; min-width: 1000px; height: 150vh;"
		>
			<path {...bgSvg.pathProps} />
		</svg>
	{/each}
	<div id="mask" style="clip-path: path('{generateSvgPaths(1, {relative: true})}')">
		{#each svgs as svg, i}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				{...svg.svgProps}
				style:left="{svg.offset.x}%"
				style="top: {$mainScroll.y * svg.parallax}px"
				style:transform="translate(-50%, {svg.offset.y - 50}%)"
				preserveAspectRatio="xMidYMin"
				in:fade={{ delay: i * 50, duration: 150 }}
			>
				<g transform="rotate({Math.random() * 90})">
					<path {...svg.pathProps} vector-effect="non-scaling-stroke" />
				</g>
			</svg>
		{/each}
	</div> -->
	{#each svgs as svg, i}
		<img
			src="data:image/svg+xml;utf8,<svg width='{svg.svgProps.width}' height='{svg.svgProps.height}' viewBox='{svg.svgProps.viewBox}' xmlns='http://www.w3.org/2000/svg'><path fill='{svg.pathProps.fill}' d='{svg.pathProps.d}' /></svg>"
			alt="background-shape-{i}"
		/>
	{/each}
	<svg>

	</svg>
	<hgroup>
		<h1 use:revealText={{stagger: true, transformOrigin: '0 80%', rotateX: 60, y: 50, staggerDelay: 12, mask: true}}>
			LA CO-CREATION DES PAYSaGES URBaINS DE LA VILLE DE SAINT-CONSTANT
		</h1>
	</hgroup>
</header>

<style lang="postcss">
	header {
		--color: red;
		position: relative;
		margin: 0;
		padding-inline: 6rem;
		padding-bottom: 50vh;
		width: 100%;
		min-height: 150vh;
		overflow: visible;
		user-select: none;
		margin-bottom: 200px;
	}

	img {
		z-index: -1;
		position: absolute;
	}

	svg {
		z-index: -1;
		position: absolute;
		overflow: visible;
	}

	hgroup {
		width: 100%;
		min-height: 100vh;
		max-width: var(--width-lg);
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		text-align: left;
		display: inline-block;
		font-size: 8vw;
		font-weight: 800;
		color: var(--dark2);
		line-height: 1em;
		padding: 0;
		margin: 0 auto;
		font-family: var(--font-misc);

		& .misc {
			font-family: var(--font-misc);
		}
	}

	#bg {
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	}

	.path {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: red;
	}
</style>
