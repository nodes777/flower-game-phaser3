import { getHexColor } from "../determinants/determineColor";
// import { determineFlowerShape } from "../determinants/determineFlowerShape";
// import { determineStem } from "../determinants/determineStem.js";
import { store } from "../index";

export function addFlower(currFlower, currFlowerId, game) {
	const phenotype = store.getState().flowers.byId[currFlowerId].phenotype;
	console.log(phenotype);
	// set position and shape
	let newFlowerSprite = game.physics.add.sprite(
		currFlower.position.x,
		currFlower.position.y,
		phenotype.shape
	);
	// set color
	newFlowerSprite.setTint(getHexColor(phenotype.color));
	// hide debug info
	newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	// add stem
	game.add.image(newFlowerSprite.x, newFlowerSprite.y + 12, phenotype.stem);

	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
}
