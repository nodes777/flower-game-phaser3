import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_ALLELE,
	REMOVE_RECESSIVE_ALLELE,
	SHOW_TOOLTIP,
	HIDE_TOOLTIP,
} from "../types/actions";

export const beeCanFly = (bool) => {
	return {
		type: BEE_CAN_FLY,
		bool,
	};
};

export const addRecessiveAllele = (data) => {
	return {
		type: ADD_RECESSIVE_ALLELE,
		data,
	};
};

export const removeRecessiveAllele = (data) => {
	return {
		type: REMOVE_RECESSIVE_ALLELE,
		data,
	};
};

export const showTooltip = (data) => {
	return {
		type: SHOW_TOOLTIP,
		name: data.name,
		genotype: data.genotype,
		phenotype: data.phenotype,
		content: data.name,
	};
};

export const hideTooltip = (data) => {
	return {
		type: HIDE_TOOLTIP,
		visible: false,
		content: "Nothing",
	};
};
