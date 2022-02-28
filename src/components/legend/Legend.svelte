<script lang="ts">
	import { setContext } from 'svelte';

	export let size: 'sm' | 'md' = 'md';

	setContext('legend', {

	})
</script>

<dl
	style:font-size={size === 'sm' ? '12px' : '15px'}
	{...$$restProps}
>
	<slot />
</dl>

<style>
	dl {
		padding: 1em;
		border-radius: 1em;
		background-color: var(--light1);
		opacity: .5;
		transition: opacity .35s;
	}

	dl:hover {
		opacity: 1;
	}
</style>