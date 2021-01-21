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

	/* Create the flowers*/
	const storeFlowers = store.getState().flowers;

	for (let i = 0; i < storeFlowers.allIds.length; i++) {
		add3dFlower(
			storeFlowers.byId[storeFlowers.allIds[i]],
			storeFlowers.allIds[i],
			game
		);
	}

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

	// turn off debug info
	//game.bee.debugShowBody = false;
	//game.bee.debugShowVelocity = false;

	// set the flower to go to
	game.flowerToFlyTo = game.flowersOnScreen[0];
}
