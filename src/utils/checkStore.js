import { store } from "../index.js";
let currState;

export function checkStore() {
	let prevState = currState;
	currState = store.getState();
	// compare if state has changed
	if (currState != prevState) {
		// check if the state has been initialized
		if (prevState !== undefined) {
			console.log("something's changed");
			console.log(store.getState());
			let numFlowersPrev = prevState.flowers.allIds.length;
			let numFlowersCurr = currState.flowers.allIds.length;
			//check for new flower by looking at length of flower.allIds
			if (numFlowersCurr !== numFlowersPrev) {
				const diff = numFlowersCurr - numFlowersPrev;
				console.log(diff + " new flower(s)");

				// for each of the new flowers in state, add them to the game
				for (
					let i = numFlowersPrev;
					i < currState.flowers.allIds.length;
					i++
				) {
					let currFlowerId = currState.flowers.allIds[i];
					this.physics.add.sprite(
						currState.flowers.byId[currFlowerId].position.x,
						currState.flowers.byId[currFlowerId].position.y,
						"blankFlower"
					);
				}
			}
		}
	}
}
