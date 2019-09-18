import { store } from "../../index";
import { addFlowerToStore } from "../../actions/flowerActions";
import { determinePosition } from "../../determinants/determinePosition";

import { dropPollen } from "../../actions/beeActions";

// pollinate, from bee pollen
export const pollinate = (storeState, beeId, flowerId) => {
	// pollinate, from bee pollen
	const bee = storeState.bees.byId[beeId];
	const pollen = bee.pollen;
	const pollenId = bee.pollenId;
	// get currently collided flower
	const flower2 = storeState.flowers.byId[flowerId];
	const allTileIndex = flower2.tileIndex;
	const availableTiles = storeState.tiles.availableTiles;

	// find nearest available tile index
	// let availableTile = availableTiles[allTileIndex];

	// let counter = allTileIndex - 1;
	// while (availableTile === undefined) {
	// 	availableTile = availableTiles[counter];
	// 	counter--;
	// }

	// if there's room
	if (availableTiles.length > 0) {
		// find random tile
		const availableTile =
			availableTiles[Math.floor(Math.random() * availableTiles.length)];

		// create object with parental info
		const info = {
			parent1: {
				id: pollenId,
				genotype: pollen,
				position: { x: 0, y: 0 }
			},
			parent2: {
				id: flowerId,
				genotype: flower2.genotype,
				position: flower2.position
			},
			posInfo: {
				newPos: { x: availableTile.x, y: availableTile.y },
				tileIndex: availableTile.tileIndex
			}
		};
		store.dispatch(addFlowerToStore(info));
		store.dispatch(dropPollen(beeId));
	} else {
		// flower is full
		store.dispatch(dropPollen(beeId));
	}
};
