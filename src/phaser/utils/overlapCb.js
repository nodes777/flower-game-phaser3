import { checkForPollen } from "./checkForPollen";

export const overlapCb = function(bee, flowerToFlyTo) {
	console.log("COLLIDED");

	// console.log(bee);
	// console.log(flowerToFlyTo);
	// stops the bee when it's on flower
	const diffX = Math.abs(bee._isoPosition.x - flowerToFlyTo._isoPosition.x);
	const diffY = Math.abs(bee._isoPosition.y - flowerToFlyTo._isoPosition.y);
	if (diffX < 1 && diffY < 1) {
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
