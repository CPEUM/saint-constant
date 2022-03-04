<script lang="ts">
	export let heading: boolean = false;
	export let span: number = 1;
</script>

{#if heading}
	<th>
		<slot />
	</th>
{:else}
	<td>
		<slot />
	</td>
{/if}

<style>

</style>