import { customDestroy } from "../utils/customDestroy";
import { add3dFlower } from "../add3dFlower";

export function recreatePunnettFlowers(currState, prevState, game) {
	if (prevState.flowers.byId.flower1 !== currState.flowers.byId.flower1) {
		// the native destroy doesn't work on isoSprites
		customDestroy(game.flowersOnScreen[0]);
		add3dFlower(currState.flowers.byId.flower1, "flower1", game, false, 0);
	}

	if (prevState.flowers.byId.flower2 !== currState.flowers.byId.flower2) {
		customDestroy(game.flowersOnScreen[1]);
		add3dFlower(currState.flowers.byId.flower2, "flower2", game, false, 1);
	}
}
