const screenSize = require("../src/index.js").screenSize;
//import toBeType from "jest-tobetype";

console.log(screenSize);

test("screenSize is an object", () => {
  expect(typeof screenSize).toBe("object");
});
