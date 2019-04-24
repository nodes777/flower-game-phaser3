import { checkStore } from "../utils/checkStore";

export function create() {
	this.firstFlower = this.physics.add.sprite(400, 150, "blankFlower");
	this.bee = this.physics.add.sprite(200, 150, "bee");
	this.secondFlower = this.physics.add.sprite(
		Phaser.Math.RND.integerInRange(25, 600),
		Phaser.Math.RND.integerInRange(25, 600),
		"blankFlower"
	);
	// Set image/sprite properties
	//background.setOrigin(0.5, 0.5).setDisplaySize(1600, 1200);
	this.bee
		.setOrigin(0.5, 0.5)
		//.setCollideWorldBounds(true)
		.setDrag(500, 500);

	// Move at 200 px/s:
	this.physics.accelerateToObject(this.bee, this.firstFlower, 60, 300, 300);

	// collider for collision with bee and flower
	let collider = this.physics.add.overlap(
		this.bee,
		this.firstFlower,
		function(beeOnFlower) {
			console.log("collision");
			//Stop moving the bee
			this.bee.body.setAcceleration(0);
			this.physics.world.removeCollider(collider);
			// find a new flower and set as destination
		},
		null,
		this
	);

	// Check the store every 2 secs
	this.time.addEvent({
		delay: 500,
		callback: checkStore,
		callbackScope: this,
		loop: true
	});
}
