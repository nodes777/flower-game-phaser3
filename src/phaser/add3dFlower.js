import { determineFlowerShape } from "../determinants/determineFlowerShape";
import { determineStem } from "../determinants/determineStem.js";
import { getHexColor } from "../determinants/determineColor";
import { animateFlowerGrowth } from "./utils/animateFlowerGrowth";
export function add3dFlower(
	currFlower,
	currFlowerId,
	game,
	fromInitialization = true
) {
	// console.log(currFlower);
	const phenotype = currFlower.phenotype;

	// determine position
	const posX = currFlower.position.x;
	const posY = currFlower.position.y;
	const posZFlower = 2;
	const posZStem = 1;
	const tileIndex = currFlower.tileIndex;
	let flowerShape = determineFlowerShape(phenotype);

	// set position and shape
	let newFlowerSprite = game.add.isoSprite(
		posX, // x
		posY, // y
		posZFlower, // z
		flowerShape
	);

	game.isoPhysics.world.enable(newFlowerSprite);

	// add stem
	newFlowerSprite.stem = game.add.isoSprite(
		newFlowerSprite._isoPosition.x,
		newFlowerSprite._isoPosition.y,
		posZStem,
		"straightStem3d" // stem Shape
	);
	game.isoPhysics.world.enable(newFlowerSprite.stem);
	// set color
	newFlowerSprite.setTint(getHexColor(phenotype.color));

	// hide debug info -  debug info doesnt show on IsoSprites
	// newFlowerSprite.debugShowBody = false;

	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	//console.log(newFlowerSprite);

	//add flower reference for the tile
	game.isoTiles.children.entries[tileIndex].flowerSprite = newFlowerSprite;

	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
	//console.log(newFlowerSprite);
	if (!fromInitialization) {
		// Animation hack
		animateFlowerGrowth(game, newFlowerSprite);
	}
}
