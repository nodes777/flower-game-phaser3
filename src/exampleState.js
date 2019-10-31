import { getRandomColor } from "./determinants/determineColor";
import { getRandomShape } from "./determinants/determineFlowerShape";
import {
    determineRandomXPos,
    determineRandomYPos
} from "./determinants/determinePosition";
import { determinePhenotype } from "./determinants/determineGenotypePhenotype";

import { screenSize } from "./utils/screenSize";
import { loadState } from "./utils/localStorage";

const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();
const color4 = getRandomColor();

const shape1 = getRandomShape();
const shape2 = getRandomShape();
const shape3 = getRandomShape();
const shape4 = getRandomShape();

const parent1Geno = {
    color: [color1, color2],
    shape: [shape1, shape2],
    stem: ["straightStem", "straightStem"]
};

const parent2Geno = {
    color: [color3, color4],
    shape: [shape3, shape4],
    stem: ["straightStem", "straightStem"]
};

const defaultRecessive = { colors: [], shapes: [], stems: [] };

const parent1Pheno = determinePhenotype(parent1Geno, defaultRecessive);

const parent2Pheno = determinePhenotype(parent2Geno, defaultRecessive);

const exampleState = {
    punnett: {
        parent1: {
            genotype: parent1Geno,
            position: {},
            phenotype: parent1Pheno,
            tileIndex: null
        },
        parent2: {
            genotype: parent2Geno,
            position: {},
            phenotype: parent2Pheno,
            tileIndex: null
        }
    },
    flowers: {
        byId: {
            flower1: {
                genotype: parent1Geno,
                position: {},
                phenotype: parent1Pheno,
                name: "flower1",
                tileIndex: null // this doesn't mark the tile as filled
            },
            flower2: {
                genotype: parent2Geno,
                position: {},
                phenotype: parent2Pheno,
                name: "flower2",
                tileIndex: null
            }
        },
        allIds: ["flower1", "flower2"],
        allPositions: [{}, {}]
    },
    bees: {
        byId: {
            bee1: {
                pollen: null
            }
        },
        allBeeIds: ["bee1"]
    },
    config: {
        beeCanFly: false,
        recessive: defaultRecessive,
        tooltip: {
            content: `flower1 ${JSON.stringify(parent1Geno)}`
        }
    },
    tiles: { allTiles: [], availableTiles: [], numberOfTiles: null }
};

export default exampleState;
