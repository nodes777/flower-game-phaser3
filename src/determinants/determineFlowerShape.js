import { shapes } from "../types/flowerShapes";
export const determineFlowerShape = phenotype => {
	if (phenotype.shape === undefined) {
		return shapes.Default;
	}
	console.log(phenotype.shape);
	switch (phenotype.shape) {
		case "default": {
			return `${shapes.Default}Flower`;
		}
		case "diamond": {
			//dont have a diamond shape yet
			return `${shapes.Default}Flower`;
		}
		case "square": {
			return `${shapes.Square}Flower`;
		}
		case "round": {
			return `${shapes.Round}Flower`;
		}
		default:
			return `${shapes.Default}Flower`;
	}
};

const shapesKeys = Object.keys(shapes);
const shapesLength = shapesKeys.length;

export const getRandomShape = () => {
	return shapes[shapesKeys[Math.floor(Math.random() * shapesLength)]];
};
