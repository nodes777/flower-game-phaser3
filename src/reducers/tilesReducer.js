import initialState from "../initialState";

import {
	ADD_TILES_TO_STORE,
	ADD_FLOWER_TO_STORE,
	SET_AVAILABLE_TILES,
	SET_FIRST_FLOWER_POSITION,
} from "../types/actions";

export function tilesReducer(state = initialState.tiles, action) {
	switch (action.type) {
		case ADD_TILES_TO_STORE:
			const { tilesArr } = action;

			return {
				numberOfTiles: tilesArr.length,
				allTiles: [...tilesArr],
				availableTiles: [...tilesArr],
			};

		// Formerly TILE_FILLED
		case ADD_FLOWER_TO_STORE:
			const { data } = action;
			const tileIndex = data.posInfo.tileIndex;

			const oldTile = state.allTiles[tileIndex];

			const availableTileIndex = state.availableTiles.indexOf(oldTile);

			oldTile.filled = true;

			return {
				...state,
				allTiles: [
					...state.allTiles.slice(0, tileIndex),
					oldTile,
					...state.allTiles.slice(tileIndex + 1),
				],
				availableTiles: [
					...state.availableTiles.slice(0, availableTileIndex),
					...state.availableTiles.slice(availableTileIndex + 1),
				],
			};

		case SET_FIRST_FLOWER_POSITION:
			const { initPos } = action;
			// cant reuse these variable names when they're const
			const tIndex = initPos.tileIndex;
			let oTile = state.allTiles[tIndex];

			const aTileIndex = state.availableTiles.indexOf(oTile);

			oTile.filled = true;

			return {
				...state,
				allTiles: [
					...state.allTiles.slice(0, tIndex),
					oTile,
					...state.allTiles.slice(tIndex + 1),
				],
				availableTiles: [
					...state.availableTiles.slice(0, aTileIndex),
					...state.availableTiles.slice(aTileIndex + 1),
				],
			};

		case SET_AVAILABLE_TILES:
			const { newTilesArr } = action;
			// console.log(newTilesArr);
			return {
				...state,
				availableTiles: newTilesArr,
			};

		default:
			return state;
	}
}
