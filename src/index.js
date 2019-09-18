import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { preload } from "./phaser/scenes/preload";
import { create } from "./phaser/scenes/create";
import { update } from "./phaser/scenes/update";
import playGame from "./phaser/scenes/scene";
import "./css/index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { screenSize } from "./utils/screenSize";
import { loadState } from "./utils/localStorage";
import rootReducer from "./reducers/indexReducer";
import indexMiddleware from "./middleware/indexMiddleware";
//import exampleState from "./exampleState";

export const store = createStore(rootReducer, loadState(), indexMiddleware);

const config = {
  type: Phaser.AUTO,
  parent: "phaser", // id to attach to
  width: screenSize.width,
  height: screenSize.height,
  backgroundColor: "#000000", //"#488214"
  pixelArt: true, // art still looks funky
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") || document.createElement("div")
);
