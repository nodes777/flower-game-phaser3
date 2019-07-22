const {
	determineStem,
	getRandomStem
} = require("../../src/determinants/determineStem");

const { stems } = require("../../src/types/flowerStems");

describe("determineStem", () => {
	const result = determineStem();
	it("returns a string", () => {
		expect(typeof result).toBe("string");
	});
	it("returns a valid stem type", () => {
		expect(Object.keys(stems)).toContain(result);
	});
});

describe("getRandomStem", () => {
	const result = getRandomStem();
	it("returns a string", () => {
		expect(typeof result).toBe("string");
	});
	it("returns a valid stem type", () => {
		expect(Object.keys(stems)).toContain(result);
	});
});
