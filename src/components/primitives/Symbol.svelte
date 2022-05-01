<script context="module" lang="ts">
	export type SymbolShape = 'circle' | 'square' | 'triangle' | 'dotted' | 'dashed' | 'line' | null;
	export type SymbolStrokeType = 'solid' | 'dashed' | 'dotted';
</script>

<script lang="ts">
	export let shape: SymbolShape = 'circle';
	export let src: string = null;
	/* Color of the text label, if any */
	export let color: string = 'var(--dark1)';
	export let colorHighlight: string = color;
	export let label: string | number = null;
	/* Fill color of the svg shape */
	export let fill = 'none';
	export let fillHighlight = fill;
	/* Stroke color of the svg shape */
	export let stroke = 'none';
	export let strokeHighlight = stroke;
	export let strokeWidth = 1;
	export let strokeWidthHighlight = strokeWidth;
	export let strokeType: SymbolStrokeType = 'solid';
	/* Interactivity */
	export let highlight = false;

	const size = 50;
	const padding = 5;
	const correctedPadding = padding * 1.5;
	const textSize = size / 2.2;
	const dashArray = strokeType === 'dashed' ? `${3 * strokeWidth}, ${1.5 * strokeWidth}` : strokeType === 'dotted' ? `0, ${2 * strokeWidth}` : null;
	let style;
	$: style = {
		'fill': highlight ? fillHighlight : fill,
		'stroke': highlight ? strokeHighlight : stroke,
		'stroke-width': highlight ? strokeWidthHighlight : strokeWidth,
		'stroke-linecap': shape === 'dashed' ? 'butt' : ('round' as any),
		'stroke-dasharray': dashArray || ''
	};
</script>

{#if !src}
	<svg width={size} height={size} viewBox="0 0 {size} {size}" {...$$restProps}>
		{#if shape === 'square'}
			<rect rx={size / 20} ry={size / 20} x={correctedPadding} y={correctedPadding} width={size - 2 * correctedPadding} height={size - 2 * correctedPadding} {...style} class:highlight />
		{:else if shape === 'circle'}
			<circle cx={size / 2} cy={size / 2} r={size / 2 - padding} {...style} class:highlight />
		{:else if shape === 'triangle'}
			<polygon points="{size / 2} {padding}, {padding} {size - correctedPadding}, {size - padding} {size - correctedPadding}" {...style} class:highlight />
		{:else if ['line', 'dotted', 'dashed'].indexOf(shape) > -1}
			<path d="M{0},{(2 * size) / 3} Q{size / 4},{padding} {size / 2},{size / 2} T{size},{size / 3}" {...style} class:highlight />
		{:else if Boolean(src)}
			<!-- To implement! -->
			<text>Source: {src}</text>
		{/if}
		{#if label}
			<text font-size={textSize} font-family="var(--font-display)" font-weight="600" dy=".3em" x="50%" y="50%" text-anchor="middle" fill={highlight ? colorHighlight : color}>
				{label}
			</text>
		{/if}
	</svg>
{:else}
	<div style:background-image="url({src})" {...$$restProps} />
{/if}

<style lang="postcss">
	svg {
		position: relative;
		user-select: none;
		width: 100%;
		height: 100%;
		overflow: visible;
		margin: 0;
		padding: 0;

		& * {
			transition: all 0.2s;
		}
	}

	div {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		/* border-radius: 6px; */
		box-shadow: inset 0 0 0 2px var(--light2);
	}

	.interactive {
		cursor: pointer;
		transition: all 0.3s ease-out;
	}

	.highlight,
	.interactive:hover {
		filter: drop-shadow(0px 5px 8px rgba(17, 17, 31, 0.25));
	}
</style>
