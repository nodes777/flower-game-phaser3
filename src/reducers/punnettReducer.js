import exampleState from "../exampleState";
import { CHANGE_PUNNETT_FLOWER } from "../types/actions";

export function punnettReducer(state = exampleState.punnett, action) {
	switch (action.type) {
		case CHANGE_PUNNETT_FLOWER:
			const {
				parentId,
				alleleType,
				allelePosition,
				allele
			} = action.data;

			return {
				...state,
				[parentId]: {
					...state[parentId],
					genotype: {
						...state[parentId].genotype,
						[alleleType]: state[parentId].genotype[alleleType].map(
							(item, index) => {
								if (index === allelePosition) {
									return allele;
								} else {
									return item;
								}
							}
						)
					}
				}
			};
		default:
			return state;
	}
}
