<script lang="ts">
	export let name: string;
	// export let comp;
	async function getExcerptComp() {
		return import(`./excerpt-articles/${name}.svelte`);
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