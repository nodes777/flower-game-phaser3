import { store } from "../../index.js";
import { addNewFlowers } from "../../utils/addNewFlowers";
let currState;

export function checkStore() {
	let prevState = currState;
	currState = store.getState();
	// compare if state has changed
	if (currState != prevState) {
		// check if the state has been initialized
		if (prevState !== undefined) {
			//check for new flower by looking at length of flower.allIds
			let numFlowersPrev = prevState.flowers.allIds.length;
			let numFlowersCurr = currState.flowers.allIds.length;
			if (numFlowersCurr !== numFlowersPrev) {
				const diff = numFlowersCurr - numFlowersPrev;
				console.log(diff + " new flower(s)");
				addNewFlowers(numFlowersPrev, currState, this);
			}

			// check if bee should be flying
			this.beeCanFly = currState.config.beeCanFly;
		}
	}
}

export function getStoreState() {
	return store.getState();
}
