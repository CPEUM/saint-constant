<script lang="ts">
	import logos from '$data/logos.json';

	export let dim = false;
	export let size: 'small' | 'large' = 'large'
</script>


<section {...$$restProps}>
	{#each logos as logo}
		<a
			href={logo.href}
			rel="external"
			target="_blank"
			title={logo.alt}
			class:dim
			class:size
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
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
	}

	a {
		position: relative;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 200px;
		margin-inline: 2rem;
		margin-block: 0;
		padding-block: 2rem;
		transition: all .3s ease-in-out;

		& img {
			position: relative;
			transition: all .3s cubic-bezier(.1, 0, .2, 1);
		}

		&:hover img {
			transform: translateY(-10px);
		}
	}

	.dim {
		opacity: .5;
		filter: saturate(0);

		&:hover {
			opacity: .8;
			filter: saturate(1);
		}
	}
</style>