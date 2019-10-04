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
		posZFlower, // z
		flowerShape
	);

	// setFrame because ^ isoSprite doesn't set frame correctly

	//newFlowerSprite.setFrame(4);

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
	console.log(newFlowerSprite);

	// hide debug info -  debug info doesnt show on IsoSprites
	// newFlowerSprite.debugShowBody = false;
	// create id
	newFlowerSprite.id = currFlowerId;
	// keep on top of stem
	newFlowerSprite.depth = 1;
	//console.log(newFlowerSprite);

	//add flower reference for the tile
	game.isoTiles.children.entries[tileIndex].flowerSprite = newFlowerSprite;

	// // Animation
	// loading the animation sets the frame to 0 and never plays the animation
	// whyyyyyyy
	// console.log(`${flowerShape}Spin`);
	// newFlowerSprite.anims.load(`${flowerShape}Spin`);
	// console.log("newFlowerSprite animation properties:");
	// console.log(newFlowerSprite.anims);
	// newFlowerSprite.anims.play(`${flowerShape}Spin`);
	// console.log(newFlowerSprite.anims);

	// add the flower to the array of onscreen flowers for bee to fly to
	game.flowersOnScreen.push(newFlowerSprite);
	// Growing upward
	if (!fromInitialization) {
		// game.flowersGrowing.push({
		// 	flowerSprite: newFlowerSprite,
		// 	stemSprite: newFlowerSprite.stem,
		// 	posZFlower: posZFlower,
		// 	posZStem: posZStem
		// });
		// game.isoPhysics.moveToXYZ(
		// 	newFlowerSprite,
		// 	posX,
		// 	posY,
		// 	posZFlower,
		// 	upwardSpeed
		// );
		// game.isoPhysics.moveToXYZ(
		// 	newFlowerSprite.stem,
		// 	posX,
		// 	posY,
		// 	posZStem,
		// 	upwardSpeed
		// );

		// Animation hack
		animateFlowerGrowth(game, newFlowerSprite);
	}
}

function animateFlowerGrowth(game, sprite) {
	const speed = 100;
	game.time.addEvent({
		delay: speed,
		callback: function() {
			sprite.setFrame(1);
			sprite.stem.setFrame(1);
		}
	});
	game.time.addEvent({
		delay: speed * 2,
		callback: function() {
			sprite.setFrame(2);
			sprite.stem.setFrame(2);
		}
	});
	game.time.addEvent({
		delay: speed * 3,
		callback: function() {
			sprite.setFrame(3);
			sprite.stem.setFrame(3);
		}
	});
	game.time.addEvent({
		delay: speed * 4,
		callback: function() {
			sprite.setFrame(4);
			sprite.stem.setFrame(4);
		}
	});
	game.time.addEvent({
		delay: speed * 5,
		callback: function() {
			sprite.setFrame(5);
			sprite.stem.setFrame(5);
		}
	});
	game.time.addEvent({
		delay: speed * 6,
		callback: function() {
			sprite.setFrame(6);
			sprite.stem.setFrame(6);
		}
	});
	game.time.addEvent({
		delay: speed * 7,
		callback: function() {
			sprite.setFrame(7);
			sprite.stem.setFrame(7);
		}
	});
	game.time.addEvent({
		delay: speed * 8,
		callback: function() {
			sprite.setFrame(8);
			sprite.stem.setFrame(8);
		}
	});
	game.time.addEvent({
		delay: speed * 9,
		callback: function() {
			sprite.setFrame(9);
			sprite.stem.setFrame(9);
		}
	});
	game.time.addEvent({
		delay: speed * 10,
		callback: function() {
			sprite.setFrame(10);
			sprite.stem.setFrame(10);
		}
	});
	game.time.addEvent({
		delay: speed * 11,
		callback: function() {
			sprite.setFrame(11);
			sprite.stem.setFrame(11);
		}
	});
	game.time.addEvent({
		delay: speed * 12,
		callback: function() {
			sprite.setFrame(12);
			sprite.stem.setFrame(12);
		}
	});
	game.time.addEvent({
		delay: speed * 13,
		callback: function() {
			sprite.setFrame(13);
			sprite.stem.setFrame(13);
		}
	});
	game.time.addEvent({
		delay: speed * 14,
		callback: function() {
			sprite.setFrame(14);
			sprite.stem.setFrame(14);
		}
	});
	game.time.addEvent({
		delay: speed * 15,
		callback: function() {
			sprite.setFrame(15);
			sprite.stem.setFrame(15);
		}
	});
	game.time.addEvent({
		delay: speed * 16,
		callback: function() {
			sprite.setFrame(0);
			sprite.stem.setFrame(0);
		}
	});
}
