<script>
	import { base } from '$app/paths';

	import Image from '$components/primitives/Image.svelte';
	import Link from '$components/primitives/Link.svelte';
</script>

<h2>Des parcours de déplacements actifs</h2>
<p>
	Le plan directeur d’aménagement des parcs de Toronto (<Link href="https://www.csla-aapc.ca/awards-atlas/tocore-downtown-parks-and-public-realm-plan"
		>TOcore&nbsp;: Dowtown parks and public plan</Link
	>) repense l’espace public des secteurs centraux de Toronto afin d’en améliorer la qualité de vie. Il établit une vision claire pour l’amélioration et l’interconnexion du réseau de parcs et de
	places publiques. Le plan se construit sur l’aménagement d’une ceinture verte autour du centre-ville et la bonification du cadre naturel des grandes artères afin de dessiner un réseau de parcours
	qui relient les grands espaces verts de la ville (<i>City of Toronto</i>, 2018). Ainsi articulée, la structure des parcs devient l’armature à la fois d’un réseau récréatif et de mobilité active.
	La présence de la végétation représente ainsi un élément essentiel de l’expérience quotidienne de la ville.
</p>
<Image style="max-width: var(--width-sm)" src={base + '/media/promenades/extrait-1.jpg'} alt="Image récupérée à https://www.csla-aapc.ca/awards-atlas/tocore-downtown-parks-and-public-realm-plan" />
