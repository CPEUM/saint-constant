<script lang="ts">
	import { exerciceRoutes } from '$utils/routes';
	import { intersection } from '$actions/intersect';
	import { debounce } from '$utils/debounce';
	import { mapState } from '$stores/map';
	import { getAccentColors } from '$utils/exerciceColors';
	import { revealText } from '$actions/revealText';
	import { text } from '$transitions/text';
	import { mainScroll } from '$stores/scroll';

	let current = 0;
	const rootMargin = '-50% 0% -50% 0%';

	function leave() {
		mapState.setClass('');
	}

	function exEnter(i: number) {
		mapState.setClass(i%2 === 0 ? 'medium right' : 'medium left');
		current = i;
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
			style={getAccentColors(ex.cssPrefix)}
		>
			<span class="number" class:right={i%2 !== 0}>{i + 1}</span>
		</div>
	{/each}
	<div id="board">
		<div id="board-content">
			{#each exerciceRoutes as ex, i}
				<a
					class:right={i%2 !== 0}
					class:disabled={i !== current}
					href={ex.path}
					sveltekit:prefetch
					style={getAccentColors(ex.cssPrefix)}
				>
					<p
						class="title"
						use:revealText={{
							visible: i === current,
							duration: 650,
							staggerDelay: 55,
							mask: true,
							maskPadding: '.1em',
							y: '1em',
							granularity: 'word'
						}}
					>
						{ex.heading}
					</p>
					<p
						class="desc"
						use:revealText={{
							visible: i === current,
							duration: 350,
							staggerDelay: 35,
							rotateX: -80,
							granularity: 'word'
						}}
					>
						{@html ex.description}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		position: relative;
		width: 100%;
		max-width: var(--width-lg);
		margin-block: 25vh;
		margin-inline: auto;
	}

	.triggers {
		position: relative;
		width: 100%;
		height: 150vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.number {
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		font-size: 120vh;
		font-family: var(--font-misc);
		align-items: center;
		justify-content: flex-start;
		z-index: -1;
		color: var(--accent1);
		opacity: .5;

		&.right {
			justify-content: flex-end;
		}
	}

	#board {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding-inline: 4rem;
	}

	#board-content {
		width: 100%;
		height: 100vh;
		position: sticky;
		top: 0;
	}

	a {
		position: absolute;
		top: 50%;
		left: 0;
		display: block;
		background-color: transparent;
		text-decoration: none;
		padding: 0;
		margin: 0;
		max-width: var(--width-sm);
		transform: translateY(-50%);
		color: var(--dark2);

		&.right {
			right: 0;
			text-align: right;
			margin-left: auto;
		}
	}

	.disabled {
		pointer-events: none;
		user-select: none;
	}

	.title {
		display: inline-block;
		font-size: var(--xxxl);
		font-weight: 500;
		line-height: 1em;
	}

	.desc {
		display: inline-block;
		line-height: 1.5em;
		letter-spacing: .5px;
		padding: 0;
		font-size: var(--md);
		width: 100%;
		max-width: 400px;
		color: var(--accent3);
	}
</style>