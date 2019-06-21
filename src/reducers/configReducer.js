import exampleState from "../exampleState";
import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_COLOR,
	REMOVE_RECESSIVE_COLOR
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
		case ADD_RECESSIVE_COLOR: {
			const { color } = action;
			return {
				...state,
				recessive: {
					...state.recessive,
					colors: [...state.recessive.colors.concat([color])]
				}
			};
		}
		case REMOVE_RECESSIVE_COLOR: {
			const { color } = action;
			return {
				...state,
				recessive: {
					...state.recessive,
					colors: state.recessive.colors.filter(
						(value, index) => value !== color
					)
				}
			};
		}

		default:
			return state;
	}
}
