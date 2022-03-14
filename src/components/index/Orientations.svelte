<script lang="ts">
	import { exerciceRoutes } from '$utils/routes';
	import { intersection } from '$actions/intersect';
	import { mapState } from '$stores/map';
	import { getThemeColors } from '$utils/themeColors';
	import { revealText } from '$actions/revealText';

	let current = null;
	const rootMargin = '-50% 0% -50% 0%';

	function leave() {
		current = null;
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
			style={getThemeColors(ex.key)}
			class:right={i%2 !== 0}
			style:--angle="{-6 + Math.random() * 12}deg"
		>
			<svg height="100" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<text x="50" y="75" font-size="100" text-anchor="middle" dominant-baseline="baseline">0{i + 1}</text>
			</svg>
			<!-- <span class="number" class:right={i%2 !== 0}>0{i + 1}</span> -->
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
					style={getThemeColors(ex.key)}
					style:--angle={Math.random() * 90 + 'deg'}
					style:--size={(Math.random() * 200 + 500) + 'px'}
				>
					<p class="label"
						use:revealText={{
							visible: i === current,
							duration: 850,
							staggerDelay: 175,
							mask: true,
							maskPadding: 0,
							y: '1em',
							granularity: 'word'
						}}
					>
						Exercice 0{i + 1}
					</p>
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
		margin-block: 10vh;
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

	@keyframes stroky {
		from {
			stroke-dashoffset: 0%;
		}
		to {
			stroke-dashoffset: 30%;
		}
	}
	svg {
		overflow: visible;
		position: absolute;
		z-index: -20;
		width: 100vw;
		height: 100%;
		transform: rotate(var(--angle));

		text {
			font-family: var(--font-misc);
			opacity: .7;
			stroke-linejoin: round;
			stroke-linecap: round;
			/* stroke-dasharray: 100% 20%; */
			stroke-dasharray: 10% 20%;
			stroke-width: 3px;
			stroke: var(--accent3);
			fill: var(--accent1);
			/* animation: stroky 60s infinite linear; */
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
		text-decoration: none;
		padding: 0;
		margin: 0;
		max-width: var(--width-sm);
		transform: translateY(-50%);
		transition: all .25s ease-out;

		&.right {
			right: 0;
			text-align: right;
			margin-left: auto;

			& .title {
				text-align: left;
			}
		}
	}

	.disabled {
		/* opacity: 0; */
		pointer-events: none;
		user-select: none;
	}

	.label {
		position: relative;
		font-size: var(--md);
		font-family: var(--font-misc);
		margin: 0;
		font-weight: 600;
		line-height: 1em;
		color: var(--dark1);
		letter-spacing: 4px;
	}

	.title {
		display: inline-block;
		font-size: var(--xxl);
		font-weight: 500;
		line-height: 1em;
		margin-block: 1em;
		color: var(--dark1);
		transition: all .2s ease-out;
		text-align: right;
	}

	.desc {
		margin: 0;
		display: inline-block;
		line-height: 1.25em;
		letter-spacing: .5px;
		padding: 0;
		font-size: var(--lg);
		width: 100%;
		font-weight: 400;
		max-width: 400px;
		color: var(--accent3);
	}
</style>