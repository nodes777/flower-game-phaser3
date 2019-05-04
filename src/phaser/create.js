import { checkStore } from "../utils/checkStore";
import { checkForPollen } from "./utils/beeOnFlowerCollision";
export function create() {
	this.firstFlower = this.physics.add.sprite(400, 150, "blankFlower");
	this.firstFlower.debugShowBody = false;
	this.firstFlower.id = "flower1";

	this.bee = this.physics.add.sprite(200, 150, "bee");
	this.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
	this.bee.id = "bee1";
	// turn off debug info
	this.bee.debugShowBody = false;
	//this.bee.debugShowVelocity = false;

	this.secondFlower = this.physics.add.sprite(
		Phaser.Math.RND.integerInRange(25, 600),
		Phaser.Math.RND.integerInRange(25, 600),
		"blankFlower"
	);
	this.secondFlower.debugShowBody = false;
	this.secondFlower.id = "flower2";

	//Create array of flowers on screen to fly to
	this.flowersOnScreen = [this.firstFlower, this.secondFlower];

	// set the flower to go to
	this.flowerToFlyTo = this.firstFlower;

	// collider for collision with bee and flower
	let collider = this.physics.add.overlap(
		this.bee,
		this.flowerToFlyTo,
		function(beeOnFlower) {
			this.bee.setAcceleration(0, 0);

			this.time.addEvent({
				delay: 1000,
				callback: function() {
					// check if bee has pollen
					checkForPollen(this.bee.id, this.flowerToFlyTo.id);

					// set the new target randomly
					this.flowerToFlyTo = this.flowersOnScreen[
						Math.floor(Math.random() * this.flowersOnScreen.length)
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
				},
				callbackScope: this
			});
		},
		null,
		this
	);

	const targetFlowerGraphics = this.add.graphics({
		lineStyle: { width: 2, color: 0x00ff00 },
		fillStyle: { color: 0xff00ff }
	});

	// Check the store every 2 secs
	this.time.addEvent({
		delay: 500,
		callback: checkStore,
		callbackScope: this,
		loop: true
	});

	// hack to reset bee's accelleration every 1/10 sec so that orbits appear less frequently
	this.time.addEvent({
		delay: 100,
		callback: function() {
			this.bee.setAcceleration(0, 0);
		},
		callbackScope: this,
		loop: true
	});
}
