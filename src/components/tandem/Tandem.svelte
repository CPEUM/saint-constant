<script lang="ts" context="module">

</script>

<script lang="ts">
	import { setContext } from 'svelte';

	setContext('tandem', {

	})
</script>

<section>
	<div>
		<slot name="1" />
	</div>
	<div>
		<slot name="2" />
	</div>
</section>

<style>
	section {
		background-color: grey;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	div {
		flex: 1;
	}
</style>