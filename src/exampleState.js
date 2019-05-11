import { getRandomColor } from "./utils/determineColor";
import { getRandomShape } from "./utils/determineFlowerShape";
const color1 = getRandomColor();
const color2 = getRandomColor();
const color3 = getRandomColor();
const color4 = getRandomColor();

const shape1 = getRandomShape();
const shape2 = getRandomShape();
const shape3 = getRandomShape();
const shape4 = getRandomShape();

const exampleState = {
    punnett: {
        parent1: {
            genotype: { color: [color1, color2], shape: [shape1, shape2] },
            position: { x: 400, y: 150 }
        },
        parent2: {
            genotype: { color: [color3, color4], shape: [shape3, shape4] },
            position: { x: 200, y: 200 }
        }
    },
    flowers: {
        byId: {
            flower1: {
                genotype: { color: [color1, color2], shape: [shape1, shape2] },
                position: { x: 400, y: 150 }
            },
            flower2: {
                genotype: { color: [color3, color4], shape: [shape3, shape4] },
                position: { x: 200, y: 200 }
            }
        },
        allIds: ["flower1", "flower2"]
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
