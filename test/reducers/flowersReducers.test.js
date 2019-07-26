const { flowersReducer } = require("../../src/reducers/flowersReducer");
import { CHANGE_FLOWER, ADD_FLOWER } from "../../src/types/actions";
const { allTypes } = require("../../src/types/allTypes");

/* Setup */
const parent1Geno = {
	color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
	shape: [allTypes.shapes.Default, allTypes.shapes.Default],
	stem: ["straightStem", "straightStem"]
};

const parent2Geno = {
	color: [allTypes.colors.Azure, allTypes.colors.Aqua],
	shape: [allTypes.shapes.Diamond, allTypes.shapes.Diamond],
	stem: ["straightStem", "straightStem"]
};
const parent1Pheno = {
	color: allTypes.colors.Azure,
	shape: allTypes.shapes.diamond,
	stem: "straightStem"
};

const parent2Pheno = {
	color: allTypes.colors.Aqua,
	shape: allTypes.shapes.diamond,
	stem: "straightStem"
};

const parent1XPos = 200;
const parent1YPos = 300;
const parent2XPos = 150;
const parent2YPos = 300;

const state = {
	byId: {
		flower1: {
			genotype: parent1Geno,
			position: { x: parent1XPos, y: parent1YPos },
			phenotype: parent1Pheno
		},
		flower2: {
			genotype: parent2Geno,
			position: { x: parent2XPos, y: parent2YPos },
			phenotype: parent2Pheno
		}
	},
	allIds: ["flower1", "flower2"],
	allPositions: [
		{ x: parent1XPos, y: parent1YPos },
		{ x: parent2XPos, y: parent2YPos }
	]
};

const defaultRecessive = { colors: [], shapes: [], stems: [] };
const posInfo = {
	hasRoom: true,
	availableNewPositions: [],
	newPos: { x: 200, y: 150 }
};

/* Tests*/
describe("flowersReducer", () => {
	describe("case: CHANGE_FLOWER", () => {
		const action = {
			type: CHANGE_FLOWER,
			data: {}
		};

		const result = flowersReducer(state, action);
		it("does nothing", () => {
			expect(result).toEqual(state);
		});
	});
	describe("case: ADD_FLOWER", () => {
		const action = {
			type: ADD_FLOWER,
			data: {
				parent1: state.byId.flower1,
				parent2: state.byId.flower2,
				posInfo: posInfo,
				recessive: defaultRecessive
			}
		};

		const result = flowersReducer(state, action);
		it("Adds to allIds with flower3", () => {
			expect(result.allIds.length).toBe(state.allIds.length + 1);
			expect(result.allIds[result.allIds.length - 1]).toBe("flower3");
		});
		it("Adds to allPositions with newPos", () => {
			expect(result.allPositions.length).toBe(
				state.allPositions.length + 1
			);
			expect(result.allPositions[result.allPositions.length - 1]).toEqual(
				posInfo.newPos
			);
		});
		it("Adds to byId with flower3", () => {
			expect(Object.keys(result.byId).length).toBe(
				Object.keys(state.byId).length + 1
			);
			expect(result.byId.flower3).toBeTruthy();
		});
		it("returns flower3 with the same property names as the parents", () => {
			expect(Object.keys(result.byId.flower3)).toEqual(
				Object.keys(state.byId.flower1)
			);
		});
		it("returns flower3 with a possible genotype from the parents", () => {
			const possibleColors = [
				...state.byId.flower1.genotype.color,
				...state.byId.flower2.genotype.color
			];
			const possibleShapes = [
				...state.byId.flower1.genotype.shape,
				...state.byId.flower2.genotype.shape
			];
			const possibleStems = [
				...state.byId.flower1.genotype.stem,
				...state.byId.flower2.genotype.stem
			];
			expect(possibleColors).toEqual(
				expect.arrayContaining(result.byId.flower3.genotype.color)
			);
			expect(possibleShapes).toEqual(
				expect.arrayContaining(result.byId.flower3.genotype.shape)
			);
			expect(possibleStems).toEqual(
				expect.arrayContaining(result.byId.flower3.genotype.stem)
			);
		});
	});
});
