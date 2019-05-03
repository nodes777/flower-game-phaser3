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

export const pickupPollen = data => {
	console.log("pickupPollen action");
	return {
		type: PICKUP_POLLEN,
		data
	};
};

export const dropPollen = data => {
	console.log("dropPollen action");
	return {
		type: DROP_POLLEN,
		data
	};
};
