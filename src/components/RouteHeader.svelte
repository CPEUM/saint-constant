<script lang="ts">
	import type { RevealTextOptions } from '$actions/revealText';
	import { revealFlyUp, revealText } from '$actions/revealText';
	import { text } from '$transitions/text';
	import { onDestroy } from 'svelte';

	const revealOptions: RevealTextOptions = {...revealFlyUp, granularity: 'char', staggerDelay: 40};
</script>

<header>
	<hgroup>
		<h2 in:text={revealOptions}>
			<slot />
		</h2>
	</hgroup>
</header>

<style lang="postcss">
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 75vh;
		width: 100%;
	}

	hgroup {
		display: block;
		width: 100%;
		max-width: var(--width-md);
	}

	h2 {
		margin: 0;
		padding: 0;
		width: 100%;
		max-width: var(--width-md);
		text-align: left;
		line-height: 1em;
	}
</style>