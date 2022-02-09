<script lang="ts">
	export let is_intersecting: boolean = false;
	export let text: string;
	export let duration = 500;
	export let staggerDelay = 20;
	export let y = 0;
	export let x = 0;
	export let opacity = 0;
	export let scale = 1;
	export let rotateX = 50;
	export let transformOrigin = '0 15%';
	export let stagger = true;
	export let mask = false;

	function splitText() {
		let charIndex = 0;
		return text.split(' ').map((word) =>
			word.split('').map((glyph) => ({
				glyph,
				index: charIndex++
			}))
		);
	}
</script>

{#if stagger}
	{#each splitText() as word}
		<span class="word" class:mask style:clip-path="rect()">
			{#each word as char}
				<span
					class="char"
					style:transition-delay="{staggerDelay * char.index}ms"
					style:transition-duration="{duration}ms"
					style:--opacity={opacity}
					style:--y="{y}px"
					style:--x="{x}px"
					style:--scale={scale}
					style:--rotateX="{rotateX}deg"
					style:--transformOrigin={transformOrigin}
					class:hidden={!is_intersecting}
				>
					{char.glyph}
				</span>
			{/each}
			<span class="char" />
		</span>
	{/each}
{:else}
	<span class:hidden={!is_intersecting}>
		{text}
	</span>
{/if}

<style>
	.word {
		display: inline-block;
		position: relative;
		white-space: nowrap;
		transform-style: preserve-3d;
	}

	.mask {
		overflow: hidden;
		padding: 0.1em 0;
		margin: -0.1em 0;
	}

	.char {
		padding: 0;
		margin: 0;
		position: relative;
		display: inline-block;
		transform-origin: var(--transformOrigin);
		transition-property: opacity, transform, top, left;
		transition-timing-function: cubic-bezier(0.2, 0, 0.2, 1);
		transform: scale(1) rotateX(0deg);
		top: 0;
		left: 0;
	}

	.hidden {
		opacity: var(--opacity);
		transform: scale(var(--scale)) rotateX(var(--rotateX));
		top: var(--y);
		left: var(--x);
	}
</style>
