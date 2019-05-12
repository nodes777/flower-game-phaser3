import exampleState from "../exampleState";
import { determineGenotype } from "../utils/determineGenotype";
import { determineXPos, determineYPos } from "../utils/determinePosition";
import { CHANGE_PARENT_ALLELE, ADD_FLOWER } from "../types/actions";

export function flowersReducer(state = exampleState.flowers, action) {
	switch (action.type) {
		case CHANGE_PARENT_ALLELE:
			const {
				parentId,
				alleleType,
				allelePosition,
				allele
			} = action.data;
			console.log("CHANGE_PARENT_ALLELE in flowersReducer");
			return {
				...state
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
						position: { x: determineXPos(), y: determineYPos() }
					}
				},
				allIds: [...state.allIds.concat([newId])]
			};

		default:
			return state;
	}
}
