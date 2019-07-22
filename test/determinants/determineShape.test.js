const {
	determineFlowerShape,
	getRandomShape
} = require("../../src/determinants/determineFlowerShape");

const { shapes } = require("../../src/types/flowerShapes");

describe("determineFlowerShape", () => {
	it("returns a string", () => {
		const genotype = {};
		const result = determineFlowerShape(genotype);
		expect(typeof result).toBe("string");
	});
	it("returns 'default' when no genotype shape information is provided", () => {
		const genotype = {};
		const result = determineFlowerShape(genotype);
		expect(result).toBe(shapes.Default);
	});
	it("returns diamond when diamond is the only possible value in the genotype", () => {
		const genotype = { shape: ["diamond", "diamond"] };
		const result = determineFlowerShape(genotype);
		expect(result).toBe(shapes.Diamond);
	});
});
