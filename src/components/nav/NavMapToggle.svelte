<script>
	import { isMapFull } from '$stores/map';
	import { draw, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
</script>


<label
id="map-toggle"
for="map-toggle-input"
class:active={$isMapFull}
>
	<input
		id="map-toggle-input"
		type="checkbox"
		bind:checked={$isMapFull}
		in:fly={{x: -40, easing: expoOut, duration: 500, delay: 1500}}
	>
	<svg version="1.1" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
		{#if !$isMapFull}
			<path in:draw={{}} d="M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
			c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z" vector-effect="non-scaling-stroke"/>
			<circle in:draw={{delay: 150}} cx="50.5" cy="37.4" r="11.1" vector-effect="non-scaling-stroke"/>
		{:else}
			<line in:draw={{}} x1="30" y1="30" x2="70" y2="70" vector-effect="non-scaling-stroke"/>
			<line in:draw={{delay: 150}} x1="30" y1="70" x2="70" y2="30" vector-effect="non-scaling-stroke"/>
		{/if}
	</svg>
</label>


<style lang="postcss">
	label {
		pointer-events: initial;
		position: relative;
		display: flex;
		align-content: center;
		justify-content: center;
		width: 3em;
		height: 3em;
		border-radius: 50%;
		cursor: pointer;
		padding: 10px;
		margin: 1em 0 0 0;
		background-color: var(--light1);
		border: none;
		appearance: none;
		transition: all .2s ease-in-out;

		&:hover {
			background-color: var(--light3);
			background-color: white;
			border-radius: 40%;
		}

		&.active {
			background-color: var(--light1);

			&:hover {
				background-color: white;
			}

			& svg {
				stroke: rgb(223, 84, 66);
			}
		}

		& svg {
			fill: none;
			stroke: var(--dark3);
			stroke-width: 2px;
			shape-rendering: geometricPrecision;
		}

		& input[type='checkbox'] {
			display: none;
		}
	}
</style>