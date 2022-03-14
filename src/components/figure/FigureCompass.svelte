<script lang="ts">
	export let size: string = '40px';
	export let bearing: number;
</script>

<div style:--size={size} {...$$restProps} on:click>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100"
		height="100"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
		style:transform="rotate({bearing}deg)"
	>
		<path vector-effect="non-scaling-stroke" d="M35,50 L50,95 65,50Z" />
		<path d="M35,50 L50,5 65,50Z" id="north" />
		<text x="50" y="0" text-anchor="middle">N</text>
	</svg>
</div>

<style>
	div {
		cursor: pointer;
		width: var(--size);
		height: var(--size);
		background-color: var(--light1);
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		z-index: 1;
		box-shadow: 0 3px 6px -5px var(--dark1);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg {
		pointer-events: none;
		user-select: none;
		width: 60%;
		height: 60%;
		position: absolute;
		overflow: visible;
	}

	text {
		font-size: 40px;
		font-family: var(--font-misc);
		fill: var(--accent3);
	}

	path {
		stroke: rgba(0, 0, 0, 0.15);
		stroke-width: 1px;
		fill: none;
		stroke-linecap: round;
		stroke-linejoin: round;
		/* fill: rgba(0, 0, 0, 0.5); */
	}

	#north {
		stroke: var(--accent3);
		stroke-width: 3px;
		fill: var(--accent2);
	}
</style>
