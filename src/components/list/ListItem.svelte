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
	style:--w="{110 - Math.random() * 12}%"
	style:--h="{105 - Math.random() * 6}%"
>
	<div class="line" />
	<div class="slot">
		<slot />
	</div>
</li>

<style lang="postcss">
	.hidden {
		opacity: 0;
		transform: translateY(-20px);

		&::after,
		&::before {
			opacity: 0;
		}
	}

	li {
		position: relative;
		padding: 1em;
		margin: .5em 0;
		opacity: 1;
		background-color: var(--light1);
		border-radius: 1em;
		color: var(--dark1);
		box-shadow: 0 0 1px 0 rgba(0,0,30, .3);
		/* border: 1px solid rgba(0, 0, 30, 0.1); */
		transition: all .3s calc(var(--index) * var(--staggerDelay)) cubic-bezier(.2, 0, .4, 1);

		&::after,
		&::before {
			transition: all .25s ease-out;
		}

		&::after {
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
			opacity: .6;
		}

		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			width: var(--w);
			height: var(--h);
			top: 50%;
			left: 50%;
			border-radius: 16px;
			/* border: 1px solid var(--accent1); */
			background-color: var(--accent1);
			background-image: url(/grain.svg);
			background-repeat: repeat;
			background-size: 1500px;
			transform: translate(-50%, -50%) rotate(var(--rotate));
			opacity: .65;
		}
	}

	.slot {
		position: relative;
		z-index: 2;
	}

	.line {
		opacity: .5;
		position: absolute;
		top: 1em;
		bottom: 1em;
		left: -.5em;
		width: .5em;
		border-radius: .5em 0 0 .5em;
		background-color: var(--accent2);
		transition: all .5s calc(var(--index) * var(--staggerDelay));
	}

	.hidden .line {
		opacity: 0;
	}
</style>
