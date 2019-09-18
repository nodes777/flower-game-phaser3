import { store } from "../../index.js";
import { addBatchOfFlowersToStore } from "../../actions/flowerActions";
import { add3dFlower } from "../add3dFlower";
import { markTileAsFilled } from "../../actions/tileActions";
import {
	determineGenotype,
	determinePhenotype
} from "../../determinants/determineGenotypePhenotype";

export const fillAvailableTiles = (tiles, game) => {
	const state = store.getState();
	const punnett = state.punnett;
	const recessive = state.config.recessive;

	let flowersToBeAdded = {};
	let newIds = [];

	tiles.forEach((tile, i) => {
		const genotype = determineGenotype(
			punnett.parent1.genotype,
			punnett.parent2.genotype
		);
		// i +3 because of the first two flowers
		const name = `flower${i + 3}`;
		const newFlower = {
			genotype: genotype,
			phenotype: determinePhenotype(genotype, recessive),
			name: name,
			position: { x: tile.x, y: tile.y },
			tileIndex: tile.tileIndex
		};
		flowersToBeAdded[name] = newFlower;
		newIds.push(name);

		//store.dispatch(addFlowerToStore(info));
		store.dispatch(markTileAsFilled(tile.tileIndex));
	});
	console.log(flowersToBeAdded);
	store.dispatch(addBatchOfFlowersToStore(flowersToBeAdded, newIds));

	const flowers = store.getState().flowers;
	flowers.allIds.forEach(flowerId => {
		add3dFlower(flowers.byId[flowerId], flowerId, game);
	});
};

// export const fillAvailableTiles = (tiles, game) => {
// 	const punnett = store.getState().punnett;

// 	tiles.forEach((tile, i) => {
// 		const info = {
// 			parent1: {
// 				genotype: {
// 					color: punnett.parent1.genotype.color,
// 					shape: ["square", "round"],
// 					stem: punnett.parent1.genotype.stem
// 				},
// 				position: { x: 0, y: 0 }
// 			},
// 			parent2: {
// 				genotype: {
// 					color: punnett.parent2.genotype.color,
// 					shape: ["square", "diamond"],
// 					stem: punnett.parent2.genotype.stem
// 				},
// 				position: { x: 0, y: 0 }
// 			},
// 			posInfo: {
// 				newPos: { x: tile.x, y: tile.y },
// 				tileIndex: tile.tileIndex
// 			}
// 		};

// 		store.dispatch(addFlowerToStore(info));
// 		store.dispatch(markTileAsFilled(tile.tileIndex));
// 	});

// 	const flowers = store.getState().flowers;
// 	flowers.allIds.forEach(flowerId => {
// 		add3dFlower(flowers.byId[flowerId], flowerId, game);
// 	});
// };
