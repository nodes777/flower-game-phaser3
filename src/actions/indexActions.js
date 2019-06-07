import {
	CHANGE_PARENT_ALLELE,
	ADD_FLOWER,
	PICKUP_POLLEN,
	DROP_POLLEN
} from "../types/actions";

export const changeParentAllele = data => {
	return {
		type: CHANGE_PARENT_ALLELE,
		data
	};
};

export const addFlower = data => {
	return {
		type: ADD_FLOWER,
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
