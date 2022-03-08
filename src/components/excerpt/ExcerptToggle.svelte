<script lang="ts">
	export let name: string;
</script>

<button>
	<span><slot /></span>
</button>

<style lang="postcss">
	button {
		cursor: pointer;
		border: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 1.2em 1.5em;
		border-radius: 2em;
		margin: 2rem auto;
		font-size: var(--sm);
		font-family: var(--font-main);
		font-weight: 400;
		box-shadow: 0 0 2px 0 rgba(0,0,30, .4);
		background-color: transparent;
		transition: all .2s ease-out;

		&:hover {
			background-color: white;
			box-shadow: 0 1em 3em -1.5em rgba(0,0,30, .4);
		}
	}

	span {
	}
</style>