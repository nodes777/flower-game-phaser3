import { checkStore, getStoreState } from "./utils/checkStore";
import { checkForPollen } from "./utils/beeOnFlowerCollision";
import { init } from "./init";
import { createCollider } from "./utils/createCollider";
export function create() {
	// creates initial flowers
	init(this);

	// collider flag for avoiding running the collision function over and over while the bee is colliding
	let collided = false;

	// collider for collision with bee and flower
	let collider = createCollider(this, collided);

	// Check the store every .5 secs
	this.time.addEvent({
		delay: 500,
		callback: checkStore,
		callbackScope: this,
		loop: true
	});
	console.log(this.physics);
	console.log(this.isoPhysics);
	console.log(this.flowerToFlyTo);
	console.log(collider);

	this.beeCanFly = getStoreState().config.beeCanFly;

	// hack to reset bee's accelleration every 1/10 sec so that orbits appear less frequently
	// this.time.addEvent({
	// 	delay: 100,
	// 	callback: function() {
	// 		this.bee.setAcceleration(0, 0);
	// 	},
	// 	callbackScope: this,
	// 	loop: true
	// });
}
