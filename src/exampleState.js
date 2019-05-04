const exampleState = {
    punnett: {
        parent1: {
            genotype: { color: [undefined, undefined] },
            position: { x: 0, y: 0 }
        },
        parent2: {
            genotype: { color: [undefined, undefined] },
            position: { x: 0, y: 0 }
        }
    },
    flowers: {
        byId: {
            flower1: {
                genotype: { color: [undefined, undefined] },
                position: { x: 0, y: 0 }
            },
            flower2: {
                genotype: { color: [undefined, undefined] },
                position: { x: 0, y: 0 }
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
