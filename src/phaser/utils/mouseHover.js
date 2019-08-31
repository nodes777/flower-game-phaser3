import { store } from "../../index";
import { showTooltip, hideTooltip } from "../../actions/configActions";

export function mouseHoverOn(event, gameObjects, game, canFire) {
	const name = store.getState().flowers.byId[gameObjects[0].id].name;
	const posX = event.event.clientX;
	const posY = event.event.clientY;
	const data = { posX, posY, name };
	store.dispatch(showTooltip(data));
}

export function mouseHoverOut(event, gameObjects, game, canFire) {
	store.dispatch(hideTooltip());
}
