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
		z-index: 1;
		text-decoration: none;
		border-radius: 3px;
		transition: all .25s;

		&:hover {
			background-color: rgb(0,0,0, .05);
			box-shadow: 0px 0px 0px 4px rgb(0,0,0, .05);
		}
	}
</style>