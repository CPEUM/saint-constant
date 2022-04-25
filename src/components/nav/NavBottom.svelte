<script lang="ts">
	import { hoverbubble } from '$actions/hoverBubble';

	import { exercice, route } from '$stores/route';

	let routeItem;

	$: routeItem = $route?.exercices ? $exercice : $route || null;
</script>

<nav>
	{#if routeItem?.previous || routeItem?.previous}
		<a href={routeItem.previous().path} id="prev" use:hoverbubble={{ size: 350 }}>
			<p class="label">&#8592; Revenir</p>
			<p class="title">{routeItem.previous().title}</p>
		</a>
	{/if}
	{#if routeItem?.next}
		<a href={routeItem.next().path} id="next" use:hoverbubble={{ size: 350 }}>
			<p class="label">Poursuivre &#8594;</p>
			<p class="title">{routeItem.next().title}</p>
		</a>
	{/if}
</nav>

<style lang="postcss">
	nav {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-areas: 'prev . next';
		width: 100%;
		max-width: var(--width-lg);
		margin-inline: auto;
		margin-block: 10rem 0;
		padding: 1rem;
		justify-content: center;
		align-items: center;
	}

	#prev {
		grid-area: prev;
	}

	#next {
		grid-area: next;
	}

	a {
		width: auto;
		position: relative;
		flex-grow: 0;
		flex-shrink: 1;
		width: auto;
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		font-family: var(--font-main);
		color: var(--dark1);
		padding: 1rem 1.5rem;
		border-radius: 1.5rem;
		opacity: 0.8;
		transition: all 0.15s;

		&:last-child {
			text-align: right;
		}

		&:hover {
			color: var(--dark3);
			opacity: 1;

			& .label {
				opacity: 1;
			}
		}
	}

	.label {
		font-family: var(--font-misc);
		letter-spacing: 1px;
		opacity: 0.5;
		transition: all 0.15s;
		font-size: 0.8rem;
	}

	p {
		padding: 0;
		margin: 0;
	}
</style>
