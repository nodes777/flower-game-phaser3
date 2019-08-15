import {
	CHANGE_FLOWER,
	ADD_FLOWER_TO_STORE,
	PICKUP_POLLEN,
	DROP_POLLEN,
	BEE_CAN_FLY,
	ADD_RECESSIVE_ALLELE,
	REMOVE_RECESSIVE_ALLELE,
	CHANGE_FLOWER_NAME,
	SHOW_TOOLTIP,
	HIDE_TOOLTIP
} from "../types/actions";

export const changeParentAllele = data => {
	return {
		type: CHANGE_FLOWER,
		data
	};
};

export const addFlowerToStore = data => {
	return {
		type: ADD_FLOWER_TO_STORE,
		data
	};
};

export const pickupPollen = (beeId, pollen, flowerId) => {
	return {
		type: PICKUP_POLLEN,
		data: { beeId, pollen, flowerId }
	};
};

export const dropPollen = beeId => {
	return {
		type: DROP_POLLEN,
		data: { beeId }
	};
};

export const beeCanFly = bool => {
	return {
		type: BEE_CAN_FLY,
		bool
	};
};

export const addRecessiveAllele = data => {
	return {
		type: ADD_RECESSIVE_ALLELE,
		data
	};
};

export const removeRecessiveAllele = data => {
	return {
		type: REMOVE_RECESSIVE_ALLELE,
		data
	};
};

export const changeFlowerName = data => {
	return {
		type: CHANGE_FLOWER_NAME,
		flowerId: data.flowerId,
		newName: data.newName
	};
};

export const showTooltip = data => {
	return {
		type: SHOW_TOOLTIP,
		visible: true,
		content: data.name,
		posX: data.posX,
		posY: data.posY
	};
};
export const hideTooltip = data => {
	return {
		type: HIDE_TOOLTIP,
		visible: false,
		content: "Nothing"
	};
};
