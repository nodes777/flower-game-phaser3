import { ADD_TILES_TO_STORE, TILE_FILLED } from "../types/actions";

export const addTilesToStore = tilesArr => {
	return {
		type: ADD_TILES_TO_STORE,
		tilesArr
	};
};

export const markTileAsFilled = tileIndex => {
	return {
		type: TILE_FILLED,
		tileIndex
	};
};
