const { configReducer } = require("../../src/reducers/configReducer");
import {
	BEE_CAN_FLY,
	ADD_RECESSIVE_TRAIT,
	REMOVE_RECESSIVE_TRAIT
} from "../../src/types/actions";

const defaultRecessive = { colors: [], shapes: [], stems: [] };

describe("configReducer", () => {
	const action = {
		type: BEE_CAN_FLY,
		bool: true
	};
	const state = {
		beeCanFly: false,
		recessive: defaultRecessive
	};
	const result = configReducer(state, action);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with beeCanFly: true", () => {
		expect(result.beeCanFly).toBeTruthy();
	});
});
