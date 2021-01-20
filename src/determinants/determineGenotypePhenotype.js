import { determineColor } from "./determineColor";
import { determineFlowerShape } from "./determineFlowerShape";

export const determineGenotype = (parent1Geno, parent2Geno) => {
	let newGenotype = {};
	Object.keys(parent1Geno).forEach((gene) => {
		// get one allele randomly from each parent per trait
		const p1a = getRandomAllele(parent1Geno[gene]);
		const p2a = getRandomAllele(parent2Geno[gene]);

		// return one of the alleles randomly for the particular trait/gene
		newGenotype[gene] = [parent1Geno[gene][p1a]].concat([
			parent2Geno[gene][p2a],
		]);
	});

	return newGenotype;
};

export const determinePhenotype = (genotype, recessive) => {
	let phenotype = {};
	Object.keys(genotype).forEach((gene) => {
		switch (gene) {
			case "color":
				phenotype.color = determineColor(genotype[gene], recessive);
			case "shape":
				// return one of the alleles randomly for the particular gene
				phenotype.shape = determineFlowerShape(genotype[gene], recessive);
			case "stem":
				phenotype.stem = genotype[gene][getRandomAllele(genotype[gene])];
		}
	});
	return phenotype;
};

const getRandomAllele = (arr) => {
	return Math.floor(Math.random() * arr.length);
};
