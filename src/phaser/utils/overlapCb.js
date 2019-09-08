import { checkForPollen } from "./checkForPollen";

export const overlapCb = function(bee, flowerToFlyTo) {
	console.log("COLLIDED");

	// stop the bee
	bee.body.acceleration.set(0);
	bee.body.velocity.set(0);
	// if the bee hasnt registered as collided with game flower yet then
	if (!this.collided) {
		this.collided = true;
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
				this.collided = false;
			},
			callbackScope: this
		});
	}
};
