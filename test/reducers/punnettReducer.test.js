const { punnettReducer } = require("../../src/reducers/punnettReducer");
import { CHANGE_FLOWER } from "../../src/types/actions";
const { allTypes } = require("../../src/types/allTypes");

const parent1Geno = {
	color: [allTypes.colors.AliceBlue, allTypes.colors.Bisque],
	shape: [allTypes.shapes.Default, allTypes.shapes.Default],
	stem: ["straightStem", "straightStem"]
};

const parent2Geno = {
	color: [allTypes.colors.Azure, allTypes.colors.Aqua],
	shape: [allTypes.shapes.diamond, allTypes.shapes.diamond],
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
	parent1: {
		genotype: parent1Geno,
		position: { x: parent1XPos, y: parent1YPos },
		phenotype: parent1Pheno
	},
	parent2: {
		genotype: parent2Geno,
		position: { x: parent2XPos, y: parent2YPos },
		phenotype: parent2Pheno
	}
};

describe("punnettReducer", () => {
	describe("case: CHANGE_FLOWER", () => {
		const action = {
			type: CHANGE_FLOWER,
			data: {
				parentId: "parent1",
				alleleType: "color",
				allelePosition: 0,
				allele: "black"
			}
		};

		const result = punnettReducer(state, action);
		it("returns an object", () => {
			expect(typeof result).toBe("object");
		});
		it("changes the genotype of the correct parent", () => {
			expect(result.parent1).not.toEqual(state.parent1);
		});
		it("does not change the genotype of the other parent", () => {
			expect(result.parent2).toEqual(state.parent2);
		});

		it("returns an object with the new genotype color black in the 1st position of the color allele", () => {
			expect(result.parent1.genotype.color[0]).toBe("black");
		});
		it("does not change the other alleles", () => {
			expect(result.parent1.genotype.shape).toEqual(
				state.parent1.genotype.shape
			);
			expect(result.parent1.genotype.stem).toEqual(
				state.parent1.genotype.stem
			);
		});
		it("does not change the other position of the color allele", () => {
			expect(result.parent1.genotype.color[1]).toEqual(
				state.parent1.genotype.color[1]
			);
		});
	});
});
