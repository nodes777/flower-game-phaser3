import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { preload } from "./phaser/preload";
import { create } from "./phaser/create";
import { update } from "./phaser/update";
import playGame from "./phaser/scene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  backgroundColor: "#488214",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: playGame
};

const game = new Phaser.Game(config);

ReactDOM.render(<App />, document.getElementById("root"));
