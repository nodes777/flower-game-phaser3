import { store } from "../../index.js";
import { addTilesToStore } from "../../actions/tileActions.js";
import grassTileData from "../../assets/spritestack/grassTile.json";

export const addTiles = (game, size) => {
	let tile;
	let tilesArr = [];
	const height = grassTileData.height - 2;
	let index = 0;
	for (let xx = 0; xx < size; xx += height) {
		for (let yy = 0; yy < size; yy += height) {
			tile = game.add.isoSprite(xx, yy, 0, "grassTile", game.isoTiles);
			tile.setInteractive();

			// text position reference
			let isoX = xx - yy;
			let isoY = (xx + yy) / 2;
			//game.add.text(isoX + 500, isoY, ` |${xx} ${yy}| `);
			//game.add.text(isoX + 500, isoY, ` |${index}| `);

			tile.on("pointerover", function() {
				this.setTint(0x86bfda);
				this.isoZ += 5;
				// console.log(this);
				if (this.flowerSprite) {
					this.flowerSprite.isoZ += 5;
					this.flowerSprite.stem.isoZ += 5;
				}
			});

			tile.on("pointerout", function() {
				this.clearTint();
				this.isoZ -= 5;
				if (this.flowerSprite) {
					this.flowerSprite.isoZ -= 5;
					this.flowerSprite.stem.isoZ -= 5;
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
