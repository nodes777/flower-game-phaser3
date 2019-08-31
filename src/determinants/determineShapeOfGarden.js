import { ROW } from "../types/gardenShapes";

export const determineShapeOfGarden = (type, tiles) => {
	console.log("determineShapeOfGarden");
	switch (type) {
		case ROW: {
			return tiles.filter((currentValue, index, arr) => {
				return index % 2;
			});
		}
		case DROP_POLLEN: {
		}
		default:
			return tiles;
	}
};
