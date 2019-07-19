import exampleState from "../exampleState";
import {
	determineGenotype,
	determinePhenotype
} from "../determinants/determineGenotypePhenotype";
import {
	determineXPos,
	determineYPos,
	verifyPositions
} from "../determinants/determinePosition";
import { CHANGE_FLOWER, ADD_FLOWER } from "../types/actions";

export function flowersReducer(state = exampleState.flowers, action) {
	switch (action.type) {
		case CHANGE_FLOWER:
			const { flowerId } = action.data;
			console.log(
				"CHANGE_FLOWER in flowersReducer, NOTHING HAPPENS HERE"
			);
			return {
				...state
			};
		case ADD_FLOWER:
			const { parent1, parent2, posInfo } = action.data;
			// Better way to generate ids?
			const newId = `flower${state.allIds.length + 1}`;
			const newGenotype = determineGenotype(
				parent1.genotype,
				parent2.genotype
			);

			return {
				...state,
				byId: {
					...state.byId,
					[newId]: {
						genotype: newGenotype,
						position: {
							x: posInfo.newPos.x,
							y: posInfo.newPos.y
						},
						phenotype: determinePhenotype(
							newGenotype,
							action.recessive
						)
					}
				},
				allIds: [...state.allIds.concat([newId])],
				allPositions: [...state.allPositions.concat(posInfo.newPos)]
			};

		default:
			return state;
	}
}
