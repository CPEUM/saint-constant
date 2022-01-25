<script>
	import InlineSvg from 'svelte-inline-svg';
	import { mainScroll } from '$stores/scroll';
	import { getRandomThemeColor } from '$utils/randomThemeColor';

	export let sfiles;
	console.log(sfiles);
	const hlines = ['LA CO-CRÉATION', 'DES PAYSAGES URBAINS', 'DE LA VILLE DE SAINT-CONSTANT'];
	const shapes = sfiles
		.map((path) => ({
			path: path.name.replace('/static', ''),
			parallaxFactor: Math.random() * 1 - 0.5,
			offsetY: Math.random() * 200,
			offsetX: Math.random() * 100,
			fill: getRandomThemeColor([1, 2])
		}))
		.sort((a, b) => 0.5 - Math.random());
</script>

<header>
	<svg />
	{#each shapes as s}
		<InlineSvg
			src={s.path}
			class="shape"
			fill={s.fill}
			filter="url(#grain)"
			style="top: {-$mainScroll.y * s.parallaxFactor - s.offsetY}px; left: {s.offsetX}%"
		/>
	{/each}
	<hgroup>
		<h1>
			<div>LA CO-CRÉATION</div>
			<div>DES PAYSAGES URBAINS</div>
			<div>DE LA VILLE</div>
			<div>DE SAINT-CONSTANT</div>
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
		padding: 6rem;
		width: 100%;
		height: 100vh;

		:global(.shape) {
			padding: 0;
			margin: 0;
			position: absolute;
			z-index: -1;
			transform: translateX(-50%);
		}
	}

	hgroup {
		width: 100%;
		max-width: var(--content-width);
		z-index: 1;
	}

	h1 {
		font-size: 92px;
		font-family: var(--font-misc);
		/* font-feature-settings: 'ss01'; */
	}
</style>
