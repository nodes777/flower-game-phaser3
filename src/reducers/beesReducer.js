import initialState from "../initialState";
import { PICKUP_POLLEN, DROP_POLLEN } from "../types/actions";

export function beesReducer(state = initialState.bees, action) {
	switch (action.type) {
		case PICKUP_POLLEN: {
			const { beeId, pollen, flowerId } = action.data;
			return {
				...state,
				byId: {
					...state.byId,
					[beeId]: {
						pollen: pollen,
						pollenId: flowerId,
					},
				},
			};
		}
		case DROP_POLLEN: {
			const { beeId, pollen } = action.data;
			return {
				...state,
				byId: {
					...state.byId,
					[beeId]: {
						pollen: null,
					},
				},
			};
		}
		default:
			return state;
	}
}
