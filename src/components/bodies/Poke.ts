import Matter from '$utils/matter';

export class Poke {
	private r = 20;
	public body: Matter.Body;

	constructor(engine: Matter.Engine) {
		this.body = Matter.Bodies.circle(0, 0, this.r, { isStatic: true });
		Matter.Composite.add(engine.world, this.body);
	}

	move(e: MouseEvent) {
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		Matter.Body.set(this.body, 'position', {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	}
}