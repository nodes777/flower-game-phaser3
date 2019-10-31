import exampleState from "../exampleState";
import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_ALLELE,
	REMOVE_RECESSIVE_ALLELE,
	SHOW_TOOLTIP,
	HIDE_TOOLTIP
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
		case ADD_RECESSIVE_ALLELE: {
			const { alleleType, allele } = action.data;
			return {
				...state,
				recessive: {
					...state.recessive,
					[alleleType]: [
						...state.recessive[alleleType].concat([allele])
					]
				}
			};
		}
		case REMOVE_RECESSIVE_ALLELE: {
			const { alleleType, allele } = action.data;
			return {
				...state,
				recessive: {
					...state.recessive,
					[alleleType]: state.recessive[alleleType].filter(
						(value, index) => value !== allele
					)
				}
			};
		}
		case SHOW_TOOLTIP: {
			const { name, genotype, phenotype } = action;
			return {
				...state,
				tooltip: {
					content: `${name} ${JSON.stringify(genotype)}`
				}
			};
		}

		default:
			return state;
	}
}
