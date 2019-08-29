import {
	ADD_FLOWER_TO_STORE,
	CHANGE_FLOWER_NAME,
	SET_FIRST_FLOWER_POSITION
} from "../types/actions";

export const addFlowerToStore = data => {
	const { parent1, parent2, posInfo } = data;
	return {
		type: ADD_FLOWER_TO_STORE,
		data: { parent1, parent2, posInfo }
	};
};

export const changeFlowerName = data => {
	return {
		type: CHANGE_FLOWER_NAME,
		flowerId: data.flowerId,
		newName: data.newName
	};
};

export const setFirstFlowerPosition = (flowerId, initPos) => {
	return {
		type: SET_FIRST_FLOWER_POSITION,
		flowerId,
		initPos
	};
};
