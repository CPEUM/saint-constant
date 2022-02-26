<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ url }: LoadInput): Promise<LoadOutput> {
		const queried = exerciceRoutes.find((ex) => ex.path === url.pathname);
		if (queried) {
			return {
				props: {}
			}
		}
		else {
			return {
				status: 308,
				redirect: exerciceRoutes[0].path
			}
		}
	}
</script>

<script lang="ts">
	import { exerciceRoutes } from '$utils/routes';
	import Header from '$components/exercice/Header.svelte';
</script>

<Header />
<slot />

<style lang="postcss">

</style>
