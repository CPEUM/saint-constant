<script lang="ts">
	import { exerciceRoutes } from '$utils/routes';
	import { getExerciceColors } from '$utils/exerciceColors';
	import { hoverbubble } from '$actions/hoverBubble';
	import { intersection } from '$actions/intersect';
	import { debounce } from '$utils/debounce';
	import { fly } from 'svelte/transition';
	import { mapState } from '$stores/map';

	let current = null;
	let prev = null;
	const rootMargin = '-50% 0% -50% 0%';
	const dist = 100;

	$:	console.log(prev);

	function leave() {
		mapState.setClass('');
		current = null;
		prev = null;
	}

	function exEnter(i: number) {
		mapState.setClass(i%2 === 0 ? 'medium right' : 'medium left');
		current = i;
	}

	function exLeave(i: number) {
		prev = current ? i : null;
	}
</script>

<section
	use:intersection
	on:leave={leave}
>
	{#each exerciceRoutes as ex, i}
		<div
			class="triggers"
			use:intersection={{rootMargin}}
			on:enter={() => exEnter(i)}
			on:leave={() => exLeave(i)}
		/>
	{/each}
	<div class="board">
		{#if current !== null}
			{#key current}
				<a
					in:fly={{y: prev === null ? 0 : current > prev ? dist : -dist}}
					out:fly={{y: current === null ? 0 : current < prev ? dist : -dist}}
					href={exerciceRoutes[current].path}
					sveltekit:prefetch
					style={getExerciceColors(current)}
					use:hoverbubble={{
						color: 'var(--accent1)',
						size: 350
					}}
				>
					<span>{exerciceRoutes[current].heading}</span>
					<p>{exerciceRoutes[current].description}</p>
				</a>
			{/key}
		{/if}
	</div>
</section>

<style lang="postcss">
	section {
		position: relative;
		width: 100%;
		max-width: var(--width-lg);
		margin-block: 50vh;
		margin-inline: auto;
	}

	.triggers {
		position: relative;
		width: 100%;
		height: 100vh;
		padding-block: 4rem;
	}

	.board {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}

	a {
		position: sticky;
		top: 40%;
		display: block;
		background-color: white;
		padding: 2rem;
		max-width: var(--width-sm);
	}
</style>