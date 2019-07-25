const {
	loadState,
	saveState,
	clearState
} = require("../../src/utils/localStorage");
const exampleState = require("../../src/exampleState");

describe("loadState", () => {
	const result = loadState();
	it("returns undefined", () => {
		expect(typeof result).toBe("undefined");
	});
});

describe("saveState", () => {
	const data = exampleState;
	const result = saveState(data);
	it("returns a string of the serialized exampleState", () => {
		expect(typeof result).toBe("string");
		expect(result).toBe(JSON.stringify(exampleState));
	});
});

describe("clearState", () => {
	const result = clearState();
	it("returns undefined", () => {
		expect(typeof result).toBe("undefined");
	});
});
