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
	HIDE_TOOLTIP,
	ADD_TILES_TO_STORE,
	TILE_FILLED,
	SET_FIRST_FLOWER_POSITION
} from "../types/actions";

export const changeParentAllele = data => {
	return {
		type: CHANGE_FLOWER,
		data
	};
};

export const addFlowerToStore = data => {
	const { parent1, parent2, posInfo } = data;
	return {
		type: ADD_FLOWER_TO_STORE,
		data: { parent1, parent2, posInfo }
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

export const addTilesToStore = tilesArr => {
	return {
		type: ADD_TILES_TO_STORE,
		tilesArr
	};
};

export const markTileAsFilled = tileIndex => {
	return {
		type: TILE_FILLED,
		tileIndex
	};
};

export const setFirstFlowerPosition = (flowerId, initPos) => {
	return {
		type: SET_FIRST_FLOWER_POSITION,
		flowerId,
		initPos
	};
};
