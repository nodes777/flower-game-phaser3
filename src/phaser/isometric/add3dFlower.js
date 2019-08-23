import { determineFlowerShape } from "../../determinants/determineFlowerShape";
import { determineStem } from "../../determinants/determineStem.js";
import { getHexColor } from "../../determinants/determineColor";

export function add3dFlower(currFlower, currFlowerId, game) {
	const phenotype = currFlower.phenotype;

	console.log(game.isoTiles);
	console.log(game.isoTiles.children.entries);
	console.log(game.isoTiles.children.entries[0]);
	// determine position
	const posX = game.isoTiles.children.entries[0]._isoPosition.x;
	const posY = game.isoTiles.children.entries[0]._isoPosition.y;
	console.log(posX, posY);

	// set position and shape
	let newFlowerSprite = game.add.isoSprite(
		posX,
		posY,
		32,
		"flower3d" //flowerShape
	);
	newFlowerSprite.setFrame(4);

	// add stem
	newFlowerSprite.stem = game.add.isoSprite(
		newFlowerSprite._isoPosition.x,
		newFlowerSprite._isoPosition.y,
		15,
		"straightStem3d" // stem Shape
	);

	newFlowerSprite.stem.setFrame(4);
	// set color
	newFlowerSprite.setTint(getHexColor(phenotype.color));
	// hide debug info
	newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	console.log(newFlowerSprite);
	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
}
