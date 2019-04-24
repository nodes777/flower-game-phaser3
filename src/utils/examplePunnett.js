import {
	purple,
	gray,
	white,
	red,
	orange,
	blue,
	lightPurp,
	pink
} from "./colors.js";

import { Gloob } from "./Gloob";

// Parent genos are both AB
const examplePunnett = [["AA", "AB"], ["AB", "BB"]];

// Parent geno 1: purple, gray
// Parent geno 2: purple, red
const exampleColorPunnett = [
	[purple, purple],
	[purple, gray],
	[red, purple],
	[red, gray]
];

const exampleColorGenotype = [purple, gray];
const exampleColorPhenotype =
	exampleColorGenotype[Math.floor(Math.random() * Math.floor(2))];

const exampleGenotype = {
	color: [purple, gray]
};
const generatePhenotype = genotype => {
	const phenotype = {};
	phenotype.color = genotype.color[Math.floor(Math.random() * Math.floor(2))];

	return phenotype;
};

const exampleParent = {
	genotype: {
		color: [purple, gray]
	},
	phenotype: {}
};

const generatePunnettSquare = (parent1, parent2) => {
	return [
		[parent1.genotype.color[0], parent2.genotype.color[0]],
		[parent1.genotype.color[1], parent2.genotype.color[0]],
		[parent1.genotype.color[0], parent2.genotype.color[1]],
		[parent1.genotype.color[1], parent2.genotype.color[1]]
	];
};

//const gloob1 = new Gloob();
console.log(gloob1);
