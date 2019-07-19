import { store } from "../index.js";

import { addFlower } from "../utils/addFlower";
import { add3dFlower } from "../utils/add3dFlower";

import { add3dControls } from "./utils/add3dControls";
import { addBeeFrameRotation } from "./utils/addBeeFrameRotation";
export function init(game) {
	// 2d spites
	if (!game.spritestack) {
		/* Create array of flowers on screen to fly to*/
		game.flowersOnScreen = [];
		/* Get flowers from store */
		const storeFlowers = store.getState().flowers;
		/* First Flower */
		addFlower(storeFlowers.byId.flower1, "flower1", game);

		/* Bee */
		game.bee = game.physics.add.sprite(200, 150, "bee");
		game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
		game.bee.id = "bee1";
		game.bee.depth = 999;
		// turn off debug info
		game.bee.debugShowBody = false;
		//game.bee.debugShowVelocity = false;

		/* Second Flower */
		addFlower(storeFlowers.byId.flower2, "flower2", game);

		// set the flower to go to
		game.flowerToFlyTo = game.flowersOnScreen[0];
	} else {
		// 3d spitestack
		game.flowersOnScreen = [];
		/* First Flower */
		add3dFlower(store.getState().flowers.byId.flower1, "flower1", game);

		/* Bee */
		game.bee = game.physics.add.sprite(200, 150, "bee3d", 4); // frame 4 faces north
		game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
		game.bee.id = "bee1";
		game.bee.depth = 999;
		game.bee.angleForFrame = 0;
		// set rotation frame swaps
		addBeeRotation(game.bee, game);

		// turn off debug info
		//game.bee.debugShowBody = false;
		//game.bee.debugShowVelocity = false;

		/* Second Flower */
		add3dFlower(store.getState().flowers.byId.flower2, "flower2", game);

		// set the flower to go to
		game.flowerToFlyTo = game.flowersOnScreen[0];

		// 3d controls
		add3dControls(game);
	}
}
