const {
	CHANGE_FLOWER,
	ADD_FLOWER_TO_STORE,
	PICKUP_POLLEN,
	DROP_POLLEN,
	BEE_CAN_FLY,
	ADD_RECESSIVE_ALLELE,
	REMOVE_RECESSIVE_ALLELE,
	CHANGE_FLOWER_NAME
} = require("../../src/types/actions");

const {
	changeParentAllele,
	addFlowerToStore,
	pickupPollen,
	dropPollen,
	beeCanFly,
	addRecessiveAllele,
	removeRecessiveAllele,
	changeFlowerName
} = require("../../src/actions/indexActions");

const { allTypes } = require("../../src/types/allTypes");

describe("changeParentAllele", () => {
	const data = {
		parentId: "parentId",
		alleleType: "alleleType",
		allelePosition: "allelePosition",
		allele: "currentAllele"
	};
	const result = changeParentAllele(data);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: CHANGE_FLOWER", () => {
		expect(result.type).toBe(CHANGE_FLOWER);
	});
	it("returns an object with data matching the input data", () => {
		expect(result.data).toEqual(data);
	});
	it("returns an object with data.parentId, alleleType, allelePosition, and allele", () => {
		expect(Object.keys(result.data)).toEqual(Object.keys(data));
	});
});

describe("addFlowerToStore", () => {
	const data = {
		parent1: {
			genotype: {
				color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
				shape: [allTypes.shapes.Default, allTypes.shapes.Default],
				stem: ["straightStem", "straightStem"]
			}
		},
		parent2: {
			genotype: {
				color: [allTypes.colors.Azure, allTypes.colors.Aqua],
				shape: [allTypes.shapes.Diamond, allTypes.shapes.Diamond],
				stem: ["straightStem", "straightStem"]
			}
		},
		posInfo: {
			newPos: {
				x: 200,
				y: 300
			}
		}
	};
	const result = addFlowerToStore(data);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: ADD_FLOWER_TO_STORE", () => {
		expect(result.type).toBe(ADD_FLOWER_TO_STORE);
	});
	it("returns an object with data matching the input data", () => {
		expect(result.data).toEqual(data);
	});
	it("returns an object with parent1, parent2, and posInfo", () => {
		expect(Object.keys(result.data)).toEqual(Object.keys(data));
	});
	it("returns an object with parent1's properties matching the input", () => {
		expect(Object.keys(result.data.parent1)).toEqual(
			Object.keys(data.parent1)
		);
	});
});

describe("pickupPollen", () => {
	const beeId = "bee1";
	const pollen = {
		color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
		shape: [allTypes.shapes.Default, allTypes.shapes.Default],
		stem: ["straightStem", "straightStem"]
	};
	const flowerId = "flower1";
	const result = pickupPollen(beeId, pollen, flowerId);

	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: PICKUP_POLLEN", () => {
		expect(result.type).toBe(PICKUP_POLLEN);
	});
	it("returns an object with data: beeId, pollen, flowerId", () => {
		expect(result.data).toEqual({ beeId, pollen, flowerId });
	});
});

describe("dropPollen", () => {
	const beeId = "bee1";

	const result = dropPollen(beeId);

	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: DROP_POLLEN", () => {
		expect(result.type).toBe(DROP_POLLEN);
	});
	it("returns an object with data: beeId", () => {
		expect(result.data.beeId).toEqual(beeId);
	});
});

describe("beeCanFly", () => {
	const result = beeCanFly(true);
	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: BEE_CAN_FLY", () => {
		expect(result.type).toBe(BEE_CAN_FLY);
	});
	it("When true, returns an object with data: true", () => {
		expect(result.bool).toBeTruthy();
	});
});

describe("addRecessiveAllele", () => {
	const data = {
		alleleType: "color" + "s",
		allele: "AliceBlue"
	};

	const result = addRecessiveAllele(data);

	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: ADD_RECESSIVE_ALLELE", () => {
		expect(result.type).toBe(ADD_RECESSIVE_ALLELE);
	});
	it("returns an object with data: alleleType and allele", () => {
		expect(result.data).toEqual(data);
	});
});

describe("removeRecessiveAllele", () => {
	const data = {
		alleleType: "color" + "s",
		allele: "AliceBlue"
	};

	const result = removeRecessiveAllele(data);

	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: REMOVE_RECESSIVE_ALLELE", () => {
		expect(result.type).toBe(REMOVE_RECESSIVE_ALLELE);
	});
	it("returns an object with data: alleleType and allele", () => {
		expect(result.data).toEqual(data);
	});
});

describe("changeFlowerName", () => {
	const data = {
		flowerId: "flower1",
		newName: "Jerry"
	};

	const result = changeFlowerName(data);

	it("returns an object", () => {
		expect(typeof result).toBe("object");
	});
	it("returns an object with type: CHANGE_FLOWER_NAME", () => {
		expect(result.type).toBe(CHANGE_FLOWER_NAME);
	});
	it("returns an object with data: flowerId:flower1 and newName:Jerry", () => {
		expect(result.flowerId).toBe("flower1");
		expect(result.newName).toBe("Jerry");
	});
});
