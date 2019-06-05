import exampleState from "../exampleState";
import { determineGenotype } from "../utils/determineGenotype";
import {
	determineXPos,
	determineYPos,
	verifyPositions
} from "../utils/determinePosition";
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
			// detemine individual positions based on parent 2
			let xPos = determineXPos(parent2.position);
			let yPos = determineYPos(parent2.position);
			// verify that those positions are open
			let positionObj = verifyPositions(
				xPos,
				yPos,
				state.allPositions,
				parent2.position
			);
			return {
				...state,
				byId: {
					...state.byId,
					[newId]: {
						genotype: determineGenotype(
							parent1.genotype,
							parent2.genotype
						),
						position: {
							x: positionObj.x,
							y: positionObj.y
						}
					}
				},
				allIds: [...state.allIds.concat([newId])],
				allPositions: [...state.allPositions.concat(positionObj)]
			};

		default:
			return state;
	}
}
