export function update() {
	this.bee.rotation = Phaser.Math.Angle.Between(
		this.bee.x,
		this.bee.y,
		this.firstFlower.x,
		this.firstFlower.y
	);
}
