import { store } from "../../index";

import { pickupPollen, dropPollen } from "../../actions/indexActions";
export function beeOnFlowerCollision(beeOnFlower, collider) {
	console.log("collision");
	console.log(beeOnFlower);
	console.log(collider);
	console.log(this);
	this.bee.setAcceleration(0, 0);

	let targetFlowerGraphics = this.add.graphics({
		lineStyle: { width: 2, color: 0x00ff00 },
		fillStyle: { color: 0xff00ff }
	});
	this.time.addEvent({
		delay: 1000,
		callback: function() {
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
			// remove this collider
			//this.physics.world.removeCollider(collider);
			// create a new one
			// set new object
			collider.object2 = this.flowerToFlyTo;
		},
		callbackScope: this
	});
}

export function checkForPollen(beeId, flowerId) {
	console.log(flowerId);
	if (store.getState().flowers.beesById[beeId].pollen === null) {
		store.dispatch(pickupPollen(beeId, flowerId));
	}

	if (store.getState().flowers.beesById[beeId].pollen !== null) {
		store.dispatch(dropPollen(beeId));
	}
}
