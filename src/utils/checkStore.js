import { store } from "../index.js";
let currentValue;
export const checkStore = x => {
	let previousValue = currentValue;
	currentValue = store.getState();
	if (currentValue != previousValue) {
		console.log("something's changed");
		console.log(x);
		console.log(store.getState());
		this.physics.add.sprite(400, 150, "blankFlower");
	}
};
