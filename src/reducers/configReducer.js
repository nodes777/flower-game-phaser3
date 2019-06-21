import exampleState from "../exampleState";
import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_TRAIT,
	REMOVE_RECESSIVE_TRAIT
} from "../types/actions";

export function configReducer(state = exampleState.config, action) {
	switch (action.type) {
		case BEE_CAN_FLY: {
			const { bool } = action;
			return {
				...state,
				beeCanFly: bool
			};
		}
		case ADD_RECESSIVE_TRAIT: {
			// TraitType ~= geneType, and trait ~= allele
			// but different because the traits aren't necessarily genes in a plant
			const { traitType, trait } = action.data;

			return {
				...state,
				recessive: {
					...state.recessive,
					[traitType]: [...state.recessive[traitType].concat([trait])]
				}
			};
		}
		case REMOVE_RECESSIVE_TRAIT: {
			const { traitType, trait } = action.data;
			return {
				...state,
				recessive: {
					...state.recessive,
					[traitType]: state.recessive[traitType].filter(
						(value, index) => value !== trait
					)
				}
			};
		}

		default:
			return state;
	}
}
