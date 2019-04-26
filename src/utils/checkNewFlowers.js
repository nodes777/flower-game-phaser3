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
			let newFlowerSprite = game.physics.add.sprite(
				currState.flowers.byId[currFlowerId].position.x,
				currState.flowers.byId[currFlowerId].position.y,
				"blankFlower"
			);
			console.log(
				colors[
					currState.flowers.byId[currFlowerId].genotype.color[
						Math.floor(Math.random())
					]
				]
			);
			// set the color by picking a random color in the flowers genotype array
			// prefix with 0x to expect hex
			newFlowerSprite.setTint(
				"0x" +
					colors[
						currState.flowers.byId[currFlowerId].genotype.color[
							Math.floor(Math.random())
						]
					]
			);
		}
	}
}
