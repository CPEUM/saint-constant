<script lang="ts">
	import { setContext } from 'svelte';

	export let size: 'small' | 'medium' = 'medium';

	setContext('legend', {});
</script>

<!-- <dl style:font-size={size === 'small' ? '13px' : '15px'} {...$$restProps}> -->
<dl style:font-size="13px" {...$$restProps}>
	<slot />
</dl>

<style>
	dl {
		display: inline-flex;
		position: relative;
		flex-direction: column;
		gap: 0;
		padding: 0;
		margin: 0;
		border-radius: 1rem;
		background-color: rgba(250, 250, 255, 0.3);
		backdrop-filter: blur(6px);
		width: auto;
		max-width: 350px;
		height: auto;
		max-height: calc(80vh);
		overflow-y: auto;
		overflow-x: hidden;
		box-shadow: 0 0 1px 0 rgba(0, 0, 30, 0);
		transition: all 0.2s ease-out;
	}

	dl:hover {
		background-color: var(--light1);
		opacity: 1;
		box-shadow: 0 24px 50px -24px rgba(0, 0, 30, 0.25);
	}
</style>
