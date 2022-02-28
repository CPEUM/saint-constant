import Matter from '$utils/matter';

export class RenderCanvas {
	private canvas: HTMLCanvasElement;
	public render: Matter.Render;

	constructor(canvas: HTMLCanvasElement, engine: Matter.Engine) {
		this.canvas = canvas;
		this.render = Matter.Render.create({
			canvas,
			engine,
			options: {
				wireframes: false,
				width: canvas.clientWidth,
				height: canvas.clientHeight,
				background: 'transparent'
			}
		});
		// Matter.Render.run(this.render);
	}

	resize(newWidth: number, newHeight: number) {
		this.render.bounds.max.x = newWidth;
		this.render.bounds.max.y = newHeight;
		this.render.options.width = newWidth;
		this.render.options.height = newHeight;
		this.render.canvas.width = newWidth;
		this.render.canvas.height = newHeight;
		Matter.Render.lookAt(this.render, {
			min: {
				x: 0,
				y: 0
			},
			max: {
				x: newWidth,
				y: newHeight
			}
		})
	}
}