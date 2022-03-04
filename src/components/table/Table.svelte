<script lang="ts">
	export let columns: number;
	export let caption: string;
</script>

	<!-- <div class="table">
		<div class="header">Valeurs territoriales en émergences</div>
		<div class="subheader">Une ville pour tous</div>
		<div class="subheader">Une ville de proximité</div>
		<div class="subheader">Une ville de nature</div>
		<div class="subheader">Une ville ancrée dans son territoire agricole</div>
	</div> -->
	<table>
		<slot />
		<caption>{caption}</caption>
	</table>

<style lang="postcss">
	table {
		display: grid;
		/* columns: var(--columns); */
	}

	captions {

	}
</style>