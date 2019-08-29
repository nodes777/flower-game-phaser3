import { CHANGE_FLOWER } from "../types/actions";

export const changeParentAllele = data => {
	return {
		type: CHANGE_FLOWER,
		data
	};
};
