import { colors, determineColor } from "./colors";
import { determineFlowerShape } from "./determineFlowerShape";
import { determineStem } from "./determineStem.js";
export function addNewFlowers(numFlowersPrev, currState, game) {
	// for each of the new flowers in state, add them to the game
	for (let i = numFlowersPrev; i < currState.flowers.allIds.length; i++) {
		let currFlowerId = currState.flowers.allIds[i];
		let currFlower = currState.flowers.byId[currFlowerId];
		// set position and shape
		let newFlowerSprite = game.physics.add.sprite(
			currFlower.position.x,
			currFlower.position.y,
			determineFlowerShape(currFlower.genotype)
		);
		// set color
		newFlowerSprite.setTint(determineColor(currFlower.genotype));
		// hide debug info
		newFlowerSprite.debugShowBody = false;
		// create id
		newFlowerSprite.id = currFlowerId;
		// keep on top of stem
		newFlowerSprite.depth = 1;
		// add stem
		game.add.image(
			newFlowerSprite.x,
			newFlowerSprite.y + 12,
			determineStem(currFlower.genotype)
		);

		// add the flower to the array of onscreen flowers for bee to fly to
		game.flowersOnScreen.push(newFlowerSprite);
	}
}
