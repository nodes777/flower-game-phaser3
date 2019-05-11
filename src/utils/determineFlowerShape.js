import { flowerShapes } from "../types/flowerShapes";
export const determineFlowerShape = genotype => {
	if (genotype.shape === undefined) {
		return flowerShapes.DEFAULT;
	}
	return genotype.shape[Math.round(Math.random())];
};

const shapesKeys = Object.keys(flowerShapes);
const shapesLength = shapesKeys.length;

export const getRandomShape = () => {
	return flowerShapes[shapesKeys[Math.floor(Math.random() * shapesLength)]];
};
