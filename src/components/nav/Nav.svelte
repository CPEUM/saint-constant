<script>
	import NavExercices from '$components/nav/NavExercices.svelte';
	import NavMapToggle from './NavMapToggle.svelte';
	import NavMain from './NavMain.svelte';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<header
		in:fly={{ opacity: 0, y: -20, duration: 800, easing: expoOut, delay: 1000 }}
	>
		<div>
			<section>
				<NavMain />
				<NavExercices />
			</section>
			<NavMapToggle />
		</div>
	</header>
{/if}

<style lang="postcss">
	header {
		position: fixed;
		z-index: 10;
		pointer-events: none;
		user-select: none;
		font-family: var(--font-display);
		font-size: 16px;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 1em;
		line-height: 1.5em;
		top: 0rem;
		margin: 0;
		width: 100%;
		height: auto;
	}

	div {
		width: 100%;
		max-width: var(--width-md);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	section {
		display: flex;
		flex-direction: column;
	}
</style>
