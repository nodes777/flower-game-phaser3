import { store } from "../../index";
import { determinePosition } from "../../determinants/determinePosition";
import { pickupPollen } from "../../actions/beeActions";
import { pollinate } from "./pollinate";

export function checkForPollen(beeId, flowerId) {
	const storeState = store.getState();
	const beeHasPollen = storeState.bees.byId[beeId].pollen !== null;
	// if no pollen, pick it up
	if (!beeHasPollen) {
		const pollen = storeState.flowers.byId[flowerId].genotype;
		// pollen.id = flowerId;
		store.dispatch(pickupPollen(beeId, pollen, flowerId));
	}

	if (beeHasPollen) {
		pollinate(storeState, beeId, flowerId);
	}
}
