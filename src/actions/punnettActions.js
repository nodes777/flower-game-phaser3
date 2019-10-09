import { CHANGE_PUNNETT_FLOWER } from "../types/actions";

export const changeParentAllele = data => {
	return {
		type: CHANGE_PUNNETT_FLOWER,
		data
	};
};
