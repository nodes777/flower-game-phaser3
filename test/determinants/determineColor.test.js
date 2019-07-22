const {
	determineColor,
	getHexColor,
	getRandomColor
} = require("../../src/determinants/determineColor");

const { colors } = require("../../src/types/colors");

describe("determineColor", () => {
	it("returns a string", () => {
		const recessive = { colors: ["AliceBlue", "Beige"] };
		const genoTypeColors = ["Azure", "Bisque"];
		const result = determineColor(genoTypeColors, recessive);
		expect(typeof result).toBe("string");
	});
	it("returns the color that is dominant when the other is recessive", () => {
		const recessive = { colors: ["AliceBlue", "Beige"] };
		const genoTypeColors = ["AliceBlue", "Bisque"];
		const result = determineColor(genoTypeColors, recessive);
		expect(result).toBe(colors.Bisque);
		expect(result).not.toBe(colors.AliceBlue);
	});
	it("returns either color when both are recessive", () => {
		const recessive = { colors: ["AliceBlue", "Beige"] };
		const genoTypeColors = ["AliceBlue", "Beige"];
		const result = determineColor(genoTypeColors, recessive);
		expect([colors.Beige, colors.AliceBlue]).toContain(result);
	});
});

describe("getHexColor", () => {
	const result = getHexColor("BlanchedAlmond");
	it("returns a string", () => {
		expect(typeof result).toBe("string");
	});
	it("BlanchedAlmond returns ", () => {
		expect(result).toBe("0xffebcd");
	});
});

describe("getRandomColor", () => {
	const result = getRandomColor();
	it("returns a string", () => {
		expect(typeof result).toBe("string");
	});
	it("Is one of the colors ", () => {
		expect(Object.keys(colors)).toContain(result);
	});
});
