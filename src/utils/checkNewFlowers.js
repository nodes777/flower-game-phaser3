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
			game.physics.add.sprite(
				currState.flowers.byId[currFlowerId].position.x,
				currState.flowers.byId[currFlowerId].position.y,
				"blankFlower"
			);
		}
	}
}
