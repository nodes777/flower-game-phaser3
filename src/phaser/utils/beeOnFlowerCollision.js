import { store } from "../../index";
import { determinePosition } from "../../utils/determinePosition";
import {
	pickupPollen,
	dropPollen,
	addFlower
} from "../../actions/indexActions";

import { screenSize } from "../../utils/screenSize";

export function checkForPollen(beeId, flowerId) {
	const beeHasPollen = store.getState().bees.byId[beeId].pollen !== null;
	// if no pollen, pick it up
	if (!beeHasPollen) {
		const pollen = store.getState().flowers.byId[flowerId].genotype;
		// pollen.id = flowerId;
		store.dispatch(pickupPollen(beeId, pollen, flowerId));
	}

	if (beeHasPollen) {
		// pollinate, from bee pollen
		const bee = store.getState().bees.byId[beeId];
		const pollen = bee.pollen;
		const pollenId = bee.pollenId;
		// get currently collided flower
		const flower2 = store.getState().flowers.byId[flowerId];
		const allPositions = store.getState().flowers.allPositions;

		const posInfo = determinePosition(
			flower2.position,
			allPositions,
			screenSize
		);
		// if there's room

		if (posInfo.hasRoom) {
			// create object with parental info
			const info = {
				parent1: {
					id: pollenId,
					genotype: pollen,
					position: { x: 0, y: 0 }
				},
				parent2: {
					id: flowerId,
					genotype: flower2.genotype,
					position: flower2.position
				},
				posInfo: posInfo
			};
			store.dispatch(addFlower(info));
			store.dispatch(dropPollen(beeId));
		} else {
			// flower is full
			store.dispatch(dropPollen(beeId));
		}
	}
}

// not being used
// export function beeOnFlowerCollision(beeOnFlower, collider) {
// 	console.log("collision");
// 	console.log(beeOnFlower);
// 	console.log(collider);
// 	console.log(this);
// 	this.bee.setAcceleration(0, 0);

// 	let targetFlowerGraphics = this.add.graphics({
// 		lineStyle: { width: 2, color: 0x00ff00 },
// 		fillStyle: { color: 0xff00ff }
// 	});
// 	this.time.addEvent({
// 		delay: 1000,
// 		callback: function() {
// 			// set the new target randomly
// 			this.flowerToFlyTo = this.flowersOnScreen[
// 				Math.floor(Math.random() * this.flowersOnScreen.length)
// 			];
// 			// sets target debug graphics
// 			targetFlowerGraphics.clear();
// 			this.circle = new Phaser.Geom.Circle(
// 				this.flowerToFlyTo.x,
// 				this.flowerToFlyTo.y,
// 				10
// 			);
// 			targetFlowerGraphics.strokeCircleShape(this.circle);
// 			// remove this collider
// 			//this.physics.world.removeCollider(collider);
// 			// create a new one
// 			// set new object
// 			collider.object2 = this.flowerToFlyTo;
// 		},
// 		callbackScope: this
// 	});
// }
