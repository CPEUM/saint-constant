<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	export let heading: string;
</script>


<section>
	<SectionHeading>
		{heading}
	</SectionHeading>
	<slot></slot>
</section>