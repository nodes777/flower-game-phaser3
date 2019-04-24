import { CHANGE_PARENT_ALLELE, ADD_FLOWER } from "../actions/parents";
import { combineReducers } from "redux";
import exampleState from "../exampleState";
import { determineGenotype } from "../utils/determineGenotype";

export function flowers(state = exampleState, action) {
	switch (action.type) {
		case CHANGE_PARENT_ALLELE:
			const {
				flowerId,
				alleleType,
				allelePosition,
				allele
			} = action.data;
			return {
				...state,
				byId: {
					...state.byId,
					[flowerId]: {
						...state.byId[flowerId],
						genotype: {
							...state.byId[flowerId].genotype,
							[alleleType]: state.byId[flowerId].genotype[
								alleleType
							].map((item, index) => {
								if (index === allelePosition) {
									return allele;
								} else {
									return item;
								}
							})
						}
					}
				}
			};
		case ADD_FLOWER:
			const { parent1, parent2 } = action.data;
			// Better way to generate ids?
			const newId = `flower${state.allIds.length + 1}`;
			return {
				...state,
				byId: {
					...state.byId,
					[newId]: {
						genotype: determineGenotype(
							parent1.genotype,
							parent2.genotype
						),
						position: { x: 0, y: 0 }
					}
				},
				allIds: [...state.allIds.concat([newId])]
			};
		default:
			return state;
	}
}

const indexReducer = combineReducers({
	flowers
});

export default indexReducer;
