<script lang="ts">
	import Legend from '$components/legend/Legend.svelte';
	import Loading from '$components/Loading.svelte';
	import Image from '$components/primitives/Image.svelte';

	export let src: string;
	export let description: string;

	let loaded = false;
</script>

<figure>
	<div>
		<Image {src} alt={description} on:load={() => loaded = true} />
		{#if loaded}
			<slot name="markers" />
			{:else}
			<Loading />
			{/if}
	</div>
	<slot />
</figure>

<style>
	figure {
		position: relative;
	}
</style>