export function create() {
	this.firstFlower = this.physics.add.sprite(400, 150, "blankFlower");
	this.bee = this.physics.add.sprite(200, 150, "bee");

	// Set image/sprite properties
	//background.setOrigin(0.5, 0.5).setDisplaySize(1600, 1200);
	this.bee
		.setOrigin(0.5, 0.5)
		.setCollideWorldBounds(true)
		.setDrag(500, 500);
}
