<script lang="ts">
	import { base } from '$app/paths';
	import logos from '$data/logos';
</script>


<section>
	<div>
		{#each logos.prime as logo}
			<a
				href={logo.href}
				rel="external"
				target="_blank"
				title={logo.alt}
			>
				<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
			</a>
		{/each}
	</div>
	<div>
		{#each logos.second as logo}
			<a
				href={logo.href}
				rel="external"
				target="_blank"
				title={logo.alt}
			>
				<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
			</a>
		{/each}
	</div>
</section>


<style lang="postcss">
	section {
		user-select: none;
		pointer-events: none;
		padding-top: 5rem;
		padding-bottom: 8rem;
		width: 100%;
		max-width: var(--width-lg);

		&:hover a:not(:hover) {
			opacity: .75;
			filter: saturate(0);
		}
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	a {
		pointer-events: all;
		position: relative;
		display: block;
		flex: 1;
		padding: 4rem;
		transition: all .3s ease-in-out;
		max-width: 400px;
		min-width: 200px;
		opacity: .8;

		& img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			position: relative;
			transition: all .25s cubic-bezier(.1, 0, .2, 1);
		}

		&:hover {
			opacity: 1;

			& img {
				transform: scale(1.05);
			}
		}
	}
</style>