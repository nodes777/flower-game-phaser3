import exampleState from "../exampleState";
import { PICKUP_POLLEN, DROP_POLLEN } from "../types/actions";

export function beesReducer(state = exampleState, action) {
	switch (action.type) {
		case PICKUP_POLLEN: {
			const { beeId, pollen, flowerId } = action.data;
			return {
				...state,
				byId: {
					...state.byId,
					[beeId]: {
						pollen: pollen,
						pollenId: flowerId
					}
				}
			};
		}
		case DROP_POLLEN: {
			const { beeId, pollen } = action.data;
			return {
				...state,
				byId: {
					...state.byId,
					[beeId]: {
						pollen: null
					}
				}
			};
		}
		default:
			return exampleState.bees;
	}
}
