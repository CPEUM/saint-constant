<script>
	export let title;
	export let subtitle;
	export let key;
</script>


<section>
	<header>
		<h3>{title}</h3>
		<span>{subtitle}</span>
	</header>
	<div>
		<slot></slot>
	</div>
</section>


<style>
	section {
		width: 100%;
	}

	div {
		width: 100%;
		background-color: white;
	}
</style>