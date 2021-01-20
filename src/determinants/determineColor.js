import { colors } from "../types/colors";
const colorsKeys = Object.keys(colors);
const colorsLength = colorsKeys.length;

import { determiner } from "./determiner";

export function determineColor(genotypeColors, recessive) {
	return determiner(genotypeColors, recessive.colors);
}

export function getHexColor(colorName) {
	// prefix with 0x to expect hex
	return "0x" + colors[colorName];
}

export function getRandomColor() {
	return colorsKeys[Math.floor(Math.random() * colorsLength)];
}
