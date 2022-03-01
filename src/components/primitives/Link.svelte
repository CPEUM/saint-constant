<script lang="ts">
	import { hoverbubble } from '$actions/hoverBubble';
	import { getRandomThemeColor } from '$utils/randomThemeColor';

	export let href: string;
	export let color = 'var(--accent3)';
	export let hoverColor = 'var(--dark3)';

	let external = $$restProps.rel === 'external' || !!href.match(/^(https:|http:|www\.)\S*/) || undefined;
</script>


<a
	sveltekit:prefetch={external ? undefined : true}
	{href}
	{...$$restProps}
	style:--color={color}
	style:--hover-color={hoverColor}
>
	<span class="link-text">
		<slot></slot>
	</span>&emsp;
	{#if external}
		<span class="ext">
			<svg xmlns="http://www.w3.org/2000/svg" width=100 height=100 viewBox="0 0 100 100">
				<line x1=5 y1=95 x2=90 y2=10 />
				<path d="M 30,5 L 95,5 95,70" />
			</svg>
		</span>
	{/if}
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
		border-radius: 1.5em;
		transition: all .15s ease-out;
		white-space: nowrap;
		vertical-align: bottom;
		padding-inline: .2em;
		--bg-color: rgba(0, 0, 0, 0.05);

		&:hover {
			color: var(--hover-color);
			background-color: var(--bg-color);
			box-shadow: 0px 0px 0px 8px var(--bg-color);

			& .ext {
				/* background-color: var(--light1); */
				opacity: 1;
			}

			& line,
			& path {
				stroke: var(--hover-color);
				stroke-dashoffset: -300;
			}
		}
	}

	.link-text {
		white-space: normal;
	}

	.ext {
		position: relative;
		top: .22em;
		left: 0;
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		padding: .25em;
		border-radius: .25em;
		opacity: .5;
		transition: all .5s;
	}

	svg {
		display: block;
		position: relative;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	line,
	path {
		stroke-width: 16;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		stroke: var(--color);
		transition: all .8s cubic-bezier(.2, 0, .2, 1);
		stroke-dasharray: 200 100;
		stroke-dashoffset: 0;
	}
</style>