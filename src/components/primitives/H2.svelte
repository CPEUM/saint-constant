<script>
	import { parallax } from '$actions/parallax';
	import { reveal } from '$actions/reveal';
</script>


<h2 use:parallax use:reveal={{stagger: true}}>
	<slot />
</h2>


<style>

</style>