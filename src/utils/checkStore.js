import { store } from "../index.js";
let currentValue;
export const checkStore = () => {
	let previousValue = currentValue;
	currentValue = store.getState();
	if (currentValue != previousValue) {
		console.log("something's changed");
		console.log(store.getState());
	}
};
