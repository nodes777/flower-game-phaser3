//const store = require("../src/index").store;
//import toBeType from "jest-tobetype";

// test("store is an object", () => {
// 	expect(typeof store).toBe("object");
// });

// Unit test - Tests one thing
test("string is a string", () => {
	expect(typeof "string").toBe("string");
});

// a mock function that returns 3
const mockFunction = jest.fn(() => 3);
