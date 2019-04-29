import { checkStore } from "../utils/checkStore";

export function create() {
	this.firstFlower = this.physics.add.sprite(400, 150, "blankFlower");
	this.bee = this.physics.add.sprite(200, 150, "bee");
	this.secondFlower = this.physics.add.sprite(
		Phaser.Math.RND.integerInRange(25, 600),
		Phaser.Math.RND.integerInRange(25, 600),
		"blankFlower"
	);

	this.flowersOnScreen = [this.firstFlower, this.secondFlower];

	// Set image/sprite properties
	this.bee
		.setOrigin(0.5, 0.5)
		//.setCollideWorldBounds(true)
		.setDrag(50, 50);

	// set the flower to go to
	this.flowerToFlyTo = this.firstFlower;
	console.log(this.flowerToFlyTo);

	// collider for collision with bee and flower
	let collider = this.physics.add.overlap(
		this.bee,
		this.flowerToFlyTo,
		function(beeOnFlower) {
			console.log("collision");
			this.bee.setAcceleration(0, 0);

			// sets target debug graphics

			// set the new target randomly
			this.time.addEvent({
				delay: 1000,
				callback: function() {
					this.flowerToFlyTo = this.flowersOnScreen[
						Math.floor(Math.random() * this.flowersOnScreen.length)
					];
					targetFlowerGraphics.clear();
					this.circle = new Phaser.Geom.Circle(
						this.flowerToFlyTo.x,
						this.flowerToFlyTo.y,
						10
					);
					targetFlowerGraphics.strokeCircleShape(this.circle);
					// remove this collider
					//this.physics.world.removeCollider(collider);
					// create a new one
					// set new object
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
}
