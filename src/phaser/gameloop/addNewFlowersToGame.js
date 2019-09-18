import { add3dFlower } from "../add3dFlower";
export function addNewFlowers(numFlowersPrev, currState, game) {
	// for each of the new flowers in state, add them to the game
	for (let i = numFlowersPrev; i < currState.flowers.allIds.length; i++) {
		let currFlowerId = currState.flowers.allIds[i];
		let currFlower = currState.flowers.byId[currFlowerId];
		add3dFlower(currFlower, currFlowerId, game);
	}
}
