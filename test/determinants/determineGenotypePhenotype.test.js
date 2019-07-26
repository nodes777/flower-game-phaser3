const {
	determineGenotype,
	determinePhenotype
} = require("../../src/determinants/determineGenotypePhenotype");

const { allTypes } = require("../../src/types/allTypes");

describe("determineGenotype", () => {
	const parent1Geno = {
		color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
		shape: [allTypes.shapes.default, allTypes.shapes.default],
		stem: ["straightStem", "straightStem"]
	};

	const parent2Geno = {
		color: [allTypes.colors.Azure, allTypes.colors.Aqua],
		shape: [allTypes.shapes.diamond, allTypes.shapes.diamond],
		stem: ["straightStem", "straightStem"]
	};

	const result = determineGenotype(parent1Geno, parent2Geno);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with the same properties", () => {
		expect(Object.keys(result)).toEqual(Object.keys(parent1Geno));
	});
});

describe("determinePhenotype", () => {
	const genotype = {
		color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
		shape: [allTypes.shapes.default, allTypes.shapes.default],
		stem: ["straightStem", "straightStem"]
	};

	const recessive = { colors: [], shapes: [], stems: [] };

	const result = determinePhenotype(genotype, recessive);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with the same properties", () => {
		expect(Object.keys(result)).toEqual(Object.keys(genotype));
	});
	it("returns an object with a possible phenotype", () => {
		const possibleColors = [...genotype.color];
		const possibleShapes = [...genotype.shape];
		const possibleStems = [...genotype.stem];
		expect(possibleColors).toContain(result.color);
		expect(possibleShapes).toContain(result.shape);
		expect(possibleStems).toContain(result.stem);
	});
});
