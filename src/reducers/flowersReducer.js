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
import {
	CHANGE_PUNNETT_FLOWER,
	ADD_FLOWER_TO_STORE,
	CHANGE_FLOWER_NAME,
	SET_FIRST_FLOWER_POSITION,
	ADD_BATCH_OF_FLOWERS_TO_STORE
} from "../types/actions";

export function flowersReducer(state = exampleState.flowers, action) {
	switch (action.type) {
		case SET_FIRST_FLOWER_POSITION:
			const { flowerId, initPos } = action;

			return {
				...state,
				byId: {
					...state.byId,
					[flowerId]: {
						...state.byId[flowerId],
						position: {
							x: initPos.x,
							y: initPos.y
						},
						tileIndex: initPos.tileIndex
					}
				}
			};
		case ADD_FLOWER_TO_STORE:
			const { parent1, parent2, posInfo } = action.data;
			const recessive = action.recessive;
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
						phenotype: determinePhenotype(newGenotype, recessive),
						name: newId,
						tileIndex: posInfo.tileIndex
					}
				},
				allIds: [...state.allIds.concat([newId])],
				allPositions: [...state.allPositions.concat(posInfo.newPos)]
			};
		case CHANGE_FLOWER_NAME:
			return {
				...state,
				byId: {
					...state.byId,
					[action.flowerId]: {
						...state.byId[action.flowerId],
						name: action.newName
					}
				}
			};
		case ADD_BATCH_OF_FLOWERS_TO_STORE:
			const { newFlowersObj, newIds } = action;
			return {
				...state,
				byId: {
					...state.byId,
					...newFlowersObj
				},
				allIds: [...state.allIds.concat([...newIds])]
			};
		case CHANGE_PUNNETT_FLOWER:
			const {
				parentId,
				alleleType,
				allelePosition,
				allele,
				recessiveTraits
			} = action.data;

			const punnettFlowerId = `flower${parentId.slice(-1)}`;

			const newPunnettGenotype = {
				...state.byId[punnettFlowerId].genotype,
				[alleleType]: state.byId[punnettFlowerId].genotype[
					alleleType
				].map((item, index) => {
					if (index === allelePosition) {
						return allele;
					} else {
						return item;
					}
				})
			};
			console.log("flowersReducer CHANGE_PUNNETT_FLOWER");

			return {
				...state,
				byId: {
					...state.byId,
					[punnettFlowerId]: {
						...state.byId[punnettFlowerId],
						genotype: newPunnettGenotype,
						phenotype: determinePhenotype(
							newPunnettGenotype,
							recessiveTraits
						)
					}
				}
			};

		default:
			return state;
	}
}
