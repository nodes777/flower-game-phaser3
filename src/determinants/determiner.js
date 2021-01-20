export const determiner = (genotypeForThisTrait, recessivenessForThisGene) => {
	let allele1IsRecessive = false;
	let allele2IsRecessive = false;

	// Loop through the recessivenessForThisGene array
	for (let i = 0; i < recessivenessForThisGene.length; i++) {
		if (genotypeForThisTrait[0] === recessivenessForThisGene[i]) {
			allele1IsRecessive = true;
		}
		if (genotypeForThisTrait[1] === recessivenessForThisGene[i]) {
			allele2IsRecessive = true;
		}
	}

	// if neither is recessive then 50/50 random
	if (!allele1IsRecessive && !allele2IsRecessive) {
		return genotypeForThisTrait[Math.round(Math.random())];
	}

	// if both are recessive, then also 50/50 random
	else if (allele1IsRecessive && allele2IsRecessive) {
		return genotypeForThisTrait[Math.round(Math.random())];
	}

	// if allele1 is not recessive, but allele2 is, always return allele1
	else if (!allele1IsRecessive && allele2IsRecessive) {
		return genotypeForThisTrait[0];
	}
	// if allele2 is not recessive, but allele1 is, always return allele2
	else if (allele1IsRecessive && !allele2IsRecessive) {
		return genotypeForThisTrait[1];
	}
};
