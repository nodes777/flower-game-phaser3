import { store } from "../../index.js";
import { addNewFlowers } from "./addNewFlowersToGame";
import { add3dFlower } from "../add3dFlower";
import { customDestroy } from "../utils/customDestroy";

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

			// check if punnett flowers are still the same, if not, destroy and recreate

			if (
				prevState.flowers.byId.flower1 !==
				currState.flowers.byId.flower1
			) {
				// the native destroy doesn't work on isoSprites
				customDestroy(this.flowersOnScreen[0]);
				add3dFlower(
					currState.flowers.byId.flower1,
					"flower1",
					this,
					false,
					0
				);
			}

			if (
				prevState.flowers.byId.flower2 !==
				currState.flowers.byId.flower2
			) {
				customDestroy(this.flowersOnScreen[1]);
				add3dFlower(
					currState.flowers.byId.flower2,
					"flower2",
					this,
					false,
					1
				);
			}

			// check if bee should be flying
			this.beeCanFly = currState.config.beeCanFly;
		}
	}
}

export function getStoreState() {
	return store.getState();
}
