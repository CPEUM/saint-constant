<script lang="ts" context="module">
	export async function load({ url }) {
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
