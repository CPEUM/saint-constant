<script>
	import { exerciceRoutes } from '$utils/routes';
	import { getExerciceColors } from '$utils/exerciceColors';
	import { hoverbubble } from '$actions/hoverBubble';
</script>


<div>
	<section>
		{#each exerciceRoutes as ex, i}
			<a
				href={ex.path} sveltekit:prefetch style={getExerciceColors(i)}
				use:hoverbubble={{
					color: 'var(--accent1)',
					size: 350
				}}
			>
				<span>{ex.heading}</span>
				<p>{ex.description}</p>
			</a>
		{/each}
	</section>
</div>



<style lang="postcss">
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 4rem;
		min-height: 80vh;
	}

	section {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		gap: 0;
		/* background-color: var(--light1); */
	}

	a {
		display: inline-flex;
		flex-direction: column;
		text-decoration: none;
		padding: 3rem;
		border-radius: 0;
		transition: all .35s ease-in-out;

		&:hover {
			box-shadow: 0px 25px 60px -15px rgba(0,0,0, .2);

			& span {
				color: var(--dark3);
			}

			& p {
				color: var(--dark3);
			}
		}
	}

	span {
		margin-bottom: 1em;
		font-weight: 500;
		font-size: 24px;
		line-height: 1.4;
		color: var(--accent1);
		transition: all .3s;
	}

	p {
		opacity: .8;
		margin: 0;
		color: var(--dark3);
		line-height: 1.4;
		font-size: 16px;
		font-weight: 400;
		transition: all .3s;
	}
</style>