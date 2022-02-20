<script lang="ts">
	import logos from '$data/logos.json';
</script>


<section>
	{#each logos as logo}
		<a
			href={logo.href}
			rel="external"
			target="_blank"
			title={logo.alt}
		>
			<img src="/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
		</a>
	{/each}
</section>


<style lang="postcss">
	section {
		padding-block: 4rem;
		width: 100%;
		max-width: var(--width-lg);
		min-height: 90vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: stretch;
	}

	a {
		position: relative;
		display: block;
		flex: 1;
		padding: 2rem;
		transition: all .3s ease-in-out;
		max-width: 350px;
		min-width: 150px;
		opacity: .8;

		& img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			position: relative;
			transition: all .3s cubic-bezier(.1, 0, .2, 1);
		}

		&:hover {
			opacity: 1;

			& img {
				transform: translateY(-10px);
			}
		}
	}
</style>