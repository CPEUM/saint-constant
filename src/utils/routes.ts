import { base } from '$app/paths';
import { writable } from 'svelte/store'

export const exerciceRoutes = [
		{
				title: 'Agroparc',
				path: `${base}/ideation/agroparc`,
				heading: 'L’agroparc de Saint-Constant',
				description: 'Revitaliser le noyau villageois par le développement d’un pôle d’interconnexion entre le milieu urbain et rural',
				cssPrefix: 'agroparc'
		},
		{
				title: 'Promenades citoyennes',
				path: `${base}/ideation/promenades-citoyennes`,
				heading: 'Les promenades citoyennes de Saint-Constant',
				description: 'Aménager des parcours de mobilité active afin de faire la promotion de la qualité du cadre de vie et des milieux naturels de Saint&#8209;Constant',
				cssPrefix: 'promenades'
		},
		{
				title: 'Pôles de mixité & de densification',
				path: `${base}/ideation/poles-mixite-densification`,
				heading: 'Les pôles de mixité et de densification',
				description: 'Concevoir des aires de densification du territoire qui s’intègrent au paysage actuel',
				cssPrefix: 'poles'
		}
]


function createRoutes() {
	const {subscribe, update} = writable([
		{
				title: 'Accueil',
				path: `${base}/`,
		},
		{
				title: 'Équipe & partenaires',
				path: `${base}/equipe-partenaires`,
		},
		{
				title: 'Exercices d’idéation',
				path: exerciceRoutes[0].path,
				exercices: true
		},
		{
				title: 'Principes directeurs',
				path: `${base}/principes-directeurs`,
		},
		{
			title: 'Conclusion',
			path: `${base}/conclusion`,
		},
	]);

	return {
		subscribe,
		setExercice: (path) => update(rs => rs.map(r => r.exercices ? {...r, path} : r))
	}
}

export const routes = createRoutes();