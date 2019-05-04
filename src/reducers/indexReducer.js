import {
	CHANGE_PARENT_ALLELE,
	ADD_FLOWER,
	PICKUP_POLLEN,
	DROP_POLLEN
} from "../actions/indexActions";
import { combineReducers } from "redux";
import exampleState from "../exampleState";
import { determineGenotype } from "../utils/determineGenotype";
import { determineXPos, determineYPos } from "../utils/determinePosition";

export function flowers(state = exampleState, action) {
	switch (action.type) {
		case CHANGE_PARENT_ALLELE:
			const {
				parentId,
				alleleType,
				allelePosition,
				allele
			} = action.data;
			return {
				...state,
				punnett: {
					...state.punnett,
					[parentId]: {
						...state.punnett[parentId],
						genotype: {
							...state.punnett[parentId].genotype,
							[alleleType]: state.punnett[parentId].genotype[
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
						position: { x: determineXPos(), y: determineYPos() }
					}
				},
				allIds: [...state.allIds.concat([newId])]
			};
		case PICKUP_POLLEN: {
			const { beeId, flowerId } = action.data;
			console.log(action.data);
			return {
				...state,
				beesById: {
					...state.beesById,
					[beeId]: {
						pollen: state.byId[flowerId].genotype
					}
				}
			};
		}
		case DROP_POLLEN: {
			const { beeId, pollen } = action.data;
			console.log(beeId);
			return {
				...state,
				beesById: {
					...state.beesById,
					[beeId]: {
						pollen: null
					}
				}
			};
		}
		default:
			return state;
	}
}

const indexReducer = combineReducers({
	flowers
});

export default indexReducer;
