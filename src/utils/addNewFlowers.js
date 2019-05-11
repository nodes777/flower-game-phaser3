import { addFlower } from "./addFlower";
export function addNewFlowers(numFlowersPrev, currState, game) {
	// for each of the new flowers in state, add them to the game
	for (let i = numFlowersPrev; i < currState.flowers.allIds.length; i++) {
		let currFlowerId = currState.flowers.allIds[i];
		let currFlower = currState.flowers.byId[currFlowerId];
		addFlower(currFlower, currFlowerId, game);
	}
}
