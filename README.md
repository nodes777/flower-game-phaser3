# Flower Game (WIP)

A [Phaser 3](https://phaser.io/) and [React](https://reactjs.org/) with [Redux](https://redux.js.org/) project based on the [Phaser 3 Webpack Project Template](https://github.com/photonstorm/phaser3-project-template). ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/). The game explores manipulating different genes (colors, shapes) for flowers and seeing what grows.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `npm install`   | Install project dependencies                                                    |
| `npm start`     | Build project and open web server running project                               |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm run test`  | Runs the Jest tests (Currently WIP)                                             |

## About

This is a lazy garden game. You can generate new flowers randomly, or via the Punnett Square. State is handled by Redux, which allows an extendable genetics system.

### Naming Conventions

-   Loading images:

    -   `import straightStem from "../assets/straight-stem.png";`
    -   `this.load.image("straightStem", straightStem);`

    ```

    this.load.spritesheet(
        "threeDFlower",
        "src/assets/spritestack/blank-flower-head.png",
        {
            frameWidth: 10, // from json
            frameHeight: 20, // from properties
            startFrame: 4, // 4 is the forward facing sprite
            endFrame: 9 // 9 is the last angle with semi forward
        }
    );
    ```

## To Do

-   Add tests via jest - [SO Question](https://stackoverflow.com/questions/55874105/jest-unexpected-identifier-require)

## Writing

-   [Creating an Accessible Custom Select Component… In React](https://medium.com/@Tnodes/integrating-react-and-phaser-3-tutorial-eb96717d4a9d?source=friends_link&sk=0f1d5f2e456584b0cc6fc5c785394b56)
-   [Integrating Phaser 3 and React](https://medium.com/@Tnodes/integrating-react-and-phaser-3-tutorial-eb96717d4a9d)

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder
and webpack will automatically recompile and reload your server (available at `http://localhost:8080`
by default).

## Customizing the Phaser 3 Template

### Babel

You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you
want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently
targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

```
"browsers": [
  ">0.25%",
  "not ie 11",
  "not op_mini all"
]
```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can
modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create
new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at
`dist/bundle.min.js` along with any other assets you project depended.

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`),
you should be able to open `http://mycoolserver.com/index.html` and play your game.
