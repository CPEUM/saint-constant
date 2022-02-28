import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors-f';

console.log('adding plugin!');

Matter.use(MatterAttractors);

export default Matter;