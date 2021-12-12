import { base } from '$app/paths';
import { writable } from 'svelte/store'

export const exerciceRoutes = [
		{
				title: 'Agroparc',
				path: `${base}/ideation/agroparc`,
				heading: 'L’agroparc de Saint-Constant',
				description: 'Revitaliser le noyau villageois par le développement d’un pôle d’interconnexion entre le milieu urbain et rural',
				// accent1: 'rgb(235 134 115)',
				// accent2: 'rgb(240 165 130)',
				// accent3: 'rgb(250 204 178)',
		},
		{
				title: 'Promenades citoyennes',
				path: `${base}/ideation/promenades-citoyennes`,
				heading: 'Les promenades citoyennes de Saint-Constant',
				description: 'Aménager des parcours de mobilité active afin de faire la promotion de la qualité du cadre de vie et des milieux naturels de Saint-Constant',
				// accent1: 'rgb(59 181 108)',
				// accent2: 'rgb(124 218 127)',
				// accent3: 'rgb(164, 250, 172)'
		},
		{
				title: 'Pôles de mixité & de densification',
				path: `${base}/ideation/poles-mixite-densification`,
				heading: 'Les pôles de mixité et de densification',
				description: 'Concevoir des aires de densification du territoire qui s’intègrent au paysage actuel',
				// accent1: 'rgb(118 111 230)',
				// accent2: 'rgb(146 159 243)',
				// accent3: 'rgb(180 190 245)'
		},
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