<script lang="ts">
	import { clickoutside } from '$actions/clickoutside';

	import Loading from '$components/Loading.svelte';
	import { expoOut } from 'svelte/easing';
	import { draw, fade, fly, scale, slide } from 'svelte/transition';

	export let name: string;
	let excerptPromise;
	let open = false;
	let closeIcon = false;

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
		<Loading style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;" />
	{:then excerptComp}
		<div class="shadow" transition:fade />
		<article
			transition:scale={{ start: 0.9, duration: 450, easing: expoOut }}
			use:clickoutside
			on:clickoutside={() => (open = false)}
		>
			<svelte:component this={excerptComp.default} />
			<button in:fly={{y: 20, delay: 450}} on:introend={() => closeIcon = true}  class="close" on:click={() => (open = false)}>
				<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision" preserveAspectRatio="xMidYMid">
					{#if closeIcon}	
						<line in:draw={{}} x1="30" y1="30" x2="70" y2="70" vector-effect="non-scaling-stroke" />
						<line
							in:draw={{ delay: 150 }}
							x1="30"
							y1="70"
							x2="70"
							y2="30"
							vector-effect="non-scaling-stroke"
						/>
					{/if}
				</svg>
			</button>
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
		--size: 50px;
		cursor: pointer;
		width: var(--size);
		height: var(--size);
		max-width: var(--size);
		border-radius: 50%;
		border: none;
		position: fixed;
		z-index: 20;
		top: 2.5rem;
		left: 2.5rem;
		padding: .5rem;
		background-color: var(--light1);
		box-shadow: 0 0 2px 0 rgba(0,0,20, .5);
		transition: all .2s;

		&:hover {
			background-color: white;
			box-shadow: 0 15px 25px -10px rgba(0,0,20, .2);
		}

		& svg {
			position: absolute;
			width: 80%;
			height: 80%;
			top: 10%;
			left: 10%;
		}

		& line {
			stroke: var(--dark2);
			stroke-width: 2px;
		}
	}
</style>
