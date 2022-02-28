// import { IBodyDefinition } from 'matter-js';
import Matter from '$utils/matter';

export class Walls {
	private areaWidth: number;
	private areaHeight: number;
	public thickness: number;
	public top: Matter.Body;
	public right: Matter.Body;
	public bottom: Matter.Body;
	public left: Matter.Body;
	
	constructor(engine: Matter.Engine, areaWidth: number, areaHeight: number, thickness: number) {
		this.areaWidth = areaWidth;
		this.areaHeight = areaHeight;
		this.thickness = thickness;
		const wallOptions: Matter.IBodyDefinition = {
			isStatic: true,
			render: {
				fillStyle: 'transparent'
			}
		}
		// this.top = Matter.Bodies.rectangle(areaWidth / 2, -thickness / 2, 2 * areaWidth, thickness, wallOptions);
		// Matter.Composite.add(engine.world, this.top);

		this.top = Matter.Bodies.rectangle(areaWidth / 2, -thickness / 2, areaWidth, thickness, wallOptions);
		this.right = Matter.Bodies.rectangle(areaWidth + thickness / 2, areaHeight / 2, thickness, areaHeight, wallOptions);
		this.bottom = Matter.Bodies.rectangle(areaWidth / 2, areaHeight + thickness / 2, areaWidth, thickness, wallOptions);
		this.left = Matter.Bodies.rectangle(-thickness / 2, areaHeight / 2, thickness, areaHeight, wallOptions);
		Matter.Composite.add(engine.world, [this.top, this.right, this.bottom, this.left]);
	}

	update(newAreaWidth: number, newAreaHeight: number) {
		// Matter.Body.setPosition(this.top, { x: newAreaWidth / 2, y: this.top.position.y });

		Matter.Body.setPosition(this.top, { x: newAreaWidth / 2, y: this.top.position.y });
		Matter.Body.setPosition(this.right, { x: newAreaWidth + this.thickness / 2, y: newAreaHeight / 2 });
		Matter.Body.setPosition(this.bottom, { x: newAreaWidth / 2, y: newAreaHeight + this.thickness / 2 });
		Matter.Body.setPosition(this.left, { x: this.left.position.x, y: newAreaHeight / 2 });

		// Matter.Body.scale(this.top, 2 * newAreaWidth / this.areaWidth, 1);

		Matter.Body.scale(this.top, newAreaWidth / this.areaWidth, 1);
		Matter.Body.scale(this.right, 1, newAreaHeight / this.areaHeight);
		Matter.Body.scale(this.bottom, newAreaWidth / this.areaWidth, 1);
		Matter.Body.scale(this.left, 1, newAreaHeight / this.areaHeight);
		this.areaWidth = newAreaWidth;
		this.areaHeight = newAreaHeight;
	}
}