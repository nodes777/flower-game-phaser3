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

const parent1XPos = determineRandomXPos(screenSize);
const parent1YPos = determineRandomYPos(screenSize);
const parent2XPos = determineRandomXPos(screenSize);
const parent2YPos = determineRandomYPos(screenSize);

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
            position: { x: parent1XPos, y: parent1YPos },
            phenotype: parent1Pheno
        },
        parent2: {
            genotype: parent2Geno,
            position: { x: parent2XPos, y: parent2YPos },
            phenotype: parent2Pheno
        }
    },
    flowers: {
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
        recessive: defaultRecessive
    }
};

export default exampleState;
