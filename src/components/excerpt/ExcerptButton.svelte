<script lang="ts">
	import { clickoutside } from '$actions/clickoutside';
	import Loading from '$components/Loading.svelte';
	import { expoOut } from 'svelte/easing';
	import { draw, fade, fly, scale, slide } from 'svelte/transition';
	import { currentExcerptName } from './ExcerptOutlet.svelte';

	export let name: string;
	let current = false;

	function open() {
		currentExcerptName.set(name);
	}

	$: current = name === $currentExcerptName;
</script>

<button class="open" class:active={current} on:click={open} {...$$restProps}>
	<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision" preserveAspectRatio="xMidYMid" class="open-icon">
		<line x1="50" y1="20" x2="50" y2="80" vector-effect="non-scaling-stroke" />
		<line x1="20" y1="50" x2="80" y2="50" vector-effect="non-scaling-stroke" />
	</svg>
	<span>
		<slot />
	</span>
</button>

<style lang="postcss">
	.open {
		cursor: pointer;
		border: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 1.2em 1.5em;
		border-radius: 2em;
		margin: 2rem auto;
		font-size: var(--sm);
		font-family: var(--font-main);
		font-weight: 400;
		box-shadow: 0 0 2px 0 rgba(0, 0, 30, 0);
		background-color: var(--accent1);
		color: var(--dark2);
		letter-spacing: 0.2px;
		transition: all 0.2s ease-out;

		& span {
			white-space: nowrap;
			padding-left: 0.5em;
		}

		&:hover,
		&.active {
			background-color: white;
			color: var(--accent3);
			box-shadow: 0 1em 3em -1.5em var(--accent3);

			& .open-icon {
				transform: rotate(180deg);
			}
		}

		& .open-icon {
			width: 1.75em;
			height: 1.75em;
			padding: 0;
			margin: 0;
			transition: transform 0.3s ease-in-out;

			& line {
				fill: none;
				stroke: currentColor;
				stroke-width: 1.5px;
			}
		}
	}
</style>
