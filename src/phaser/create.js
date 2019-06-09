import { checkStore } from "./utils/checkStore";
import { checkForPollen } from "./utils/beeOnFlowerCollision";
import { init } from "./init";
export function create() {
	// creates initial flowers
	init(this);

	// collider flag for avoiding running the collision function over and over while the bee is colliding
	let collided = false;
	// collider for collision with bee and flower
	let collider = this.physics.add.overlap(
		this.bee,
		this.flowerToFlyTo,
		function(beeOnFlower) {
			this.bee.setAcceleration(0, 0);
			// if you havent registered as collided with this flower yet then
			if (!collided) {
				this.time.addEvent({
					delay: 1000,
					callback: function() {
						// check if bee has pollen
						checkForPollen(this.bee.id, this.flowerToFlyTo.id);

						// set the new target randomly
						this.flowerToFlyTo = this.flowersOnScreen[
							Math.floor(
								Math.random() * this.flowersOnScreen.length
							)
						];
						// sets target debug graphics
						targetFlowerGraphics.clear();
						this.circle = new Phaser.Geom.Circle(
							this.flowerToFlyTo.x,
							this.flowerToFlyTo.y,
							10
						);
						targetFlowerGraphics.strokeCircleShape(this.circle);

						// set new object as collider for bee
						collider.object2 = this.flowerToFlyTo;
						// allow collision again
						collided = false;
					},
					callbackScope: this
				});
			}
			// mark the flower as collided
			collided = true;
		},
		null,
		this
	);

	const targetFlowerGraphics = this.add.graphics({
		lineStyle: { width: 2, color: 0x00ff00 },
		fillStyle: { color: 0xff00ff }
	});

	// Check the store every .5 secs
	this.time.addEvent({
		delay: 500,
		callback: checkStore,
		callbackScope: this,
		loop: true
	});

	this.beeCanFly = false;

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
