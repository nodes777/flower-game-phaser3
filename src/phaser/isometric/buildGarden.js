import { addTiles } from "./addTiles";
import { setFirstFlowerPosition } from "../../actions/flowerActions";
import { store } from "../../index";
import {
	determineRandomPos,
	determineCenterTile
} from "../../determinants/determinePosition";

import { determineShapeOfGarden } from "../../determinants/determineShapeOfGarden";
import { tileHeight } from "./addTiles";
import { setAvailableTiles, markTileAsFilled } from "../../actions/tileActions";
import { CHECKER_BOARD } from "../../types/gardenShapes.js";
import { fillAvailableTiles } from "../utils/fillAvailableTiles.js";

const sizes = [240, 400, 800, 1040];

export const buildGarden = game => {
	const size = sizes[3];
	addTiles(game, size);
	// if size if big, shift camera up
	if (size > 700) {
		game.iso.projector.origin.setTo(0.5, 0.1);
	}
	if (size > 900) {
		game.iso.projector.origin.setTo(0.5, 0.02);
	}
	// find center point
	const tiles = store.getState().tiles;
	const centerTile = determineCenterTile(tiles, size, tileHeight);
	const lastTile = tiles.allTiles[tiles.numberOfTiles - 1];

	// set first two flowers positions
	const availableTiles = store.getState().tiles.availableTiles;
	//const initTile1 = determineRandomPos(availableTiles);

	const availableTiles2 = store.getState().tiles.availableTiles;
	//const initTile2 = determineRandomPos(availableTiles2);

	store.dispatch(setFirstFlowerPosition("flower1", centerTile));
	store.dispatch(setFirstFlowerPosition("flower2", lastTile));
	store.dispatch(markTileAsFilled(centerTile.tileIndex));
	store.dispatch(markTileAsFilled(lastTile.tileIndex));
	// // set the available tiles in a shape
	// this is not an action - the next step is the action
	// const newAvailableTiles = determineShapeOfGarden("ROW", availableTiles);

	// store.dispatch(setAvailableTiles(newAvailableTiles));

	// // // fill available tiles
	// fillAvailableTiles(newAvailableTiles, game);
};
