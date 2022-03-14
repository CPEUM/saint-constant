<script lang="ts">
	import { intersection } from '$actions/intersect';
	import { tooltip } from '$actions/tooltip';
	import { base } from '$app/paths';
	import logos from '$utils/logos';

	let visible = false;

	function show() {
		visible = true;
	}
</script>

<section
	use:intersection
	on:enter|once={show}
	visible={visible}
>
	{#each [...logos.prime, ...logos.second] as logo}
		<a
			href={logo.href}
			rel="external"
			target="_blank"
			title={logo.alt}
			use:tooltip={{follow: true, position: 'bottom'}}
		>
			<img src="{base}/media/logos/{logo.filename}" alt="Logo: {logo.alt}" />
		</a>
	{/each}
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		padding-block: 4rem;
		width: 100%;
		max-width: var(--width-md);
	}
	
	a {
		position: relative;
		display: block;
		margin: 2rem auto;
		flex: 1 0 50%;
		padding: 2rem;
		opacity: .8;
		transition: all .2s ease-out;

		& img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			position: relative;
			transition: all .2s cubic-bezier(.1, 0, .2, 1);
		}

		&:hover {
			opacity: 1;

			& img {
				transform: scale(1.02);
			}
		}
	}

	/* a {
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
	} */

	.dim {
		opacity: .5;
		filter: saturate(0);

		&:hover {
			opacity: .8;
			filter: saturate(1);
		}
	}
</style>