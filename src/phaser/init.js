import { store } from "../index.js";

import { addFlower } from "../utils/addFlower";
import { add3dFlower } from "../utils/add3dFlower";
export function init(game) {
	/*Create array of flowers on screen to fly to*/
	if(!this.spritestack) {
		game.flowersOnScreen = [];
		/* First Flower */
		addFlower(store.getState().flowers.byId.flower1, "flower1", game);

		/* Bee */
		game.bee = game.physics.add.sprite(200, 150, "bee");
		game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
		game.bee.id = "bee1";
		game.bee.depth = 999;
		// turn off debug info
		game.bee.debugShowBody = false;
		//game.bee.debugShowVelocity = false;

		/* Second Flower */
		addFlower(store.getState().flowers.byId.flower2, "flower2", game);

		// set the flower to go to
		game.flowerToFlyTo = game.flowersOnScreen[0];
	} else {
		game.flowersOnScreen = [];
		/* First Flower */
		add3dFlower(store.getState().flowers.byId.flower1, "flower1", game);

		/* Bee */
		game.bee = game.physics.add.sprite(200, 150, "bee");
		game.bee.setOrigin(0.5, 0.5).setDrag(50, 50);
		game.bee.id = "bee1";
		game.bee.depth = 999;
		// turn off debug info
		game.bee.debugShowBody = false;
		//game.bee.debugShowVelocity = false;

		/* Second Flower */
		add3dFlower(store.getState().flowers.byId.flower2, "flower2", game);

		// set the flower to go to
		game.flowerToFlyTo = game.flowersOnScreen[0];
	}
	
}
