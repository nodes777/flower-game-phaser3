import { checkForPollen } from "./checkForPollen";

export const overlapCb = function(bee, flowerToFlyTo) {
	console.log("COLLIDED");

	// console.log(bee);
	// console.log(flowerToFlyTo);
	// stops the bee when it's on flower
	const diffX = Math.abs(bee._isoPosition.x - flowerToFlyTo._isoPosition.x);
	const diffY = Math.abs(bee._isoPosition.y - flowerToFlyTo._isoPosition.y);
	// when this difference is too small, the overlap function fires and the bee never stops going,
	// it overshoots the flower
	if (diffX < 5 && diffY < 5) {
		bee.body.acceleration.set(0);
		bee.body.velocity.set(0);
	}

	if (!this.bee1Collided) {
		// if the bee hasnt registered as collided with game flower yet then
		this.bee1Collided = true;
		this.time.addEvent({
			delay: 1000,
			callback: function() {
				// check if bee has pollen
				checkForPollen(bee.id, flowerToFlyTo.id);

				// set the new target randomly
				this.flowerToFlyTo = this.flowersOnScreen[
					Math.floor(Math.random() * this.flowersOnScreen.length)
				];

				// allow collision again
				this.bee1Collided = false;
			},
			callbackScope: this
		});
	}
};
