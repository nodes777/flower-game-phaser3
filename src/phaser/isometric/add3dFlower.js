import { determineFlowerShape } from "../../determinants/determineFlowerShape";
import { determineStem } from "../../determinants/determineStem.js";
import { getHexColor } from "../../determinants/determineColor";

export function add3dFlower(currFlower, currFlowerId, game) {
	const phenotype = currFlower.phenotype;

	// determine position
	const tile = game.isoTiles.children.entries[22];
	const posX = tile._isoPosition.x;
	const posY = tile._isoPosition.y;

	// set position and shape
	let newFlowerSprite = game.add.isoSprite(
		posX,
		posY,
		2,
		"flower3d" //flowerShape
	);
	// setFrame because ^ isoSprite doesn't set frame correctly
	newFlowerSprite.setFrame(0);

	// add stem
	newFlowerSprite.stem = game.add.isoSprite(
		newFlowerSprite._isoPosition.x,
		newFlowerSprite._isoPosition.y,
		1,
		"straightStem3d" // stem Shape
	);

	newFlowerSprite.stem.setFrame(0);
	// set color
	newFlowerSprite.setTint(getHexColor(phenotype.color));
	// hide debug info
	newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	console.log(newFlowerSprite);

	//add flower reference for the tile
	tile.flowerSprite = newFlowerSprite;

	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
}
