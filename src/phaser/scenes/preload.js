import { shapes } from "../../types/flowerShapes";

// Need this for npm build to add to /dist
import grassTileImg from "../../assets/grassTile.png";
import defaultFlowerImg from "../../assets/defaultFlower.png";
import stemImg from "../../assets/stem.png";
import beeImg from "../../assets/bee.png";
import squareFlowerImg from "../../assets/squareFlower.png";
import roundFlowerImg from "../../assets/roundFlower.png";
import triangleFlowerImg from "../../assets/triangleFlower.png";

import grassTileData from "../../assets/grassTile.json";
import defaultFlowerData from "../../assets/defaultFlower.json";
import stemData from "../../assets/stem.json";
import beeData from "../../assets/bee.json";
import squareFlowerData from "../../assets/squareFlower.json";
import roundFlowerData from "../../assets/roundFlower.json";
import triangleFlowerData from "../../assets/triangleFlower.json";

import { add3dFlower } from "../add3dFlower";
import { buildGarden } from "../init/buildGarden";

import IsoPlugin, { IsoPhysics } from "phaser3-plugin-isometric";
export function preload() {
	this.load.scenePlugin({
		key: "IsoPlugin",
		url: IsoPlugin,
		sceneKey: "iso"
	});

	this.load.scenePlugin({
		key: "IsoPhysics",
		url: IsoPhysics,
		sceneKey: "isoPhysics"
	});

	// load 3d assets
	this.load.spritesheet("grassTile", grassTileImg, {
		frameWidth: grassTileData.width, // from json
		frameHeight: grassTileData.height, // from json
		startFrame: 0 // only using this frame, this could be a this.load.image
	});

	// Flowers
	this.load.spritesheet("defaultFlower", defaultFlowerImg, {
		frameWidth: defaultFlowerData.width, // from json
		frameHeight: defaultFlowerData.height,
		startFrame: 4 // 4 is the forward facing sprite
	});
	this.load.spritesheet("squareFlower", squareFlowerImg, {
		frameWidth: squareFlowerData.width,
		frameHeight: squareFlowerData.height,
		startFrame: 4 //4 is facing east, 4 is facing north
	});
	this.load.spritesheet("roundFlower", roundFlowerImg, {
		frameWidth: roundFlowerData.width,
		frameHeight: roundFlowerData.height,
		startFrame: 4 //4 is facing east, 4 is facing north
	});

	this.load.spritesheet("triangleFlower", triangleFlowerImg, {
		frameWidth: triangleFlowerData.width,
		frameHeight: triangleFlowerData.height,
		startFrame: 4 //4 is facing east, 4 is facing north
	});

	// Stems
	this.load.spritesheet("straightStem3d", stemImg, {
		frameWidth: stemData.width, // from json
		frameHeight: stemData.height
	});
	// Bee
	this.load.spritesheet("bee3d", beeImg, {
		frameWidth: beeData.width,
		frameHeight: beeData.height,
		startFrame: 0
	});

	// display progress bar
	const progressBar = this.add.graphics();
	const progressBox = this.add.graphics();
	progressBox.fillStyle(0x222222, 0.8);
	progressBox.fillRect(240, 270, 320, 50);

	const width = this.cameras.main.width;
	const height = this.cameras.main.height;
	const loadingText = this.make.text({
		x: width / 2,
		y: height / 2 - 50,
		text: "Loading...",
		style: {
			font: "20px monospace",
			fill: "#ffffff"
		}
	});
	loadingText.setOrigin(0.5, 0.5);

	const percentText = this.make.text({
		x: width / 2,
		y: height / 2 - 5,
		text: "0%",
		style: {
			font: "18px monospace",
			fill: "#ffffff"
		}
	});
	percentText.setOrigin(0.5, 0.5);

	const assetText = this.make.text({
		x: width / 2,
		y: height / 2 + 50,
		text: "",
		style: {
			font: "18px monospace",
			fill: "#ffffff"
		}
	});
	assetText.setOrigin(0.5, 0.5);

	// update progress bar
	this.load.on("progress", function(value) {
		percentText.setText(parseInt(value * 100) + "%");
		progressBar.clear();
		progressBar.fillStyle(0xffffff, 1);
		progressBar.fillRect(250, 280, 300 * value, 30);
	});

	// update file progress text
	this.load.on("fileprogress", function(file) {
		assetText.setText("Loading asset: " + file.key);
	});

	// remove progress bar when complete
	this.load.on("complete", function() {
		progressBar.destroy();
		progressBox.destroy();
		loadingText.destroy();
		percentText.destroy();
		assetText.destroy();
	});
}
