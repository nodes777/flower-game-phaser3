import { ADD_FLOWER_TO_STORE } from "../types/actions";

const recessivizer = store => next => action => {
	if (action.type === ADD_FLOWER_TO_STORE) {
		const recessive = store.getState().config.recessive;
		const returnValue = action;
		returnValue.recessive = recessive;
		next(returnValue);
		return returnValue;
	} else {
		return next(action);
	}
};

export default recessivizer;
