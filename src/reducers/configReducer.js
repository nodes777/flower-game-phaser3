import exampleState from "../exampleState";
import { BEE_CAN_FLY } from "../types/actions";

export function configReducer(state = exampleState, action) {
	switch (action.type) {
		case BEE_CAN_FLY: {
			const { bool } = action;
			return {
				...state,
				beeCanFly: bool
			};
		}

		default:
			return state;
	}
}
