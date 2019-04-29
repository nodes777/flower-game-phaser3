import { beeRotate } from "./utils/rotation";
export function update() {
	//  Acceleration Based Movement
	// Reset the acceleration
	this.bee.setAcceleration(0, 0);
	this.physics.accelerateToObject(
		this.bee,
		this.flowerToFlyTo,
		100,
		100,
		100
	);

	// velocityFromRotation based movement
	beeRotate.call(this, this.flowerToFlyTo);

	// Too Stiff
	// this.bee.angle = this.physics.moveToObject(
	// 	this.bee,
	// 	this.flowerToFlyTo,
	// 	100,
	// 	2000
	// );
}
