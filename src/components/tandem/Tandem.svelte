<script lang="ts" context="module">

</script>

<script lang="ts">

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
		/* background-color: grey; */
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		min-height: 100vh;
		gap: 3rem;
	}

	div {
		position: sticky;
		padding-block: 4rem;
		flex: 1;
		min-width: 0;
		top: 3rem;
	}
</style>