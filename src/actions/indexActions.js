export const CHANGE_PARENT_ALLELE = "CHANGE_PARENT_ALLELE";
export const ADD_FLOWER = "ADD_FLOWER";

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
