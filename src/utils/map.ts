import maplibregl from 'maplibre-gl';

export const bounds = {
	fallback: new maplibregl.LngLatBounds([
		[-73.6, 45.29],
		[-73.58, 45.4]
	]),
	agroparc: new maplibregl.LngLatBounds([-73.577405, 45.354136], [-73.552339, 45.369695]),
	promenades: new maplibregl.LngLatBounds([-73.616978, 45.35106], [-73.545042, 45.399776]),
	poles: new maplibregl.LngLatBounds([-73.615091, 45.355221], [-73.548476, 45.401041])
};
