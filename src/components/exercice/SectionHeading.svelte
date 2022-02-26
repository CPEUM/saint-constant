<script>
	import { revealText } from '$actions/revealText';
</script>

<h2
	use:revealText={{y: '1em', mask: true, granularity: 'word', staggerDelay: 60}}
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