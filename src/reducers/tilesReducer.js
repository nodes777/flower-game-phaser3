import exampleState from "../exampleState";

import { ADD_TILES_TO_STORE, TILE_FILLED } from "../types/actions";

export function tilesReducer(state = exampleState.tiles, action) {
	switch (action.type) {
		case ADD_TILES_TO_STORE:
			const { tilesArr } = action;

			return {
				numberOfTiles: tilesArr.length,
				allTiles: [...tilesArr],
				availableTiles: [...tilesArr]
			};
		case TILE_FILLED:
			const { tileIndex } = action;

			const oldTile = state.allTiles[tileIndex];
			oldTile.filled = true;

			const availableTileIndex = state.availableTiles.indexOf(oldTile);

			return {
				...state,
				allTiles: [
					...state.allTiles.slice(0, tileIndex),
					oldTile,
					...state.allTiles.slice(tileIndex + 1)
				],
				availableTiles: [
					...state.availableTiles.slice(0, availableTileIndex),
					...state.availableTiles.slice(availableTileIndex + 1)
				]
			};
		default:
			return state;
	}
}
