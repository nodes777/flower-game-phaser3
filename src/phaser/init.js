import { store } from "../index.js";

import { add3dFlower } from "./isometric/add3dFlower";
import { buildGarden } from "./isometric/buildGarden";
//import { add3dControls } from "./isometric/add3dControls";
//import { addBeeFrameRotation } from "./isometric/addBeeFrameRotation";
export function init(game) {
	// create tile group
	game.isoTiles = game.add.group();
	// set default camera placement
	game.iso.projector.origin.setTo(0.5, 0.3);

	// add Tiles
	buildGarden(game);

	game.flowersOnScreen = [];
	/* First Flower */
	const storeFlowers = store.getState().flowers;
	add3dFlower(storeFlowers.byId.flower1, "flower1", game);

	/* Bee */
	game.bee = game.physics.add.sprite(200, 150, "bee3d", 4); // frame 4 faces north
	game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
	game.bee.id = "bee1";
	game.bee.depth = 999;
	game.bee.angleForFrame = 0;
	// set rotation frame swaps
	//addBeeRotation(game.bee, game);

	// turn off debug info
	//game.bee.debugShowBody = false;
	//game.bee.debugShowVelocity = false;

	/* Second Flower */
	add3dFlower(storeFlowers.byId.flower2, "flower2", game);

	// set the flower to go to
	game.flowerToFlyTo = game.flowersOnScreen[0];

	// 3d controls
	//add3dControls(game);
}
