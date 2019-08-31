import { store } from "../../index.js";
import { addFlowerToStore } from "../../actions/flowerActions";
import { add3dFlower } from "../isometric/add3dFlower";
import { markTileAsFilled } from "../../actions/tileActions";

export const fillAvailableTiles = (tiles, game) => {
	const punnett = store.getState().punnett;

	tiles.forEach((tile, i) => {
		const info = {
			parent1: {
				genotype: {
					color: punnett.parent1.genotype.color,
					shape: ["square", "round"],
					stem: punnett.parent1.genotype.stem
				},
				position: { x: 0, y: 0 }
			},
			parent2: {
				genotype: {
					color: punnett.parent2.genotype.color,
					shape: ["square", "diamond"],
					stem: punnett.parent2.genotype.stem
				},
				position: { x: 0, y: 0 }
			},
			posInfo: {
				newPos: { x: tile.x, y: tile.y },
				tileIndex: tile.tileIndex
			}
		};

		store.dispatch(addFlowerToStore(info));
		store.dispatch(markTileAsFilled(tile.tileIndex));
	});

	const flowers = store.getState().flowers;
	flowers.allIds.forEach(flowerId => {
		add3dFlower(flowers.byId[flowerId], flowerId, game);
	});
};
