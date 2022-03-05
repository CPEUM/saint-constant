<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';

	export interface ListContext {
		numbered: boolean;
		index: () => number;
	}
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { intersection } from '$actions/intersect';

	export let numbered: boolean = false;
	export let staggerDelay: number = 150;
	let length = 0;
	let out = true;

	setContext<ListContext>('list', {
		numbered,
		index: () => length++
	});

	function show() {
		out = false;
	}
</script>

<ul
	{...$$restProps}
	style:--staggerDelay="{staggerDelay}ms"
	use:intersection={{rootMargin: '-30% 0px -30%'}}
	on:enter|once={show}
	{out}
>
	<slot />
</ul>

<style lang="postcss">
	ul {
		position: relative;
		z-index: 0;
		list-style-type: none;
		margin: 0 auto;
		padding: 0;
		padding-bottom: 2em;
		width: 100%;
		max-width: var(--width-sm);
	}
</style>