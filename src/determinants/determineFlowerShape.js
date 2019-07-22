import { shapes } from "../types/flowerShapes";
export const determineFlowerShape = genotype => {
	if (genotype.shape === undefined) {
		return shapes.Default;
	}
	return genotype.shape[Math.round(Math.random())];
};

const shapesKeys = Object.keys(shapes);
const shapesLength = shapesKeys.length;

export const getRandomShape = () => {
	return shapes[shapesKeys[Math.floor(Math.random() * shapesLength)]];
};
