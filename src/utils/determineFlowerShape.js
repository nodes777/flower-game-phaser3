import { flowerShapes } from "./flowerShapes";
export const determineFlowerShape = genotype => {
	console.log(genotype.shape);
	if (genotype.shape === undefined) {
		return flowerShapes.DEFAULT;
	}
	return genotype.shape[Math.round(Math.random())];
};
