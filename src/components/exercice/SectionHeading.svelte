<script>
	import { revealFlyUp, revealText } from '$actions/revealText';
</script>

<h2
	use:revealText={revealFlyUp}
	{...$$restProps}
>
	<span>
		<slot />
	</span>
</h2>

<style>
	h2 {
		margin: 0 auto;
		max-width: var(--width-md);
	}

	span {
		max-width: var(--width-sm);
	}
</style>