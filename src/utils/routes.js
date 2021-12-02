import { writable } from 'svelte/store'

function createRoutes() {
	const {subscribe, update} = writable([
		{
				title: 'Accueil',
				path: '/',
		},
		{
				title: 'Équipe & partenaires',
				path: '/equipe-partenaires',
		},
		{
				title: 'Exercices d’idéation',
				path: '/ideation/agroparc',
				dynamic: true
		},
		{
				title: 'Principes directeurs',
				path: '/principes-directeurs',
		},
		{
			title: 'Conclusion',
			path: '/conclusion',
		},
	]);

	return {
		subscribe,
		setIdeation: (path) => update(rs => rs.map(r => r.dynamic ? {...r, path} : r))
	}
}

export const routes = createRoutes();

export const exerciceRoutes = [
		{
				title: 'Agroparc',
				path: '/ideation/agroparc',
				heading: 'L’agroparc de Saint-Constant',
				description: 'Revitaliser le noyau villageois par le développement d’un pôle d’interconnexion entre le milieu urbain et rural',
				accent1: 'rgb(235 134 115)',
				accent2: 'rgb(240 165 130)',
				accent3: 'rgb(250 204 178)',
		},
		{
				title: 'Promenades citoyennes',
				path: '/ideation/promenades-citoyennes',
				heading: 'Les promenades citoyennes de Saint-Constant',
				description: 'Aménager des parcours de mobilité active afin de faire la promotion de la qualité du cadre de vie et des milieux naturels de Saint-Constant',
				accent1: 'rgb(59 181 108)',
				accent2: 'rgb(124 218 127)',
				accent3: 'rgb(164, 250, 172)'
		},
		{
				title: 'Pôles de mixité & de densification',
				path: '/ideation/poles-mixite-densification',
				heading: 'Les pôles de mixité et de densification',
				description: 'Concevoir des aires de densification du territoire qui s’intègrent au paysage actuel',
				accent1: 'rgb(118 111 230)',
				accent2: 'rgb(146 159 243)',
				accent3: 'rgb(180 190 245)'
		},
]
