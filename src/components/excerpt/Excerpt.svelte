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

<button class="open" class:active={open} on:click={toggle}>
	<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision" preserveAspectRatio="xMidYMid" class="open-icon">
		<line x1="50" y1="20" x2="50" y2="80" vector-effect="non-scaling-stroke" />
		<line x1="20" y1="50" x2="80" y2="50" vector-effect="non-scaling-stroke" />
	</svg>
	<span>
		<slot />
	</span>
</button>

{#if open}
	{#await excerptPromise}
		<Loading style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;" />
	{:then excerptComp}
		<div class="shadow" transition:fade={{ duration: 150 }} />
		<article>
			<button transition:fly={{ y: -30, easing: expoOut, duration: 500 }} on:introend={() => (closeIcon = true)} class="close" on:click={() => (open = false)}>
				<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision" preserveAspectRatio="xMidYMid" class="close-icon">
					{#if closeIcon}
						<line in:draw={{}} x1="30" y1="30" x2="70" y2="70" vector-effect="non-scaling-stroke" />
						<line in:draw={{ delay: 150 }} x1="30" y1="70" x2="70" y2="30" vector-effect="non-scaling-stroke" />
					{/if}
				</svg>
			</button>
			<div class="content" use:clickoutside on:clickoutside={() => (open = false)} transition:scale={{ start: 0.95, duration: 350, easing: expoOut }}>
				<svelte:component this={excerptComp.default} />
			</div>
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
		box-shadow: 0 0 2px 0 rgba(0, 0, 30, 0);
		background-color: var(--accent1);
		color: var(--dark2);
		letter-spacing: 0.2px;
		transition: all 0.2s ease-out;

		& span {
			padding-left: 0.5em;
		}

		&:hover,
		&.active {
			background-color: white;
			color: var(--accent3);
			box-shadow: 0 1em 3em -1.5em var(--accent3);

			& .open-icon {
				transform: rotate(180deg);
			}
		}

		& .open-icon {
			width: 1.75em;
			height: 1.75em;
			padding: 0;
			margin: 0;
			transition: transform 0.3s ease-in-out;

			& line {
				fill: none;
				stroke: currentColor;
				stroke-width: 1.5px;
			}
		}
	}

	.shadow {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--accent2);
		opacity: 0.75;
	}

	article {
		z-index: 10;
		position: fixed;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
		padding: 2rem;
	}

	.content {
		display: block;
		margin: 0 auto;
		border-radius: 2rem;
		background-color: var(--light1);
		/* box-shadow: 0 20px 125px -25px rgba(0, 0, 30, 0.2); */
		box-shadow: 0 0px 2px rgba(0, 0, 30, 0.2);
		padding: 4rem 6rem;
		max-width: var(--width-lg);
		height: auto;
		flex: 1;
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
		padding: 0.5rem;
		background-color: var(--light1);
		box-shadow: 0 0 2px 0 rgba(0, 0, 20, 0.5);
		transition: all 0.2s;

		&:hover {
			background-color: white;
			box-shadow: 0 15px 25px -10px rgba(0, 0, 20, 0.2);
		}

		& .close-icon {
			position: absolute;
			width: 80%;
			height: 80%;
			top: 10%;
			left: 10%;

			& line {
				stroke: currentColor;
				stroke-width: 2px;
			}
		}
	}
</style>
