import Phaser from "phaser";
const SPEED = 100;
const ROTATION_SPEED = (2 * Math.PI) / 4; // 90 deg/s
const ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
const TOLERANCE = 0.01 * ROTATION_SPEED;
const sin = Math.sin;
const cos = Math.cos;
const atan2 = Math.atan2;
const velocityFromRotation =
	Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;

export function beeRotate(target) {
	var angleToTarget = Phaser.Math.Angle.BetweenPoints(this.bee, target);
	var angleDelta = angleToTarget - this.bee.rotation;

	angleDelta = atan2(sin(angleDelta), cos(angleDelta));

	if (Phaser.Math.Within(angleDelta, 0, TOLERANCE)) {
		this.bee.rotation = angleToTarget;
		this.bee.setAngularVelocity(0);
	} else {
		this.bee.setAngularVelocity(
			Math.sign(angleDelta) * ROTATION_SPEED_DEGREES
		);
	}

	velocityFromRotation(this.bee.rotation, SPEED, this.bee.body.velocity);
}
