<script>
import { slide } from 'svelte/transition';


	const delay = 500;
	let loading = false;
	let promise;
	let cancel;
	
	function start() {
		if (cancel) cancel();
		loading = true
		promise = new Promise((resolve, reject) => {
			cancel = reject;
			setTimeout(() => resolve(true), delay);
		});
	}
	
	function end() {
		if (promise) {
			promise.then(valid => {
				if (valid) {
					loading = false;
					cancel = null;
				}
			})
		}
	}
</script>


<svelte:window
	on:sveltekit:navigation-start={start}
	on:sveltekit:navigation-end={end}
/>


{#if loading}
	<div transition:slide={{}}>
		Loading!
	</div>
{/if}


<style>
	div {
		position: absolute;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
	}
</style>