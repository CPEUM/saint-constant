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
	style:--rotate="{5 - Math.random() * 10}deg"
	style:--scale="{1.2 - Math.random() * .4}, {1.05 - Math.random() * .1}"
>
	<div class="line" />
	<span>
		<slot />
	</span>
</li>

<style lang="postcss">
	.hidden {
		opacity: 0;
		transform: translateY(-20px);
	}

	li {
		position: relative;
		padding: 1em;
		margin: .5em 0;
		opacity: 1;
		background-color: var(--light1);
		border-radius: 1em;
		color: var(--dark1);
		box-shadow: 0 .5em 2em -1em rgba(0, 0, 25, 0.2);
		transition: all .3s calc(var(--index) * var(--staggerDelay)) cubic-bezier(.2, 0, .4, 1);

		&::after {
			content: '';
			border-radius: 1em;
			position: absolute;
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 700px;
			z-index: 1;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			opacity: .7;
		}

		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			border-radius: 16px;
			border: 2px dashed var(--accent1);
			transform: scale(var(--scale)) rotate(var(--rotate));
			opacity: .5;
		}
	}

	span {
		position: relative;
		z-index: 2;
	}

	.line {
		z-index: 2;
		position: absolute;
		top: 1em;
		bottom: 1em;
		left: 1px;
		width: 2px;
		border-radius: 2px;
		background-color: var(--accent2);
		transition: all .5s calc(var(--index) * var(--staggerDelay));
	}

	.hidden .line {
		opacity: 0;
	}
</style>
