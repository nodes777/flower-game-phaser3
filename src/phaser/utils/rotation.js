import Phaser from "phaser";

const SPEED = 100;
const ROTATION_SPEED = (2 * Math.PI) / 4; // 90 deg/s
const ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
const TOLERANCE = 0.01 * ROTATION_SPEED;
const sin = Math.sin;
const cos = Math.cos;
const atan2 = Math.atan2;
// for velocity based movement
// const velocityFromRotation =
// 	Phaser.Physics.Arcade.ArcadePhysics.prototype.velocityFromRotation;

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

	//velocityFromRotation(this.bee.rotation, SPEED, this.bee.body.velocity);
}
export function beeFrameRotate(target) {
	var angleToTarget = Phaser.Math.Angle.BetweenPoints(this.bee, target);
	var angleDelta = angleToTarget - this.bee.angleForFrame;

	angleDelta = atan2(sin(angleDelta), cos(angleDelta));

	console.log(`angleToTarget: ${angleToTarget}`);
	console.log(`angleDelta: ${angleDelta}`);
	if (Phaser.Math.Within(angleDelta, 0, TOLERANCE)) {
		this.bee.rotation = angleToTarget;
		this.bee.setAngularVelocity(0);
	} else {
		this.bee.setAngularVelocity(
			Math.sign(angleDelta) * ROTATION_SPEED_DEGREES
		);
	}

	this.bee.angleForFrame += angleDelta;
	console.log(`this.bee.angle: ${this.bee.angle}`);
	console.log(`this.bee.angleForFrame: ${this.bee.angleForFrame}`);

	if (this.bee.angleForFrame >= 0) {
		this.bee.setFrame(4);
	} else if (this.bee.angleForFrame >= 22.5) {
		this.bee.setFrame(5);
	} else if (this.bee.angleForFrame >= 45) {
		this.bee.setFrame(6);
	} else if (this.bee.angleForFrame >= 67.5) {
		this.bee.setFrame(7);
	} else if (this.bee.angleForFrame >= 90) {
		this.bee.setFrame(8);
	} else if (this.bee.angleForFrame >= 110.5) {
		this.bee.setFrame(9);
	}
}
