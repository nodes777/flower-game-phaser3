export const CHANGE_PARENT_ALLELE = "CHANGE_PARENT_ALLELE";
export const ADD_FLOWER = "ADD_FLOWER";
export const ADD_BEE = "ADD_BEE";

export const PICKUP_POLLEN = "PICKUP_POLLEN";
export const DROP_POLLEN = "DROP_POLLEN";

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

export const pickupPollen = (beeId, flowerId) => {
	console.log("pickupPollen action");
	console.log(beeId, flowerId);
	return {
		type: PICKUP_POLLEN,
		data: { beeId, flowerId }
	};
};

export const dropPollen = beeId => {
	console.log("dropPollen action");
	return {
		type: DROP_POLLEN,
		data: { beeId }
	};
};
