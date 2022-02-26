<script lang="ts">
	import type { ListContext } from './List.svelte';
	import { getContext } from 'svelte';

	const ctx = getContext<ListContext>('list');
	const numbered = ctx.numbered;
	const index = ctx.index();
	const visible = ctx.visible;
</script>

<li
	class:hidden={!$visible}
	style:--index={index}
>
	<slot />
</li>

<style>
	li {
		position: relative;
		opacity: 1;
		transition: all .4s calc(var(--index) * 120ms) cubic-bezier(.2, 0, .4, 1);
	}

	.hidden {
		opacity: 0;
	}
</style>
