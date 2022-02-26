<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';

	export interface ListContext {
		numbered: boolean;
		index: () => number;
		visible: Writable<boolean>;
	}
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { intersection } from '$actions/intersect';

	export let numbered: boolean = false;
	let length = 0;
	const visible = writable(false);

	setContext<ListContext>('list', {
		numbered,
		index: () => length++,
		visible
	});
</script>

<ul
	use:intersection={{rootMargin: '-30% 0px -30%'}}
	on:enter|once={() => visible.set(true)}
>
	<slot />
</ul>

<style lang="postcss">

</style>