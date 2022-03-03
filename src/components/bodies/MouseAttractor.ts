import Matter from '$utils/matter';

export class MouseAttractor {
	public body: Matter.Body;
	public mouse: Matter.Mouse;
	public constraint: Matter.MouseConstraint;

	constructor(engine: Matter.Engine, host: HTMLElement) {
		// Attractor body
		this.body = Matter.Bodies.circle(
			host.clientWidth / 2,
			0,
			1,
			{
				isStatic: true,
				plugin: {
					attractors: [
					function(bodyA, bodyB) {
						return {
								x: (bodyA.position.x - bodyB.position.x) * 2e-4,
								y: (bodyA.position.y - bodyB.position.y) * 2e-4,
							};
						}
					]
				},
				collisionFilter: {
					group: -1
				}
			}
		);
		Matter.Composite.add(engine.world, this.body);
		// Mouse interactivity
		this.mouse = Matter.Mouse.create(host);
		Matter.Events.on(engine, 'afterUpdate', () => {
			if (!this.mouse.position.x) {
				return;
			}
			Matter.Body.translate(this.body, {
				x: (this.mouse.position.x - this.body.position.x) * 0.25,
				y: (this.mouse.position.y - this.body.position.y) * 0.25
			});
		});

		this.mouse.element.removeEventListener('mousewheel', this.mouse.mousewheel);
		this.mouse.element.removeEventListener('DOMMouseScroll', this.mouse.mousewheel);
	}

	setAnchor() {
		this.mouse.position.x = this.mouse.element.clientWidth / 2;
		this.mouse.position.y = 0;
		Matter.Body.setPosition(this.body, {
			x: this.mouse.element.clientWidth / 2,
			y: 0
		});
	}
}