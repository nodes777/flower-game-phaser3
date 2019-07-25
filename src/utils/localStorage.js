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
		return serializedState;
	} catch (err) {
		console.log("Error saving the state: ");
		console.log(err);
	}
};

export const clearState = () => {
	try {
		localStorage.clear();
	} catch (err) {
		console.log("Error clearing the localStorage: ");
		console.log(err);
	}
};
