<script lang="ts">
	import { setContext } from 'svelte';

	export let size: 'small' | 'medium' = 'medium';

	setContext('legend', {

	})
</script>

<dl
	style:font-size={size === 'small' ? '13px' : '15px'}
	{...$$restProps}
>
	<slot />
</dl>

<style>
	dl {
		opacity: .9;
		display: inline-flex;
		flex-direction: column;
		gap: 0;
		padding: 3px;
		margin: 0;
		border-radius: 1rem;
		background-color: var(--light1);
		width: auto;
		max-width: var(--width-sm);
		height: auto;
		box-shadow: 0 0 1px 0 rgba(0,0,30, 0);
		transition: all .2s ease-in-out;
	}

	dl:hover {
		opacity: 1;
		box-shadow: 0 25px 50px -30px rgba(0,0,30, .2);
	}
</style>