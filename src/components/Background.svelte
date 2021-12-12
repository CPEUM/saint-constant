<script>

</script>


<svg
	viewBox="0 0 1000 2000"
	preserveAspectRatio=xMidYMin
>
	<filter id="morph">
		<feGaussianBlur in="SourceGraphic" stdDeviation="50" />
		<feComposite mode="saturation" />
	</filter>
	<g filter="url(#morph)">
		<circle cx="50" cy="350" r="350" fill="blue" />
		<circle cx="350" cy="50" r="250" fill="yellow" />
		<circle cx="150" cy="50" r="150" fill="red" />
	</g>
</svg>


<style>
	svg {
		overflow: visible;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	g {
		width: 100%;
		height: 100%;
		overflow: visible;
	}
</style>