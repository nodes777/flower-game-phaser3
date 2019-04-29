import { store } from "../index.js";
import { checkStore } from "../utils/checkStore";

export function update() {
	//  Reset the acceleration
	this.bee.body.angularAcceleration = 0;
	this.physics.accelerateToObject(this.bee, this.flowerToFlyTo, 60, 100, 100);

	//this.flowerToFlyTo
}
