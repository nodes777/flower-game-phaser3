import { shapes } from "../types/flowerShapes";
import { determiner } from "./determiner";
export const determineFlowerShape = (genotypeShapes, recessive) => {
	return determiner(genotypeShapes, recessive.shapes);
};

export const showFlowerShape = (phenotype) => {
	if (phenotype.shape === undefined) {
		return shapes.Default;
	}
	switch (phenotype.shape.toLowerCase()) {
		case "default": {
			return `${shapes.Default}Flower`;
		}
		case "triangle": {
			return `${shapes.Triangle}Flower`;
		}
		case "square": {
			return `${shapes.Square}Flower`;
		}
		case "round": {
			return `${shapes.Round}Flower`;
		}
		default: {
			console.error("flower shape isn't a specified type");
			return `${shapes.Default}Flower`;
		}
	}
};

const shapesKeys = Object.keys(shapes);
const shapesLength = shapesKeys.length;

export const getRandomShape = () => {
	return shapes[shapesKeys[Math.floor(Math.random() * shapesLength)]];
};
