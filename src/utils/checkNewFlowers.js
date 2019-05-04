import { colors } from "./colors";
export function checkNewFlowers(
	numFlowersPrev,
	numFlowersCurr,
	currState,
	game
) {
	if (numFlowersCurr !== numFlowersPrev) {
		const diff = numFlowersCurr - numFlowersPrev;
		console.log(diff + " new flower(s)");

		// for each of the new flowers in state, add them to the game
		for (let i = numFlowersPrev; i < currState.flowers.allIds.length; i++) {
			let currFlowerId = currState.flowers.allIds[i];
			let currFlower = currState.flowers.byId[currFlowerId];
			let newFlowerSprite = game.physics.add.sprite(
				currFlower.position.x,
				currFlower.position.y,
				"blankFlower"
			);

			// set the color by picking a random color in the flowers genotype array
			// prefix with 0x to expect hex
			newFlowerSprite.setTint(
				"0x" +
					colors[currFlower.genotype.color[Math.round(Math.random())]]
			);
			// hide debug info
			newFlowerSprite.debugShowBody = false;
			newFlowerSprite.id = currFlowerId;
			// add the flower to the array of onscreen flowers for bee to fly to
			game.flowersOnScreen.push(newFlowerSprite);
		}
	}
}
