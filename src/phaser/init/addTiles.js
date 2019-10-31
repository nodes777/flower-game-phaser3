import { store } from "../../index.js";
import { addTilesToStore } from "../../actions/tileActions.js";
import grassTileData from "../../assets/grassTile.json";

import { mouseHoverOn } from "./mouseHover";

// Depending on the grass tile, you might need different margins
const flatTight = 2;
const tallTight = 38;
const tallFar = 20;
const zTallMargin = -10;

export const tileHeight = grassTileData.height - tallTight;
export const addTiles = (game, size) => {
	const raiseByHeight = 10;
	let tile;
	let tilesArr = [];

	let index = 0;
	for (let xx = 0; xx < size; xx += tileHeight) {
		for (let yy = 0; yy < size; yy += tileHeight) {
			tile = game.add.isoSprite(
				xx,
				yy,
				zTallMargin,
				"grassTile",
				game.isoTiles
			);
			tile.setInteractive();

			// text position reference
			let isoX = xx - yy;
			let isoY = (xx + yy) / 2;
			//game.add.text(isoX + 500, isoY, ` |${xx} ${yy}| `);
			//game.add.text(isoX + 500, isoY, ` |${index}| `);

			tile.on("pointerover", function() {
				this.setTint(0x86bfda);
				this.isoZ += raiseByHeight;

				if (this.flowerSprite) {
					this.flowerSprite.isoZ += raiseByHeight;
					this.flowerSprite.stem.isoZ += raiseByHeight;
					mouseHoverOn(this.flowerSprite.id);
				}
			});

			tile.on("pointerout", function() {
				this.clearTint();
				this.isoZ -= raiseByHeight;
				if (this.flowerSprite) {
					this.flowerSprite.isoZ -= raiseByHeight;
					this.flowerSprite.stem.isoZ -= raiseByHeight;
				}
			});

			// send tile to the store
			let tileData = {
				x: tile._isoPosition.x,
				y: tile._isoPosition.y,
				filled: false,
				// this is used for finding available tiles
				tileIndex: index
			};
			tilesArr.push(tileData);
			index++;

			// game.floatingTilesTween = game.tweens.add({
			// 	targets: tile,
			// 	isoZ: 10,
			// 	ease: "Sine.easeInOut",
			// 	duration: 3000,
			// 	delay: index * 50,
			// 	repeat: -1,
			// 	yoyo: true
			// });
		}
	}
	// game.floatingTilesTween = game.tweens.add({
	// 	targets: [game.isoTiles.children.entries],
	// 	isoZ: 10,
	// 	ease: "Sine.easeInOut",
	// 	duration: 3000,
	// 	delay: 50,
	// 	repeat: -1,
	// 	yoyo: true
	// });

	store.dispatch(addTilesToStore(tilesArr));
};
