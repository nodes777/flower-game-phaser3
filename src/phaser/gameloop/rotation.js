import Phaser from "phaser";

const angleOffsetForFrame = 11.25;

export function beeFrameRotate(target, game, theta) {
	// radians
	const angleForFrameRad = Phaser.Math.DEG_TO_RAD * game.bee.angleForFrameDeg;
	let angleDeltaRad = theta - angleForFrameRad;

	// clamp value
	if (Phaser.Math.Within(angleDeltaRad, 0, 0.1)) {
		angleDeltaRad = 0;
	}

	let angleDeltaDeg = Phaser.Math.RAD_TO_DEG * angleDeltaRad;

	game.bee.angleForFrameDeg += angleDeltaDeg;
	// console.log(`game.bee.angleForFrameDeg: ${game.bee.angleForFrameDeg}`);
	// console.log(`angleDeltaRad: ${angleDeltaRad}`);
	// console.log(`angleDeltaDeg: ${angleDeltaDeg}`);

	// Clockwise
	// Frames 0-3 North to East
	// 4-7 East to South
	// 8-11 South to West
	// 12-15 West to North

	// compensate for negative angles
	if (game.bee.angleForFrameDeg < 0) {
		game.bee.angleForFrameDeg = game.bee.angleForFrameDeg + 360;
	}

	if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 0) {
		game.bee.setFrame(4);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 22.5) {
		game.bee.setFrame(5);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 45) {
		game.bee.setFrame(6);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 67.5) {
		game.bee.setFrame(7);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 90) {
		game.bee.setFrame(8);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 112.5) {
		game.bee.setFrame(9);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 135) {
		game.bee.setFrame(10);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 157.5) {
		game.bee.setFrame(11);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 180) {
		game.bee.setFrame(12);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 202.5) {
		game.bee.setFrame(13);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 225) {
		game.bee.setFrame(14);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 247.5) {
		game.bee.setFrame(15);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 270) {
		game.bee.setFrame(0);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 292.5) {
		game.bee.setFrame(1);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 315) {
		game.bee.setFrame(2);
	} else if (game.bee.angleForFrameDeg + angleOffsetForFrame <= 337.5) {
		game.bee.setFrame(3);
	}
	// else if (angleDeltaDeg >= 337.5) {
	// 	game.bee.setFrame(0);
	// }
}

// const SPEED = 100;
// const ROTATION_SPEED = (2 * Math.PI) / 4; // 90 deg/s
// const ROTATION_SPEED_DEGREES = Phaser.Math.RadToDeg(ROTATION_SPEED);
// const TOLERANCE = 0.01 * ROTATION_SPEED;
// const sin = Math.sin;
// const cos = Math.cos;
// const atan2 = Math.atan2;

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

//console.log(target);
//console.log(game.bee.angle);

//game.bee.angleForFrame = theta;

//angleDelta = atan2(sin(angleDelta), cos(angleDelta));

// returns radians, same as theta
// const angleToTarget = Phaser.Math.Angle.Between(
// 	game.bee._isoPosition.x,
// 	game.bee._isoPosition.y,
// 	target._isoPosition.x,
// 	target._isoPosition.y
// );

// clamp small numbers
// if (Phaser.Math.Within(angleDelta, 0, 0.1)) {
// 	//angleDelta = 0;

// 	//game.bee.setAngularVelocity(0);
// } else {
// 	// game.bee.setAngularVelocity(
// 	// 	Math.sign(angleDelta) * ROTATION_SPEED_DEGREES
// 	// );
// }
