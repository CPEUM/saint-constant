import { mergeObjects } from '$utils/mergeObjects';

interface Options {
	delimiter?: string;
	removeDelimiter?: boolean;
	granularity?: 'word' | 'char';
	parseCallback?: () => void;
	wrap?: boolean;
}

const defaultOptions: Options = {
	removeDelimiter: false,
	wrap: false,
}

export function splitText(node: Node, options?: Options) {
	options = mergeObjects({...defaultOptions}, options);

	function parseNodes(nodes: Node[]) {

	}

	function replaceNodes()
}