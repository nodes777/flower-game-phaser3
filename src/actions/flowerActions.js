import {
	ADD_FLOWER_TO_STORE,
	CHANGE_FLOWER_NAME,
	SET_FIRST_FLOWER_POSITION,
	ADD_BATCH_OF_FLOWERS_TO_STORE,
	CHANGE_PUNNETT_FLOWER
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

export const addBatchOfFlowersToStore = (newFlowersObj, newIds) => {
	return {
		type: ADD_BATCH_OF_FLOWERS_TO_STORE,
		newFlowersObj,
		newIds
	};
};

export const changeParentAllele = data => {
	return {
		type: CHANGE_PUNNETT_FLOWER,
		data
	};
};
