<script>
	async function getComp(excerptName) {
		return import(`./${excerptName}.svelte`)
	}
</script>


<article>
	<slot></slot>
</article>


<style>
	article {
		background-color: purple;
	}
</style>