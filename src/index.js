import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { preload } from "./phaser/preload";
import { create } from "./phaser/create";
import { update } from "./phaser/update";
import playGame from "./phaser/scene";
import "./css/index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { screenSize } from "./utils/screenSize";
import { loadState } from "./utils/localStorage";
import rootReducer from "./reducers/indexReducer";
import indexMiddleware from "./middleware/indexMiddleware";
import exampleState from "./exampleState";

export const store = createStore(rootReducer, loadState(), indexMiddleware);
console.log(store.getState());

const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: screenSize.width,
  height: screenSize.height,
  backgroundColor: "#488214",
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
