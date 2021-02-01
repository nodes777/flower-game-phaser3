import { store } from "../../index.js";
import { addNewFlowers } from "./addNewFlowersToGame";
import { recreatePunnettFlowers } from "./recreatePunnettFlowers";
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

			// checks if punnett flowers are still the same, if not, destroy and recreate
			recreatePunnettFlowers(currState, prevState, this);

			// check if bee should be flying
			this.beeCanFly = currState.config.beeCanFly;
			if (!this.beeCanFly) {
				this.bee.body.acceleration.set(0);
				this.bee.body.velocity.set(0);
			}

			// check if music should play

			this.musicShouldPlay = currState.config.musicShouldPlay;
			if (this.musicShouldPlay) {
				this.song.resume();
			} else if (!this.musicShouldPlay) {
				this.song.pause();
			}
		}
	}
}

export function getStoreState() {
	return store.getState();
}
