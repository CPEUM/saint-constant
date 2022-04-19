<script lang="ts">
	import { route } from '$stores/route';
</script>

<nav>
	{#if $route?.previous}
		<a href={$route.previous().path}>
			<p class="label">&#8592; Revenir</p>
			<p class="title">{$route.previous().title}</p>
		</a>
	{/if}
	{#if $route?.next}
		<a href={$route.next().path}>
			<p class="label">Poursuivre &#8594;</p>
			<p class="title">{$route.next().title}</p>
		</a>
	{/if}
</nav>

<style lang="postcss">
	nav {
		display: flex;
		flex-direction: row;
		width: 100%;
		max-width: var(--width-lg);
		margin-inline: auto;
		margin-block: 10rem 0;
		padding: 1rem;
		justify-content: flex-end;
		align-items: flex-start;
	}

	a {
		flex: 1;
		max-width: 50%;
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		font-family: var(--font-main);
		color: var(--dark1);
		padding: 1rem 1.5rem;
		border-radius: 1.5rem;
		opacity: .8;
		box-shadow: 0 0 0 0 transparent;
		transition: all .15s ease-out;

		&:last-child {
			text-align: right;
		}

		&:hover {
			background-color: var(--light1);
			color: var(--dark3);
			opacity: 1;
			box-shadow: 0 1em 3em -2em rgba(0,0,20, .5);
		}
	}

	.label {
		font-family: var(--font-misc);
		letter-spacing: 1px;
		opacity: .5;
	}

	p {
		width: 100%;
		max-width: 100%;
		padding: 0;
		margin: 0;
	}
</style>
