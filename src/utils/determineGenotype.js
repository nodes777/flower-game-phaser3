export const determineGenotype = (parent1Geno, parent2Geno) => {
	let newGenotype = {};
	Object.keys(parent1Geno).forEach(gene => {
		newGenotype[gene] = [
			parent1Geno[gene][getRandomAllele(parent1Geno[gene])]
		].concat([parent2Geno[gene][getRandomAllele(parent2Geno[gene])]]);
		// return one of the alleles for the particular gene
	});

	console.log(newGenotype);

	return newGenotype;
};

const getRandomAllele = arr => {
	return Math.floor(Math.random() * arr.length);
};
