import { colors } from "../types/colors";
const colorsKeys = Object.keys(colors);
const colorsLength = colorsKeys.length;

import { store } from "../index";

export function getRandomColor() {
	console.log(colors);
	return colorsKeys[Math.floor(Math.random() * colorsLength)];
}

export function determineColor(genotype) {
	// set the color by picking a random color in the flowers genotype array
	// prefix with 0x to expect hex
	//return "0x" + colors[genotype.color[Math.round(Math.random())]];

	// Check to see if either color is recessive
	const recessiveColors = store.getState().config.recessive.colors;
	let allele1IsRecessive = false;
	let allele2IsRecessive = false;

	// Loop through the recessiveColors array
	for (let i = 0; i < recessiveColors.length; i++) {
		if (genotype.color[0] === recessiveColors[i]) {
			console.log("1 is recessive");
			allele1IsRecessive = true;
		}
		if (genotype.color[1] === recessiveColors[i]) {
			console.log("2 is recessive");
			allele2IsRecessive = true;
		}
	}

	// if neither color is recessive then 50/50 random
	if (!allele1IsRecessive && !allele2IsRecessive) {
		return "0x" + colors[genotype.color[Math.round(Math.random())]];
	}

	// if both are recessive, then also 50/50 random
	else if (allele1IsRecessive && allele2IsRecessive) {
		return "0x" + colors[genotype.color[Math.round(Math.random())]];
	}

	// if allele1 is not recessive, but allele2 is, always return allele1
	else if (!allele1IsRecessive && allele2IsRecessive) {
		return "0x" + colors[genotype.color[0]];
	}
	// if allele2 is not recessive, but allele1 is, always return allele2
	else if (allele1IsRecessive && !allele2IsRecessive) {
		return "0x" + colors[genotype.color[1]];
	}
}
