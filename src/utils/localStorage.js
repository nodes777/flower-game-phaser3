export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			//reducers will initialize the state instead
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch (err) {
		console.log("Error saving the state: ");
		console.log(err);
	}
};
