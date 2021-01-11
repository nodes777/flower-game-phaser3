import { store } from "../../index";
import { showTooltip, hideTooltip } from "../../actions/configActions";

export function mouseHoverOn(id) {
	// use flower id to get all info from the store
	const flowerData = store.getState().flowers.byId[id];
	console.log(flowerData);
	// dispatch an update to the tooltip config
	store.dispatch(showTooltip(flowerData));
}

export function mouseHoverOut(event, gameObjects, game, canFire) {
	store.dispatch(hideTooltip());
}
