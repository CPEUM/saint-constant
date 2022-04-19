<script lang="ts">
	import type { ListContext } from './List.svelte';
	import { getContext } from 'svelte';

	const ctx = getContext<ListContext>('list');
	const numbered = ctx.numbered;
	const index = ctx.index();
</script>

<li
	style:--index={index}
	style:--rotate="{3 - Math.random() * 6}deg"
	style:--w="{102 - Math.random() * 4}%"
	style:--h="{103 - Math.random() * 6}%"
>
	<!-- <div class="line" /> -->
	<slot />
</li>

<style lang="postcss">
	:global(ul[visible='false']) {
		& li {
			opacity: 0;
			transform: translateY(-10px);

			& * {
				opacity: 0;
			}
		}
	}

	li {
		position: relative;
		padding: 1em 1.5em;
		margin: 1em 0;
		opacity: 1;
		background-color: var(--light1);
		border-radius: 1em;
		color: var(--dark1);
		/* border: .5em solid var(--light3); */
		/* box-shadow: 0 0 2px 0 var(--accent1); */
		box-shadow: 0 1rem 3rem -2rem var(--accent1);
		transition: all 0.3s calc(var(--index) * var(--staggerDelay)) cubic-bezier(0.2, 0, 0.4, 1);

		/* &::after {
			content: '';
			border-radius: 1em;
			position: absolute;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 1700px;
			z-index: 1;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: .5;
		} */

		&::after {
			z-index: 1;
			content: '';
			opacity: 1;
			position: absolute;
			top: 1.25em;
			/* height: 1em; */
			bottom: 1.25em;
			left: -0.25em;
			width: 0.5em;
			border-radius: 0.5em;
			background-color: var(--accent1);
			transition: all 0.5s calc(var(--index) * var(--staggerDelay));
		}

		&::before {
			content: '';
			z-index: -2;
			position: absolute;
			width: var(--w);
			height: var(--h);
			top: 50%;
			left: 50%;
			border-radius: 16px;
			/* box-shadow: 0 0 2px 0 var(--accent2); */
			background-color: var(--accent1);
			/* background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 1200px; */
			transform: translate(-50%, -50%) rotate(var(--rotate));
			opacity: 0.5;
		}
	}
</style>
