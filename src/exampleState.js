import { getRandomColor } from "./utils/determineColor";
import { getRandomShape } from "./utils/determineFlowerShape";
import {
    determineRandomXPos,
    determineRandomYPos
} from "./utils/determinePosition";

export const screenSize = {
    width: window.innerWidth,
    height: window.innerHeight
};

const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();
const color4 = getRandomColor();

const shape1 = getRandomShape();
const shape2 = getRandomShape();
const shape3 = getRandomShape();
const shape4 = getRandomShape();

const parent1XPos = determineRandomXPos();
const parent1YPos = determineRandomYPos();
const parent2XPos = determineRandomXPos();
const parent2YPos = determineRandomYPos();

const exampleState = {
    punnett: {
        parent1: {
            genotype: { color: [color1, color2], shape: [shape1, shape2] },
            position: { x: parent1XPos, y: parent1YPos }
        },
        parent2: {
            genotype: { color: [color3, color4], shape: [shape3, shape4] },
            position: { x: parent2XPos, y: parent2YPos }
        }
    },
    flowers: {
        byId: {
            flower1: {
                genotype: { color: [color1, color2], shape: [shape1, shape2] },
                position: { x: parent1XPos, y: parent1YPos }
            },
            flower2: {
                genotype: { color: [color3, color4], shape: [shape3, shape4] },
                position: { x: parent2XPos, y: parent2YPos }
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
    }
};
export default exampleState;
