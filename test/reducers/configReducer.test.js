const { configReducer } = require("../../src/reducers/configReducer");
import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_ALLELE,
	REMOVE_RECESSIVE_ALLELE
} from "../../src/types/actions";

const defaultRecessive = { colors: [], shapes: [], stems: [] };
const state = {
	beeCanFly: false,
	recessive: defaultRecessive
};
describe("configReducer", () => {
	describe("case: BEE_CAN_FLY", () => {
		const action = {
			type: BEE_CAN_FLY,
			bool: true
		};

		const result = configReducer(state, action);
		it("returns an object", () => {
			expect(typeof result).toBe("object");
		});
		it("returns an object with beeCanFly: true", () => {
			expect(result.beeCanFly).toBeTruthy();
		});
		it("returns an object with beeCanFly: false", () => {
			const action = {
				type: BEE_CAN_FLY,
				bool: false
			};
			const result = configReducer(state, action);
			expect(result.beeCanFly).toBeFalsy();
		});
	});
	describe("case: ADD_RECESSIVE_ALLELE", () => {
		const action = {
			type: ADD_RECESSIVE_ALLELE,
			data: { alleleType: "color" + "s", allele: "AliceBlue" }
		};
		const result = configReducer(state, action);

		it("returns an object", () => {
			expect(typeof result).toBe("object");
		});
		it("returns an object with added recessive color - recessive.colors = AliceBlue", () => {
			expect(result.recessive.colors).toEqual(["AliceBlue"]);
		});
	});
	describe("case: REMOVE_RECESSIVE_ALLELE", () => {
		const action = {
			type: REMOVE_RECESSIVE_ALLELE,
			data: { alleleType: "color" + "s", allele: "AliceBlue" }
		};
		const state = {
			beeCanFly: false,
			recessive: { colors: ["AliceBlue"], shapes: [], stems: [] }
		};
		const result = configReducer(state, action);

		it("returns an object", () => {
			expect(typeof result).toBe("object");
		});
		it("removes the recessive color", () => {
			expect(result.recessive.colors).toEqual([]);
		});
	});
});
