import initialState from "../initialState";
import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_ALLELE,
	REMOVE_RECESSIVE_ALLELE,
	SHOW_TOOLTIP,
	HIDE_TOOLTIP,
	PLAY_MUSIC,
	PAUSE_MUSIC,
} from "../types/actions";

export function configReducer(state = initialState.config, action) {
	switch (action.type) {
		case BEE_CAN_FLY: {
			const { bool } = action;
			return {
				...state,
				beeCanFly: bool,
			};
		}
		case ADD_RECESSIVE_ALLELE: {
			const { alleleType, allele } = action.data;
			return {
				...state,
				recessive: {
					...state.recessive,
					[alleleType]: [...state.recessive[alleleType].concat([allele])],
				},
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
					),
				},
			};
		}
		case SHOW_TOOLTIP: {
			const { name, genotype, phenotype } = action;
			return {
				...state,
				tooltip: {
					content: { name, genotype, phenotype },
				},
			};
		}
		case PLAY_MUSIC: {
			return {
				...state,
				musicShouldPlay: true,
			};
		}
		case PAUSE_MUSIC: {
			return {
				...state,
				musicShouldPlay: false,
			};
		}

		default:
			return state;
	}
}
