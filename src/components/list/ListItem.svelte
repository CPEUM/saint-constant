<script lang="ts">
	import type { ListContext } from './List.svelte';
	import { getContext } from 'svelte';

	const ctx = getContext<ListContext>('list');
	const numbered = ctx.numbered;
	const index = ctx.index();
	const visible = ctx.visible;
</script>

<li
	class:hidden={!$visible}
	style:--index={index}
	style:--rotate="{4 - Math.random() * 8}deg"
	style:--w="{102 - Math.random() * 4}%"
	style:--h="{103 - Math.random() * 6}%"
>
	<!-- <div class="line" /> -->
	<slot />
</li>

<style lang="postcss">
	.hidden {
		opacity: 0;
		transform: translateY(-10px);

		& * {
			opacity: 0;
		}
	}

	li {
		position: relative;
		padding: 1em 1.5em;
		margin: .25em 0;
		opacity: 1;
		background-color: var(--light1);
		border-radius: 1em;
		color: var(--dark2);
		box-shadow: 0 0 1px 0 rgba(0,0,30, .3);
		transition: all .3s calc(var(--index) * var(--staggerDelay)) cubic-bezier(.2, 0, .4, 1);

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

		&::before {
			content: '';
			z-index: -2;
			position: absolute;
			width: var(--w);
			height: var(--h);
			top: 50%;
			left: 50%;
			border-radius: 16px;
			background-color: var(--accent1);
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 1500px;
			transform: translate(-50%, -50%) rotate(var(--rotate));
			opacity: .65;
		}
	}

	/* .line, */
	li::after {
		z-index: 1;
		content: '';
		opacity: 1;
		position: absolute;
		top: 1.2em;
		bottom: 1.2em;
		left: -.25em;
		width: .5em;
		border-radius: .25em;
		background-color: var(--accent1);
		transition: all .5s calc(var(--index) * var(--staggerDelay));
	}

	.hidden .line {
		opacity: 0;
	}
</style>
