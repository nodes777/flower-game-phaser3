import { store } from "../index.js";
import { checkNewFlowers } from "../utils/checkNewFlowers";
let currState;

export function checkStore() {
	let prevState = currState;
	currState = store.getState();
	// compare if state has changed
	if (currState != prevState) {
		// check if the state has been initialized
		if (prevState !== undefined) {
			//console.log("Store has changed");
			//console.log(store.getState());
			//check for new flower by looking at length of flower.allIds
			let numFlowersPrev = prevState.flowers.allIds.length;
			let numFlowersCurr = currState.flowers.allIds.length;
			checkNewFlowers(numFlowersPrev, numFlowersCurr, currState, this);
		}
	}
}
