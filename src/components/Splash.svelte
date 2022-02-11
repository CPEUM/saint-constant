<script lang="ts">
	import { mainScroll } from '$stores/scroll';
	import { getRandomThemeColor } from '$utils/randomThemeColor';
	import { decorations } from '$utils/decorations';
	import { fade } from 'svelte/transition';
	import { generateSvgPaths } from '$utils/generateSvgPaths';
	import { onMount } from 'svelte';
	import { reveal } from '$actions/revealText';

	/**
	 * Passed from index route, where it is defined using import.meta.glob
	 * from within the route's load function
	 */
	export let shapefiles;
	let shapes;

	function generateParallaxFactor(range = 0.5) {
		return Math.random() * range - 0.5 * range;
	}

	$:	shapes = shapefiles.map(path => {
			return {
				path: path.replace('/static', ''),
				color: getRandomThemeColor([1, 2]),
				parallax: generateParallaxFactor(),
				height: Math.random() * 50 + 100 + 'vh',
				offset: {
					y: 25 - Math.random() * 50 + '%',
					x: 50 - Math.random() * 100 + '%'
				}
			}
		})

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
	{#each shapes as shape}
		<div
			class="shape"
			style:top="{-$mainScroll.y * shape.parallax}px"
			style:height={shape.height}
			style:background-color={shape.color}
			style:--image-url="url({shape.path})"
			style:transform="translate({shape.offset.x}, {shape.offset.y})"
		>
			<div class="grain"></div>
		</div>
	{/each}
	<hgroup>
		<h1 use:reveal={{
				hideOnLeave: false,
				duration: 600,
				staggerDelay: 15,
				transformOrigin: '0% 20%',
				start: {
					rotate: {
						x: -80
					}
				}
			}}
			style:transform="translateY({$mainScroll.y / 4}px)"
		>
			&#8594;LA <span class="alt">CO-CREATION</span> DES PAYSaGES URBaINS <span class="left"> DE LA VILLE DE SAINT-CONSTANT &#8595;</span>
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
		margin-bottom: 200px;
	}

	.shape {
		left: 0;
		width: 100%;
		min-width: 1200px;
		height: 500px;
		position: absolute;
		mask-image: var(--image-url);
		mask-repeat: no-repeat;
		mask-size: contain;
		mask-position: center;

		& .grain {
			background: url(/grain.svg);
			background-repeat: repeat;
			background-size: 1000px;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: .4;
		}
	}

	hgroup {
		min-height: 100vh;
		max-width: var(--width-lg);
		margin: 0 auto;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		display: inline-block;
		font-size: clamp(56px, 8vw, 98px);
		font-weight: 400;
		color: var(--dark2);
		line-height: 1.1em;
		padding: 0;
		margin-block: 200px;
		margin-inline: auto;
		font-family: var(--font-misc);
		letter-spacing: 0.25em;
		text-align: right;

		& .left {
			display: inline-block;
			text-align: left;
		}

		& .alt {

			/* font-weight:  */
		}
	}
</style>
