import { determineColor } from "./determineColor";
import { store } from "../index";

export const determineGenotype = (parent1Geno, parent2Geno) => {
	let newGenotype = {};
	Object.keys(parent1Geno).forEach(gene => {
		// return one of the alleles randomly for the particular gene
		newGenotype[gene] = [
			parent1Geno[gene][getRandomAllele(parent1Geno[gene])]
		].concat([parent2Geno[gene][getRandomAllele(parent2Geno[gene])]]);
	});

	return newGenotype;
};

export const determinePhenotype = (genotype, recessive) => {
	let phenotype = {};
	Object.keys(genotype).forEach(gene => {
		switch (gene) {
			case "color":
				phenotype[gene] = determineColor(genotype[gene], recessive);
			case "shape":
				// return one of the alleles randomly for the particular gene
				phenotype[gene] =
					genotype[gene][getRandomAllele(genotype[gene])];
			case "stem":
				phenotype[gene] =
					genotype[gene][getRandomAllele(genotype[gene])];
		}
	});
	return phenotype;
};

const getRandomAllele = arr => {
	return Math.floor(Math.random() * arr.length);
};
