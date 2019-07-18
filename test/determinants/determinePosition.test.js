const {
	determineRandomXPos,
	determineRandomYPos,
	determinePosition
} = require("../../src/utils/determinePosition");

const screenSize = { width: 400, height: 600 };

describe("determineRandomXPos", () => {
	const result = determineRandomXPos(screenSize);
	it("returns a number", () => {
		expect(typeof result).toBe("number");
	});
	it("returns a number between 0 and screenSize.width", () => {
		expect(result).toBeGreaterThan(0);
		expect(result).toBeLessThan(screenSize.width);
	});
});

describe("determineRandomYPos", () => {
	const result = determineRandomYPos(screenSize);
	it("returns a number", () => {
		expect(typeof result).toBe("number");
	});
	it("returns a number between 0 and screenSize.height", () => {
		expect(result).toBeGreaterThan(0);
		expect(result).toBeLessThan(screenSize.height);
	});
});

describe("determinePosition", () => {
	const parent2Position = { x: 200, y: 300 };
	const allPositions = [{ x: 200, y: 300 }, { x: 100, y: 200 }];
	const result = determinePosition(parent2Position, allPositions, screenSize);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns a posInfo object with availableNewPositions, hasRoom, and newPos properties", () => {
		expect(result).toHaveProperty("availableNewPositions");
		expect(result).toHaveProperty("hasRoom");
		expect(result).toHaveProperty("newPos");
	});
});
