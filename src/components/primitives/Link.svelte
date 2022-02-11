<script lang="ts">
	import { hoverbubble } from '$actions/hoverBubble';
	import { getRandomThemeColor } from '$utils/randomThemeColor';

	export let href: string;
	export let color = 'var(--accent3)';
	export let hoverColor = 'var(--dark3)';
</script>


<a
	sveltekit:prefetch={$$restProps.rel === 'external' ? undefined : true}
	{href}
	{...$$restProps}
	style:--color={color}
	style:--hover-color={hoverColor}
>
<!-- use:hoverbubble={{color: 'var(--accent1)'}} -->
	{#if $$restProps.rel === 'external'}
		<span class="ext">🡽</span>
	{/if}
	<slot></slot>
</a>


<style lang="postcss">
	a {
		font-weight: 500;
		color: var(--color);
		top: 0;
		left: 0;
		position: relative;
		z-index: 1;
		text-decoration: none;
		border-radius: 3px;
		transition: all .25s;
		--bg-color: rgba(0, 0, 0, 0.05);

		&:hover {
			color: var(--hover-color);
			background-color: var(--bg-color);
			box-shadow: 0px 0px 0px 4px var(--bg-color);
		}
	}

	.ext {
		display: inline;
		font-family: var(--font-misc);
		box-shadow: 0 0 0 .1em var(--color);
		padding-inline: .2em;
		border-radius: .25em;
		font-weight: 600;
		height: 1em;
		margin-right: .25em;
		opacity: .5;
		transition: all .25s;
	}

	a:hover .ext {
		box-shadow: 0 0 0 .1em var(--hover-color);
	}
</style>