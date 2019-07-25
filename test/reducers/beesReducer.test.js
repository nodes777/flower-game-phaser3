const { beesReducer } = require("../../src/reducers/beesReducer");
import { PICKUP_POLLEN, DROP_POLLEN } from "../../src/types/actions";
import { allTypes } from "../../src/types/allTypes";

const state = {
	byId: {
		bee1: {
			pollen: null
		}
	},
	allBeeIds: ["bee1"]
};

describe("beesReducer", () => {
	describe("case: PICKUP_POLLEN", () => {
		const beeId = "bee1";
		const flowerId = "flower1";
		const pollen = {
			color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
			shape: [allTypes.shapes.default, allTypes.shapes.default],
			stem: ["straightStem", "straightStem"]
		};
		const action = {
			type: PICKUP_POLLEN,
			data: { beeId, pollen, flowerId }
		};

		const result = beesReducer(state, action);
		it("returns an object", () => {
			expect(typeof result).toBe("object");
		});
		it("returns an object with pollen of the genotype passed in", () => {
			expect(result.byId.bee1.pollen).toEqual(pollen);
		});
	});
	describe("case: DROP_POLLEN", () => {
		const action = {
			type: DROP_POLLEN,
			data: { beeId: "bee1" }
		};
		const result = beesReducer(state, action);

		it("returns an object", () => {
			expect(typeof result).toBe("object");
		});
		it("returns an object with pollen of null", () => {
			expect(result.byId.bee1.pollen).toEqual(null);
		});
	});
});
