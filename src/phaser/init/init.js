import { store } from "../../index.js";

import { add3dFlower } from "../add3dFlower";
import { buildGarden } from "./buildGarden";
//import { add3dControls } from "./isometric/add3dControls";
//import { addBeeFrameRotation } from "./isometric/addBeeFrameRotation";
export function init(game) {
	game.flowersOnScreen = [];
	// create tile group
	game.isoTiles = game.add.group();
	// set default camera placement
	game.iso.projector.origin.setTo(0.5, 0.3);

	// add Tiles
	buildGarden(game);

	/* First Flower */
	const storeFlowers = store.getState().flowers;
	add3dFlower(storeFlowers.byId.flower1, "flower1", game);

	/* Bee */
	game.bee = game.add.isoSprite(
		0,
		150, // y
		30, // z
		"bee3d" //flowerShape
	);
	game.bee.setFrame(4);
	game.isoPhysics.world.enable(game.bee);
	game.bee.setOrigin(0.5, 0.5); //.setDrag(50, 50);
	game.bee.id = "bee1";
	game.bee.depth = 999;
	game.bee.angleForFrameDeg = 0;

	// set rotation frame swaps
	//addBeeRotation(game.bee, game);

	// turn off debug info
	//game.bee.debugShowBody = false;
	//game.bee.debugShowVelocity = false;

	/* Second Flower */
	add3dFlower(storeFlowers.byId.flower2, "flower2", game);

	if (storeFlowers.allIds.length > 2) {
		for (let i = 2; i < storeFlowers.allIds.length; i++) {
			add3dFlower(
				storeFlowers.byId[storeFlowers.allIds[i]],
				storeFlowers.allIds[i],
				game
			);
		}
	}

	// set the flower to go to
	game.flowerToFlyTo = game.flowersOnScreen[0];
	//game.isoPhysics.world.enable(game.flowerToFlyTo);

	// 3d controls
	//add3dControls(game);
}
