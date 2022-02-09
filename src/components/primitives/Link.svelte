<script>
	import { hoverbubble } from '$actions/hoverBubble';
	import { getRandomThemeColor } from '$utils/randomThemeColor';

	export let href;
</script>


<a
	{href}
>
<!-- use:hoverbubble={{color: 'var(--accent1)'}} -->
	<slot></slot>
</a>


<style lang="postcss">
	a {
		font-weight: 500;
		color: var(--accent3);
		top: 0;
		left: 0;
		position: relative;
		z-index: 1;
		text-decoration: none;
		border-radius: 3px;
		transition: all .25s;
		--hover-color: rgba(0, 0, 0, 0.05);

		&:hover {
			color: var(--dark3);
			background-color: var(--hover-color);
			box-shadow: 0px 0px 0px 4px var(--hover-color);
		}
	}
</style>