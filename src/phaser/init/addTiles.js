import { store } from "../../index.js";
import { addTilesToStore } from "../../actions/tileActions.js";
import grassTileData from "../../assets/grassTile.json";

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
			tile.depth = 0;

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
		}
	}
	store.dispatch(addTilesToStore(tilesArr));
};
