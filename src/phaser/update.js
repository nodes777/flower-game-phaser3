import { beeRotate } from "./utils/rotation";
import { beeFrameRotate } from "./utils/rotation";

import { overlapCb } from "./utils/overlapCb";
export function update() {
	if (this.beeCanFly) {
		//this.isoPhysics.moveToObject(this.bee, this.flowerToFlyTo, 400);
		if (!this.bee1Collided) {
			const theta = this.isoPhysics.moveToXYZ(
				this.bee,
				this.flowerToFlyTo._isoPosition.x,
				this.flowerToFlyTo._isoPosition.y,
				30,
				400
			);
			console.log(`Theta: ${theta}`);
			// Rotate bee frame to face flower
			beeFrameRotate(this.flowerToFlyTo, this, theta);
		}

		this.isoPhysics.world.overlap(
			this.bee,
			this.flowerToFlyTo,
			overlapCb,
			null,
			this
		);
		//Too Stiff
		// this.bee.angle = this.physics.moveToObject(
		// 	this.bee,
		// 	this.flowerToFlyTo,
		// 	1000,
		// 	200
		// );

		//  Acceleration Based Movement
		// Reset the acceleration
		//this.bee.setAcceleration(0, 0);
		// this.physics.accelerateToObject(
		// 	this.bee,
		// 	this.flowerToFlyTo,
		// 	400,
		// 	140,
		// 	140
		// );
	}
	// change frames for sprite stack rotation
	//beeFrameRotate.call(this, this.flowerToFlyTo);
	// rotate bee towards flower
	//beeRotate.call(this, this.flowerToFlyTo);
	// if (this.input.mouse) {
	// 	console.log(this.input.mouse.target);
	// 	//this.input.mouse.onMouseOver()
	// }
}
// functions basically the same as accelerateToObject
// function accelerateToObject(obj1, obj2, speed) {
// 	console.log(obj1.body);
// 	if (typeof speed === "undefined") {
// 		speed = 60;
// 	}
// 	var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
// 	//obj1.body.rotation = angle + this.math.degToRad(90); // correct angle of angry bullets (depends on the sprite used)
// 	obj1.body.acceleration.x = Math.cos(angle) * speed; // accelerateToObject
// 	obj1.body.acceleration.y = Math.sin(angle) * speed;
// }
