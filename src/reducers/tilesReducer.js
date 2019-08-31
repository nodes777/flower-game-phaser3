import exampleState from "../exampleState";

import {
	ADD_TILES_TO_STORE,
	TILE_FILLED,
	SET_AVAILABLE_TILES
} from "../types/actions";

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

			const availableTileIndex = state.availableTiles.indexOf(oldTile);

			oldTile.filled = true;
			console.log(oldTile);

			console.log(availableTileIndex);
			return {
				...state,
				allTiles: [
					...state.allTiles.slice(0, tileIndex),
					oldTile,
					...state.allTiles.slice(tileIndex + 1)
				],
				// BUG
				availableTiles: [
					...state.availableTiles.slice(0, availableTileIndex),
					...state.availableTiles.slice(availableTileIndex + 1)
				]
			};

		case SET_AVAILABLE_TILES:
			const { newTilesArr } = action;
			console.log(newTilesArr);
			return {
				...state,
				availableTiles: newTilesArr
			};
		default:
			return state;
	}
}
