import { shapes } from "../types/flowerShapes";

import grassTileData from "../assets/spritestack/grassTile.json";
import flowerHeadData from "../assets/spritestack/flowerHead.json";
import stemData from "../assets/spritestack/stem.json";
import beeData from "../assets/spritestack/bee.json";

import { add3dFlower } from "./isometric/add3dFlower";
import { buildGarden } from "./isometric/buildGarden";

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
	this.load.spritesheet("grassTile", "src/assets/spritestack/grassTile.png", {
		frameWidth: grassTileData.width, // from json
		frameHeight: grassTileData.height, // from json
		startFrame: 0 // only using this frame, this could be a this.load.image
	});

	this.load.spritesheet("flower3d", "src/assets/spritestack/flowerHead.png", {
		frameWidth: flowerHeadData.width, // from json
		frameHeight: flowerHeadData.height // from properties
		//startFrame: 0 // 4 is the forward facing sprite
		//endFrame: 9 // 9 is the last angle with semi forward
	});
	this.load.spritesheet("straightStem3d", "src/assets/spritestack/stem.png", {
		frameWidth: stemData.width, // from json
		frameHeight: stemData.height
	});
	this.load.spritesheet("bee3d", "src/assets/spritestack/bee.png", {
		frameWidth: beeData.width, // length divided by 16 frames
		frameHeight: beeData.height,
		startFrame: 0 // 9 is facing right
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
