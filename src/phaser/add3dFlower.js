import { determineFlowerShape } from "../determinants/determineFlowerShape";
import { determineStem } from "../determinants/determineStem.js";
import { getHexColor } from "../determinants/determineColor";

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
	const posZInitFlower = -30;
	const posZInitStem = -31;
	const upwardSpeed = 15;
	const tileIndex = currFlower.tileIndex;
	let flowerShape = determineFlowerShape(phenotype);

	// set position and shape
	let newFlowerSprite = game.add.isoSprite(
		posX, // x
		posY, // y
		fromInitialization ? posZFlower : posZInitFlower, // z
		flowerShape
	);

	// setFrame because ^ isoSprite doesn't set frame correctly
	//newFlowerSprite.setFrame(0);

	// Enable the physics body on this
	game.isoPhysics.world.enable(newFlowerSprite);

	// add stem
	newFlowerSprite.stem = game.add.isoSprite(
		newFlowerSprite._isoPosition.x,
		newFlowerSprite._isoPosition.y,
		fromInitialization ? posZStem : posZInitStem,
		"straightStem3d" // stem Shape
	);
	game.isoPhysics.world.enable(newFlowerSprite.stem);
	// set color
	newFlowerSprite.setTint(getHexColor(phenotype.color));
	console.log(newFlowerSprite);

	// hide debug info
	// newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	//console.log(newFlowerSprite);

	//add flower reference for the tile
	game.isoTiles.children.entries[tileIndex].flowerSprite = newFlowerSprite;

	// Animation
	newFlowerSprite.anims.load(`${flowerShape}Spin`);
	console.log("newFlowerSprite animation properties:");
	console.log(newFlowerSprite.anims);
	newFlowerSprite.anims.play(`${flowerShape}Spin`);

	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
	// Growing upward
	if (!fromInitialization) {
		game.flowersGrowing.push({
			flowerSprite: newFlowerSprite,
			stemSprite: newFlowerSprite.stem,
			posZFlower: posZFlower,
			posZStem: posZStem
		});
		game.isoPhysics.moveToXYZ(
			newFlowerSprite,
			posX,
			posY,
			posZFlower,
			upwardSpeed
		);
		game.isoPhysics.moveToXYZ(
			newFlowerSprite.stem,
			posX,
			posY,
			posZStem,
			upwardSpeed
		);
	}
}
