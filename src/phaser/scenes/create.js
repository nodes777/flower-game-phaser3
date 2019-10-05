import { checkStore, getStoreState } from "../gameloop/checkStore";
import { checkForPollen } from "../gameloop/checkForPollen";
import { init } from "../init/init";

export function create() {
	//createAnims(this);

	// creates initial flowers
	init(this);

	// collider flag for avoiding running the collision function over and over while the bee is colliding
	this.bee1Collided = false;

	// Check the store every .5 secs
	this.time.addEvent({
		delay: 500,
		callback: checkStore,
		callbackScope: this,
		loop: true
	});

	this.beeCanFly = getStoreState().config.beeCanFly;
	// keep track of which flowers are "growing"/ moving upward
	this.flowersGrowing = [];

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
