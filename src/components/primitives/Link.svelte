<script>
	import { hoverbubble } from '$actions/hoverBubble';
	import { getRandomThemeColor } from '$utils/randomThemeColor';

	export let href;
</script>


<a
	{href}
	use:hoverbubble={{color: 'var(--accent3)'}}
>
	<slot></slot>
</a>


<style lang="postcss">
	a {
		font-weight: 500;
		color: var(--accent1);
		top: 0;
		left: 0;
		position: relative;
		text-decoration: none;
		border-radius: 5px;
		transition: all .25s;

		&:hover {
			color: var(--dark3);
			background-color: rgb(var(--rgb-accent3), .2);
		}
	}
</style>