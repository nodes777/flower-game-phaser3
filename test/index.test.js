const add2 = require("../src/utils/determinePosition").add2;
//const screenSize = require("../src/index.js").screenSize;
//import toBeType from "jest-tobetype";

test("add Test", () => {
  expect(add2()).toBe(4);
});

// test("screenSize is an object", () => {
//   expect(typeof screenSize).toBe("object");
// });
