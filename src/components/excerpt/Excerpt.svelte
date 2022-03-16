<script lang="ts">
	import { clickoutside } from '$actions/clickoutside';

	import Loading from '$components/Loading.svelte';
	import { expoOut } from 'svelte/easing';
	import { fade, scale, slide } from 'svelte/transition';

	export let name: string;
	let excerptPromise;
	let open = false;

	async function getExcerptComp() {
		return import(`./excerpt-articles/${name}.svelte`);
	}

	function toggle() {
		if (!excerptPromise) {
			excerptPromise = getExcerptComp();
		}
		open = !open;
	}
</script>

<button class="open" on:click={toggle}>
	<span>+&nbsp;<slot /></span>
</button>

{#if open}
	{#await excerptPromise}
		<Loading />
	{:then excerptComp}
		<div class="shadow" transition:fade />
		<article
			transition:scale={{ start: 0.9, duration: 450, easing: expoOut }}
			use:clickoutside
			on:clickoutside={() => (open = false)}
		>
			<button class="close" on:click={() => (open = false)}>Fermer</button>
			<svelte:component this={excerptComp.default} />
		</article>
	{:catch error}
		<!-- catch error -->
	{/await}
{/if}

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
		box-shadow: 0 0 2px 0 rgba(0, 0, 30, 0.4);
		background-color: transparent;
		transition: all 0.2s ease-out;

		&:hover {
			background-color: white;
			box-shadow: 0 1em 3em -1.5em rgba(0, 0, 30, 0.4);
		}
	}

	.shadow {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--light2);
		opacity: 0.75;
	}

	article {
		z-index: 10;
		position: fixed;
		top: 2rem;
		right: 2rem;
		bottom: 2rem;
		left: 2rem;
		padding: 4rem 0;
		background-color: var(--light1);
		border-radius: 2rem;
		overflow-x: hidden;
		overflow-y: overlay;
		box-shadow: 0 20px 125px -25px rgba(0, 0, 30, 0.2);
	}

	.close {
		width: 40px;
		height: 40px;
		position: sticky;
		top: 1rem;
		left: 0;
	}
</style>
