import { store } from "../index.js";
import { markTileAsFilled } from "../actions/tileActions.js";
export const determineRandomPos = availableTiles => {
	console.log(availableTiles);
	let tileIndex = Math.floor(Math.random() * availableTiles.length - 1);

	let tile = availableTiles[tileIndex];

	store.dispatch(markTileAsFilled(tile.tileIndex));
	return tile;
};

export const determinePosition = () => {
	//store.getState().tiles
	let posInfo = { availableNewPositions: [] };
	return posInfo;
};

export const determineCenterTile = (tiles, size, tileHeight) => {
	const totalTiles = tiles.numberOfTiles;
	// divide total in half
	const halfOfTotalNumOfTiles = Math.floor(totalTiles / 2);
	// and add half the size divided by the tileHeight
	const columns = size / tileHeight;
	const j = Math.floor(columns / 2);

	// i = the index of the block whose coordinates you'd like to calculate
	// columns = the total width of your drawing, divided by its pixel tileHeight
	// tileHeight = the width of one of your drawing's blocks in canvas pixels
	// const x = Math.floor(210 % columns) * tileHeight;
	// const y = Math.floor(210 / columns) * tileHeight;
	// console.log("size " + size);
	// console.log("columns " + columns);
	// console.log("totalTiles " + totalTiles);
	// console.log("halfOfTotalNumOfTiles " + halfOfTotalNumOfTiles);
	// console.log("size/columns " + size / columns);
	//console.log(totalTiles);

	const middleIndex = halfOfTotalNumOfTiles + j;
	const centerTile = tiles.allTiles[middleIndex];

	// console.log("middleIndex: " + middleIndex);
	// console.log(centerTile);

	return centerTile;
};

// export const determinePosition = (
// 	parent2Position,
// 	allPositions,
// 	screenSize
// ) => {
// 	let possibleNewPositions = [
// 		{ x: parent2Position.x + 20, y: parent2Position.y + 20 },
// 		{ x: parent2Position.x + 20, y: parent2Position.y - 20 },
// 		{ x: parent2Position.x - 20, y: parent2Position.y + 20 },
// 		{ x: parent2Position.x - 20, y: parent2Position.y - 20 }
// 	];

// 	let posInfo = { availableNewPositions: [] };

// 	for (let i = 0; i <= possibleNewPositions.length - 1; i++) {
// 		let isTaken = allPositions.some(oldPosition => {
// 			return (
// 				JSON.stringify(oldPosition) ===
// 				JSON.stringify(possibleNewPositions[i])
// 			);
// 		});

// 		let isWithinBounds =
// 			possibleNewPositions[i].x > 0 &&
// 			possibleNewPositions[i].y > 0 &&
// 			possibleNewPositions[i].x < screenSize.width &&
// 			possibleNewPositions[i].y < screenSize.height;

// 		if (!isTaken && isWithinBounds) {
// 			posInfo.availableNewPositions.push(possibleNewPositions[i]);
// 		}
// 	}
// 	var randPos =
// 		posInfo.availableNewPositions[
// 			Math.floor(Math.random() * posInfo.availableNewPositions.length)
// 		];
// 	posInfo.hasRoom = posInfo.availableNewPositions.length > 0;
// 	posInfo.newPos = randPos;
// 	return posInfo;
// };

// export const determineXPos = parent2Position => {
// 	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
// 	let newXPosition = parent2Position.x + plusOrMinus * 20;
// 	console.log(`newXPosition ${newXPosition}`);
// 	return newXPosition;
// };
// export const determineYPos = parent2Position => {
// 	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
// 	let newYPosition = parent2Position.y + plusOrMinus * 20;
// 	console.log(`newYPosition ${newYPosition}`);
// 	return newYPosition;
// };

// export const determineRandomXPos = screenSize => {
// 	const tiles = store.getState().tiles
// 	return Math.floor(Math.random() * screenSize.width + 1);
// };
// export const determineRandomYPos = screenSize => {
// 	return Math.floor(Math.random() * screenSize.height + 1);
// };
