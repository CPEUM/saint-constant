<script lang="ts">
	import Image from '$components/primitives/Image.svelte';
	import { exercice } from '$stores/route';
	import { mainScroll } from '$stores/scroll';
	import { text } from '$transitions/text';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true
	});
</script>

<header>
	{#if mounted}
		{#key $exercice}
			<hgroup style:--scroll="{$mainScroll.y}px">
				<h1
					in:text={{y: '.5em', mask: true, maskPadding: '.1em', granularity: 'word', staggerDelay: 50, delay: 500}}
					out:text={{y: '-.5em', mask: true, maskPadding: '.1em', delay: 0}}
				>
					{$exercice.heading}
				</h1>
			</hgroup>
		{/key}
	{/if}
</header>

<style lang="postcss">
	header {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	hgroup {
		transform: translateY(calc(var(--scroll) * 0.3));
		width: 100%;
		max-width: var(--width-md);
		position: absolute
	}

	h1 {
		width: 100%;
		max-width: 500px;
		display: inline-block;
		font-size: var(--xxxl);
		font-weight: 500;
		line-height: 1em;
	}
</style>