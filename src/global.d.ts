/// <reference types="@sveltejs/kit" />

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onenter?: (event?: unknown) => unknown;
		onleave?: (event?: unknown) => unknown;
		onclickoutside?: (event: unknown) => unknown;
	}
}