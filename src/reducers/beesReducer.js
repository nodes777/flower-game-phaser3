import exampleState from "../exampleState";
import { PICKUP_POLLEN, DROP_POLLEN } from "../types/types";

export function beesReducer(state = exampleState, action) {
	switch (action.type) {
		case PICKUP_POLLEN: {
			const { beeId, pollen } = action.data;
			console.log(action.data);
			console.log(state);
			return {
				...state,
				byId: {
					...state.byId,
					[beeId]: {
						pollen: pollen
					}
				}
			};
		}
		case DROP_POLLEN: {
			const { beeId, pollen } = action.data;
			console.log(beeId);
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
