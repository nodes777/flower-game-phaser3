const {
	determineRandomXPos,
	determineRandomYPos
} = require("../../src/utils/determinePosition");

const screenSize = { width: 400, height: 600 };

test("determineRandomXPos returns a number", () => {
	expect(typeof determineRandomXPos(screenSize)).toBe("number");
});
