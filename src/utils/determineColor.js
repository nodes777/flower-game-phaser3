import { colors } from "../types/colors";
const colorsKeys = Object.keys(colors);
const colorsLength = colorsKeys.length;
export function getRandomColor() {
	return colorsKeys[Math.floor(Math.random() * colorsLength)];
}

export function determineColor(genotype) {
	// set the color by picking a random color in the flowers genotype array
	// prefix with 0x to expect hex
	return "0x" + colors[genotype.color[Math.round(Math.random())]];
}
