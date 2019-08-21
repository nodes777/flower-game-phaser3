import { checkForPollen } from "./beeOnFlowerCollision";

export const createCollider = (game, collided) => {
	const targetFlowerGraphics = game.add.graphics({
		lineStyle: { width: 2, color: 0x00ff00 },
		fillStyle: { color: 0xff00ff }
	});

	let collider = game.physics.add.overlap(
		game.bee,
		game.flowerToFlyTo,
		function(beeOnFlower) {
			game.bee.setAcceleration(0, 0);
			// if you havent registered as collided with game flower yet then
			if (!collided) {
				game.time.addEvent({
					delay: 1000,
					callback: function() {
						// check if bee has pollen
						checkForPollen(game.bee.id, game.flowerToFlyTo.id);

						// set the new target randomly
						game.flowerToFlyTo =
							game.flowersOnScreen[
								Math.floor(
									Math.random() * game.flowersOnScreen.length
								)
							];
						// sets target debug graphics
						targetFlowerGraphics.clear();
						game.circle = new Phaser.Geom.Circle(
							game.flowerToFlyTo.x,
							game.flowerToFlyTo.y,
							10
						);
						targetFlowerGraphics.strokeCircleShape(game.circle);

						// set new object as collider for bee,
						// collider refers to this function/object
						collider.object2 = this.flowerToFlyTo;
						// allow collision again
						collided = false;
					},
					callbackScope: game
				});
			}
			// mark the flower as collided
			collided = true;
		},
		null,
		game
	);
	// return the collider object, so that it's moved to the new flowerToFlyTo
	return collider;
};
