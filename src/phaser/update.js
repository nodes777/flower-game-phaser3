import { beeRotate } from "./utils/rotation";
export function update() {
	//  Reset the acceleration
	//this.bee.setAcceleration(0, 0);
	// this.physics.accelerateToObject(
	// 	this.bee,
	// 	this.flowerToFlyTo,
	// 	100,
	// 	100,
	// 	100
	// );

	beeRotate.call(this, this.flowerToFlyTo);

	// this.bee.angle = this.physics.moveToObject(
	// 	this.bee,
	// 	this.flowerToFlyTo,
	// 	100,
	// 	2000
	// );
}
