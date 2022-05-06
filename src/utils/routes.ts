import { base } from '$app/paths';
import { LngLatBounds, type LngLatBoundsLike } from 'maplibre-gl';
import { bounds } from './map';

export interface Route {
	title: string;
	path: string;
	exercices?: boolean;
	next?: () => Route;
	previous?: () => Route;
	mapBounds?: LngLatBounds | LngLatBoundsLike;
}

export const routes: Route[] = [
	{
		title: 'Accueil',
		path: `${base}/`,
		next: () => routes[1]
	},
	{
		title: 'Équipe & partenaires',
		path: `${base}/equipe-partenaires`,
		previous: () => routes[0],
		next: () => exerciceRoutes[0]
	},
	{
		title: 'Exercices d’idéation',
		path: `${base}/ideation`,
		exercices: true
	},
	{
		title: 'Principes directeurs',
		path: `${base}/principes-directeurs`,
		previous: () => exerciceRoutes[2],
		next: () => routes[4]
	},
	{
		title: 'Conclusion',
		path: `${base}/conclusion`,
		previous: () => routes[3],
		next: () => routes[0]
	}
];

export interface ExerciceRoute extends Route {
	heading: string;
	description: string;
	key: 'agroparc' | 'promenades' | 'poles';
}

export const exerciceRoutes: ExerciceRoute[] = [
	{
		title: 'Agroparc',
		path: `${base}/ideation/agroparc`,
		heading: 'L’agroparc de Saint-Constant',
		description: 'Revitaliser le noyau villageois par le développement d’un pôle d’interconnexion entre le milieu urbain et rural',
		key: 'agroparc',
		previous: () => routes[1],
		next: () => exerciceRoutes[1],
		mapBounds: bounds.agroparc
	},
	{
		title: 'Promenades citoyennes',
		path: `${base}/ideation/promenades-citoyennes`,
		heading: 'Les promenades citoyennes de Saint-Constant',
		description: 'Aménager des parcours de mobilité active afin de faire la promotion de la qualité du cadre de vie et des milieux naturels de Saint&#8209;Constant',
		key: 'promenades',
		previous: () => exerciceRoutes[0],
		next: () => exerciceRoutes[2],
		mapBounds: bounds.promenades
	},
	{
		title: 'Pôles de mixité & de densification',
		path: `${base}/ideation/poles-mixite-densification`,
		heading: 'Les pôles de mixité et de densification',
		description: 'Concevoir des aires de densification du territoire qui s’intègrent au paysage actuel',
		key: 'poles',
		previous: () => exerciceRoutes[1],
		next: () => routes[3],
		mapBounds: bounds.poles
	}
];
