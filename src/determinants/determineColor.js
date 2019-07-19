import { colors } from "../types/colors";
const colorsKeys = Object.keys(colors);
const colorsLength = colorsKeys.length;

export function determineColor(genotypeColors, recessive) {
	// Check to see if either color is recessive
	const recessiveColors = recessive.colors;
	let allele1IsRecessive = false;
	let allele2IsRecessive = false;

	// Loop through the recessiveColors array
	for (let i = 0; i < recessiveColors.length; i++) {
		if (genotypeColors[0] === recessiveColors[i]) {
			console.log("1 is recessive");
			allele1IsRecessive = true;
		}
		if (genotypeColors[1] === recessiveColors[i]) {
			console.log("2 is recessive");
			allele2IsRecessive = true;
		}
	}

	// if neither color is recessive then 50/50 random
	if (!allele1IsRecessive && !allele2IsRecessive) {
		return colors[genotypeColors[Math.round(Math.random())]];
	}

	// if both are recessive, then also 50/50 random
	else if (allele1IsRecessive && allele2IsRecessive) {
		return colors[genotypeColors[Math.round(Math.random())]];
	}

	// if allele1 is not recessive, but allele2 is, always return allele1
	else if (!allele1IsRecessive && allele2IsRecessive) {
		return colors[genotypeColors[0]];
	}
	// if allele2 is not recessive, but allele1 is, always return allele2
	else if (allele1IsRecessive && !allele2IsRecessive) {
		return colors[genotypeColors[1]];
	}
}

export function getHexColor(colorName) {
	// prefix with 0x to expect hex
	return "0x" + colors[colorName];
}

export function getRandomColor() {
	return colorsKeys[Math.floor(Math.random() * colorsLength)];
}
