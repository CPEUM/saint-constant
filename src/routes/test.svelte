<script>
	import { revealText } from '$actions/revealText';
	import { text } from '$transitions/text';

	let visible = false;
	let insert = false;
</script>

<section>
	<label>
		<span>Visibility var: {visible}</span>
		<input bind:checked={visible} type="checkbox" />
	</label>
	<h1 use:revealText={{visible}}>This is <em>a test</em> title</h1>
</section>
<section>
	<label>
		<span>Insert / remove from dom (transition): {insert}</span>
		<input bind:checked={insert} type="checkbox" />
	</label>
	{#if insert}
		<h1 in:text out:text>This is a test title</h1>
	{/if}
</section>
<section>
	<p>Intersection</p>
	<h1 use:revealText={{opacity: .5, hideOnLeave: true}}>This is a test title</h1>
</section>

<style>
	section {
		position: relative;
		height: 70vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid black;
		padding: 0;
		margin: 0;
	}

	label, p {
		position: absolute;
		top: 25%;
	}
</style>