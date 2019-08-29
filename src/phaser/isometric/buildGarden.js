import { addTiles } from "./addTiles";
import { setFirstFlowerPosition } from "../../actions/flowerActions";
import { store } from "../../index";
import { determineRandomPos } from "../../determinants/determinePosition";
const sizes = [256, 512, 800, 1024];

export const buildGarden = game => {
	const size = sizes[2];
	addTiles(game, size);
	// if size if big, shift camera up
	if (size > 700) {
		game.iso.projector.origin.setTo(0.5, 0.1);
	}
	if (size > 900) {
		game.iso.projector.origin.setTo(0.5, 0.02);
	}

	// set first two flowers positions
	const availableTiles = store.getState().tiles.availableTiles;
	const initPos1 = determineRandomPos(availableTiles);

	const availableTiles2 = store.getState().tiles.availableTiles;
	const initPos2 = determineRandomPos(availableTiles2);

	store.dispatch(setFirstFlowerPosition("flower1", initPos1));
	store.dispatch(setFirstFlowerPosition("flower2", initPos2));
};
