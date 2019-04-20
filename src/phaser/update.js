export function update() {
	// this.bee.rotation = Phaser.Math.Angle.Between(
	// 	this.bee.x,
	// 	this.bee.y,
	// 	this.firstFlower.x,
	// 	this.firstFlower.y
	// );

	// Move at 200 px/s:
	this.physics.accelerateToObject(this.bee, this.firstFlower, 60, 300, 300);

	// collider for collision with bee and flower
	let collider = this.physics.add.overlap(
		this.bee,
		this.firstFlower,
		function(beeOnFlower) {
			//Stop moving the bee
			this.bee.body.setAcceleration(0);
			this.physics.world.removeCollider(collider);
			// find a new flower and set as destination
		},
		null,
		this
	);
}
