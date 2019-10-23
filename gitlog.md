# Adds in the allStack - 10/10/2019 - master

## [ebbd09e75de44345de31d0a6cadf838a4a216e09](https://github.com/nodes777/flower-game-phaser3/commit/ebbd09e75de44345de31d0a6cadf838a4a216e09)

-   Adds the allStack.zip to assets, for SpriteStack Editting

-   To Do:
    -   Refactor add3dFlower, Do I need to pass in id?
    -   Refactor checkstore for this functionality
    -   Delete allPositions info in store - it's used in flowersReducer
    -   At this point is it really necesary to have the punnett store at all?
        -   Just use the first two flowers in the flower store?
    -   Do something with flower naming - show name on hover?
    -   Size determination for garden size
    -   Change bee movement to be accelleration based
    -   Fix bee moving backwards bug
    -   Fix bee flying off into space bug

---

# Deletes old punnett flower and replaces with new - 10/10/2019 - master

## [d658ecfbde957889eff9fa9bae2086536052bc7c](https://github.com/nodes777/flower-game-phaser3/commit/d658ecfbde957889eff9fa9bae2086536052bc7c)

-   Deletes flower sprites and replaces them on change in Punnett
-   Had to create a customDestroy to destroy isoSprites

-   To Do:
    -   Refactor add3dFlower, Do I need to pass in id?
    -   Refactor checkstore for this functionality
    -   Delete allPositions info in store
    -   At this point is it really necesary to have the punnett store at all?
        -   Just use the first two flowers in the flower store?
    -   Do something with flower naming - show name on hover?
    -   Add in allStack.zip

---

# Punnett updates also update the flowers store- 10/9/2019 - master

## [6c9f0d7e397feb3e8aeab9ce6a9bf5bcab7411f2](https://github.com/nodes777/flower-game-phaser3/commit/6c9f0d7e397feb3e8aeab9ce6a9bf5bcab7411f2)

-   Updates the flowersReducer to accept the `CHANGE_PUNNETT_FLOWER`action, and update the first or second flower
-   This is to set up for allowing phaser to delete and recreate the first two flowers with the new phenotype

-   TO DO:
    -   Delete allPositions info in store
    -   At this point is it really necesary to have the punnett store at all?
        -   Just use the first two flowers in the flower store?

---

# Adds scrolling space background, growing flowers tween - 10/9/2019 - master

## [eb685fd8bfd55af9d5f927c1a53e1f113f975174](https://github.com/nodes777/flower-game-phaser3/commit/eb685fd8bfd55af9d5f927c1a53e1f113f975174)

-   Adds a tileSprite background that scrolls topdown
-   Had an issue where the first tile would always render behind the background
    -   That tile's depth was set to -12.5 and couldn't be changed (tile_depth=0 or setDepth didnt change depth)
    -   Fix was to set background depth to -13
-   Adds a scaling tween to flower growth. Looks good!

-   TO DO:
    -   Scroll X but need a better tiled image or to flip the image by 90 degrees?
    -   Hovering tiles?
    -   Punnett to change game display too

---

# Refactors flower spin animations, creates thicker grass tiles - 10/5/2019 - master

## [533fc5b76e6a548339df13e3ad4f1c76881e8de6](https://github.com/nodes777/flower-game-phaser3/commit/533fc5b76e6a548339df13e3ad4f1c76881e8de6)

-   Deletes createAnims.js for animateFlowerGrowth.js
-   Moves all image assets (expept bee) up by 10 in Sprite Stack

    -   Create thicker grass tiles
    -   Stems were made longer to avoid a shadow bug where grass would appear on top of flower shadows
        -   This could be tweaked, stem could be a bit shorter

-   ToDo:

    -   Space background?

-   BUG:
    -   Flower sprite is always on top even when stem is facing backwards
        -   Changing the depth creates a flashing sprite, doesn't look good

---

# Hack for flower rotation animation - 10/4/2019 - master

## [30c609bfd63eb2ffa650b106e2b573582db73d24](https://github.com/nodes777/flower-game-phaser3/commit/30c609bfd63eb2ffa650b106e2b573582db73d24)

-   Hacky flower spin animation implementation. Could not get anything to work with the animation manager

    -   Always showed the first frame of the flower
        `// // Animation // loading the animation sets the frame to 0 and never plays the animation // whyyyyyyy // console.log(`\${flowerShape}Spin`); // newFlowerSprite.anims.load(`\${flowerShape}Spin`); // console.log("newFlowerSprite animation properties:"); // console.log(newFlowerSprite.anims); // newFlowerSprite.anims.play(`\${flowerShape}Spin`); // console.log(newFlowerSprite.anims);`

-   ToDo:

    -   Delete or replace createAnims.js
    -   Refactor animation in add3dFlower
    -   Remove the growing throw grass tiles functionality

-   BUG:
    -   Flower sprite is always on top even when stem is facing backwards
        -   Could just set depth to be lower on back facing sprites

---

# Adds back in save/load from localStorage - 9/25/2019 - master

## [69a59f0f14d43037bbb4bd593fe62a9b44b5123a](https://github.com/nodes777/flower-game-phaser3/commit/69a59f0f14d43037bbb4bd593fe62a9b44b5123a)

-   Adds back in saving/loading from storage
    -   Simple update check in init.js
-   Fixes minor bug where diamond shape would be passed in when getting a new flower from punnett

---

# Adds spritesheets as images so they can be bundled - 9/25/2019 - master

## [0524546ba684c5be4bf69a30a07a9e2de11090f3](https://github.com/nodes777/flower-game-phaser3/commit/0524546ba684c5be4bf69a30a07a9e2de11090f3)

-   Spritesheets are now imported as images so they can be bundled and included in `npm run build`
-   Creates an anims folder in /phaser/utils to seperate animations out
-   Resolves bug where the only flower shapes shown would be the first one
    -   This was due to the animations set up
-   [BUG: still can't get animations to work](https://phaser.discourse.group/t/isometric-animations-not-playing/3803)

Possible workarounds:

-   Raise the z up to position
-   Opacity fade in

---

# Adds triangle flower - 9/22/2019 - master

## [99a48bd9677debe62f947aa018cb9aa802bee25d](https://github.com/nodes777/flower-game-phaser3/commit/99a48bd9677debe62f947aa018cb9aa802bee25d)

-   Add triangle flower asset
-   Minor bug fix for Prop.type expectations for alleleNames in listbox
-   Moves assets/spritestack into assets
-   Major bug fix in tile reducer
    -   `availableTiles` weren't being set correctly and growing exponentially

---

# Adds round flower - 9/18/2019 - master

## [710fadfe2f71f8933009b2f62b17507cc0b8dd0c](https://github.com/nodes777/flower-game-phaser3/commit/710fadfe2f71f8933009b2f62b17507cc0b8dd0c)

-   Adds round flower shape
-   Removes unused assets in /spritestack
-   TODO: move /assets/spritestack up to /assets
    -   No need for /spritestack, its all spritestack now

---

# Removes markTileAsFilled action and action creator - 9/18/2019 - master

## [84025721aacf89f75b3e4922e2784befe2104c09](https://github.com/nodes777/flower-game-phaser3/commit/84025721aacf89f75b3e4922e2784befe2104c09)

-   Removes the `markTileAsFilled` and `TILE_FILLED` action and action creator

    -   Now all changes of availableTiles and allTiles is handled when `ADD_FLOWER_TO_STORE` and `SET_FIRST_FLOWER_POSITION` are passed to the `tilesReducer`
    -   When are flower is added is the only condition in which a tile must be filled, so no need for a seperate action and action creator for that

-   Also factors out `polinate` into its own file from `checkForPollen`

---

# Adds beeFrameOffset, random tiles for new flowers - 9/18/2019 - master

## [0cf65632853b3b53abffd105242471363e88cd08](https://github.com/nodes777/flower-game-phaser3/commit/0cf65632853b3b53abffd105242471363e88cd08)

-   Adds angleOffsetForFrame for bee frame rotation
    -   Makes it slightly better at angling the bee
-   Changes new flowers appearing to be a random available tile

TODO:

-   Mark tiles as filled when a flower is added to the store.

---

# Sorts Phaser Folder - 9/18/2019 - master

## [5444e4d5220abbdcfdc887523af27dcd118c9b6f](https://github.com/nodes777/flower-game-phaser3/commit/5444e4d5220abbdcfdc887523af27dcd118c9b6f)

-   Sorts the phaser folder into /gameloop /init and /scenes
    -   add3dFlower.js is in /phaser

TODO:

-   Rarely bee flies in reverse - this could be because of the 337.5 to 0 range is undefined.
    -   Change if/else values to be tilted slightly to match a general direction and not a less than amount.
-   Mark tiles as filled when a flower is added to the store.
-   Figure out a better way for new flower positions to be determined. Even randomly might be better.

---

# Gets bee rotation almost right - 9/12/2019 - master

## [5bae0cac049004694a62454b7c45e97fe0d7bdd2](https://github.com/nodes777/flower-game-phaser3/commit/5bae0cac049004694a62454b7c45e97fe0d7bdd2)

-   Changes rotation.js to figure out which Bee frame should be shown

TODO:

-   Rarely bee flies in reverse - this could be because of the 337.5 to 0 range is undefined.
    -   Change if/else values to be tilted slightly to match a general direction and not a less than amount.
-   Clean up the /phaser folder structure
-   Mark tiles as filled when a flower is added to the store.
-   Figure out a better way for new flower positions to be determined. Even randomly might be better.

---

# Factors out overlap callback - 9/8/2019 - isoView

## [06681275db89d08ec8e81bbf803582bfe022c6db](https://github.com/nodes777/flower-game-phaser3/commit/06681275db89d08ec8e81bbf803582bfe022c6db)

-   Factors out overlap callback
-   Renames beeOnFlowerCollision.js to checkForPollen.js
-   Renames `this.collided` in create.js to `this.bee1Collided`

TODO:

-   Clean up the /phaser folder structure
-   Mark tiles as filled when a flower is added to the store.
-   Figure out a better way for new flower positions to be determined. Even randomly might be better.

---

# Bee on Flower collision detection works - 9/4/2019 - isoView

## [4d589768eed44dedf4a9c56c7473eef6c42314f9](https://github.com/nodes777/flower-game-phaser3/commit/4d589768eed44dedf4a9c56c7473eef6c42314f9)

-   Marks the center and last tile as filled in buildGarden.js
-   Removes addFlowerToGame.js and createCollider.js as they're no longer being used
-   Collision between bee and flower is handled via `this.isoPhysics.world.overlap()` in update.js
    -   The collider object no longer exists, all checks are done in update.js so make sure this is optimized

TODO:

-   Factor out the overlap callback in update.js
-   Rename the beeOnFlowerCollision file or the checkStore function
-   Rename this.collided in init.js to be more specific
-   Clean up the /phaser folder structure
-   Mark tiles as filled when a flower is added to the store.
-   Figure out a better way for new flower positions to be determined. Even randomly might be better.

---

# collision detection for bee and flower doesnt work - 9/2/2019 - isoView

## [fcf90e306e9c600bf628a69f09effdecd5bbd9ba](https://github.com/nodes777/flower-game-phaser3/commit/fcf90e306e9c600bf628a69f09effdecd5bbd9ba)

-   Can't get the isoSprites to fire an overlap collision....

---

# adds addBatchOfFlowersToStore - 9/1/2019 - isoView

## [e63165921cb4b8789db2bc6193470724e10b20fa](https://github.com/nodes777/flower-game-phaser3/commit/e63165921cb4b8789db2bc6193470724e10b20fa)

-   New action ADD_BATCH_OF_FLOWERS_TO_STORE which batches call to addFlowersToStore
-   `addBatchOfFlowersToStore(flowersToBeAdded, newIds)`, takes an object byId of flowers and an array of the newIds
-   Huge performance gains!
-   Next TODO: batch the markTilesAsFilled

---

# Provides fill tiles - 8/31/2019 - isoView

## [a6984c35eadc32742c97ec5f496e506a66055acb](https://github.com/nodes777/flower-game-phaser3/commit/a6984c35eadc32742c97ec5f496e506a66055acb)

-   Creates a determineShapeOfGarden function, which filters based on a type passed in.
    -   the availableTiles are set based on this
-   fillAvailableTiles, fills the tiles, but big performance dip on larger gardens.

---

# Determines center tile - 8/30/2019 - isoView

## [0bf219873504e82074ef79da39ac762a36ded01d](https://github.com/nodes777/flower-game-phaser3/commit/0bf219873504e82074ef79da39ac762a36ded01d)

-   Determines center tile in determinePosition.js from buildGarden.js

---

# Separates the actions into their own files - 8/29/2019 - isoView

## [e6457044f8c7c89dd46f725c3eb1e818449b22ec](https://github.com/nodes777/flower-game-phaser3/commit/e6457044f8c7c89dd46f725c3eb1e818449b22ec)

-   Seperates the indexActions file into flowerActions, tileActions, beeActions, configActions, and punnettActions files
-   Recreates the references to that file in the components/ other files that the actions and actionCreators.

---

# Sets initial position for flowers - 8/29/2019 - isoView

## [50221dea1d923e8002246cd145c99b0c1912138e](https://github.com/nodes777/flower-game-phaser3/commit/50221dea1d923e8002246cd145c99b0c1912138e)

-   Creates a `setFirstFlowerPosition` action creator
    -   The tiles are build and the store is created with the intial two flowers, with no defined tileIndex or position
    -   Then the action is dispatched to change these two flowers position
    -   Currently the initial position is random

---

# Adds position determination to isometric view - 8/27/2019 - isoView

## [bf9b7ee5a891c3b7f5901e77630db14f4496b128](https://github.com/nodes777/flower-game-phaser3/commit/bf9b7ee5a891c3b7f5901e77630db14f4496b128)

-   Isometric view in place with `phaser3-plugin-isometric`
-   [Creating an Isometric View in Phaser 3](https://medium.com/@Tnodes/creating-an-isometric-view-in-phaser-3-fada95927835)
-   Tiles are now part of the store
    -   array of allTiles and available tiles
    -   actions, action creators, and reducer in place
-

---

# Performance updates to show flower name - 8/21/2019 - master

## [1c36451494010ac22c6a7ef76708db5b93fa43a2](https://github.com/nodes777/flower-game-phaser3/commit/1c36451494010ac22c6a7ef76708db5b93fa43a2)

-   Improvement on performance when displaying flower names. Still not great.
-   Sending for SO question on performance

---

# Adds flower name display on hover - 8/14/2019 - master

## [cbb5e0b0f982b7379abfd3d015d48041c31cb1c8](https://github.com/nodes777/flower-game-phaser3/commit/cbb5e0b0f982b7379abfd3d015d48041c31cb1c8)

-   Displays flower name on hover via new config property, but major performance issues. Need to debounce the hover in/out actions

---

# Renamed addFlower s to be more specific - 8/9/2019 - master

## [38c542be0747a94f9b59ab6f581a14ee746a9a44](https://github.com/nodes777/flower-game-phaser3/commit/38c542be0747a94f9b59ab6f581a14ee746a9a44)

-   Minor updates to README
-   Adds roles of regions and labels for a11y
-   Renames `ADD_FLOWER` action and `addFlower` action creator to `ADD_FLOWER_TO_STORE` and `addFlowerToStore`
    -   Remember the recessivizer middleware. That changed too
-   Renamed `addFlower` in phaser to `addFlowerToGame` to eliminate confusion ^^

---

# Allows changing of flower names - 8/9/2019 - master

## [51b6e54bacd67354b1a4a9b0fb2b4d4b0c70a06b](https://github.com/nodes777/flower-game-phaser3/commit/51b6e54bacd67354b1a4a9b0fb2b4d4b0c70a06b)

-   FlowerId's are seperate from flower names
    -   exampleState now includes name property
-   `<FlowerTable>` displays flower names via new `<FlowerName>` component
    -   Names can be changed within the `<FlowerName>`

---

# Updates LICENSE and adds badges- 7/26/2019 - master

## [4735985774f0608cb93fe067394df44fe967453a](https://github.com/nodes777/flower-game-phaser3/commit/4735985774f0608cb93fe067394df44fe967453a)

-   Adds GNU General Public License v3.0
-   Adds code coverage badges
-   Adds license badge
-   A11y - increases btn-primary button contrast
-   Resolves "recessive is undefined" bug in ADD_FLOWER in flowersReducer

---

# Adds flowersReducer test - 7/26/2019 - master

## [2d4bce51dce41e217f5afe3d457f4c01e036c11d](https://github.com/nodes777/flower-game-phaser3/commit/2d4bce51dce41e217f5afe3d457f4c01e036c11d)

-   Adds flowersReducer.test.js
-   improves determinePhenotype test
-   Buddy is now CI to deploy to [http://flower-garden.com.s3-website-us-east-1.amazonaws.com/](http://flower-garden.com.s3-website-us-east-1.amazonaws.com/) on push to master github
    -   Only deploys what's in the /dist folder

---

# Adds Clear Local Storage Button - 7/25/2019 - master

## [818fe683ea94b12aa7a2c8a67d395390f182786d](https://github.com/nodes777/flower-game-phaser3/commit/818fe683ea94b12aa7a2c8a67d395390f182786d)

-   Adds `<ClearLocalStorageButton>` to `<Dashboard>`
-   Adds tests for beesReducer, configReducer, and punnettReducer

---

# Changes all "Trait" references in Add/Remove reccessiveTrait to reccessiveAlleles - 7/22/2019 - master

## [818fe683ea94b12aa7a2c8a67d395390f182786d](https://github.com/nodes777/flower-game-phaser3/commit/818fe683ea94b12aa7a2c8a67d395390f182786d)

-   Changes all references to the term "trait" and "traitType" to "allele" and "alleleType"
-   Adds indexAction Jest tests
-   Improves configReducer.test.js

---

# Adds Determinants Jest Tests - 7/24/2019 - master

## [fece0321f19697d30d6cd1939f3691733a33c9a7](https://github.com/nodes777/flower-game-phaser3/commit/fece0321f19697d30d6cd1939f3691733a33c9a7)

Adds:

-   /determinants tests
-   Starts configReducer.test.js

---

# Adds Phenotype - 7/19/2019 - addPhenotype

## [24073c192e4e2a235cbd82675483d5fa151dccb6](https://github.com/nodes777/flower-game-phaser3/commit/24073c192e4e2a235cbd82675483d5fa151dccb6)

### Big refactor of flowers reducer and all components that touches

-   Adds phenotype property in store state
    -   This persists and therefore can be used by Phaser to always render the same color/shape/stem etc
-   Adds middleware "recessivizer" which adds recessive traits to ADD_FLOWER action
    -   This was the solution to the problem of having seperated state for flower reducer and config.recessive
-   Flower reducer refactor
    -   determinePhenotype requires determineGenotype
    -   determineGenotype requires all determineColor/Shape/Stem
    -   moves all determineColor/Shape/Stem from Phaser to redux
    -   exampleState.js updated to reflect these changes
-   stems must now be included everywhere the other traits are
    -   added them to types/allTypes

TODO:

-   revist naming conventions for types
-   Refactor the addFlower vs addFlower in Phaser
-   Add confirmation of save to localStorage and method to clear localStorage

---

# Adds SaveToLocalStorageButton - 7/19/2019 - master

## [c52bb473c844d32646a8052bc4d41de0a1c1b23b](https://github.com/nodes777/flower-game-phaser3/commit/c52bb473c844d32646a8052bc4d41de0a1c1b23b)

-   Adds `<SaveToLocalStorageButton>` to `<Dashboard>`
    -   Works but because phenotype is chosen randomly on render, you can't reproduce the same colors/shapes
    -   TODO: create phenotype property in state
-   Creates a components/Dashboard folder to house all components in the Dashboard

---

# Start saving capability - 7/18/2019 - master

## [95ac7b0595a95d324857f245f789f07b20ed6764](https://github.com/nodes777/flower-game-phaser3/commit/95ac7b0595a95d324857f245f789f07b20ed6764)

-   index.js `createStore(rootReducer, initialState, indexMiddleware);` accpets a middle arg for initial state, will be used to fill with data from localStorage
    -   This overwrites the default states in the reducers
-   New utils/localStorage.js has funcs `loadState` and `saveState`
-   phaser/checkStore now has a `getStoreState()` function, used to set initial beeCanFly boolean

---

# Refactor to use determinants folder - 7/18/2019 - master

## [7666e2f2e8a9fb006c17666056cad23609a39bca](https://github.com/nodes777/flower-game-phaser3/commit/7666e2f2e8a9fb006c17666056cad23609a39bca)

-   Moves all determinePosition/color/shape etc into a determinants folder
-   Jest runs slower in `--watchAll`, removed that run `npm run test` and included `--runInBand` to run tests sequentially. [More info on Jest's Slowness](https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd)

---

# Adds More Jest tests - 7/10/2019 - master

## [083ff004d16bb07586fba36733be3cfa66795e86](https://github.com/nodes777/flower-game-phaser3/commit/083ff004d16bb07586fba36733be3cfa66795e86)

-   index.js has an or operator to create a div, this is a work around to get tests to run without Target Invariant error

---

# Minor Jest Updates - 7/8/2019 - master

## [ae93ed6a59379e55611d51cffd6e285d888843f6](https://github.com/nodes777/flower-game-phaser3/commit/ae93ed6a59379e55611d51cffd6e285d888843f6)

-   Fixes screenSize bug that occured in checkForPollen in beeOnFlowerCollision.js
-   Adds a few tests for determinePosition
-   Updates package.json to this repo and `npm run test` now runs `jest --watchAll`

---

# Jest Works! - 7/4/2019 - master

## [fde57906018c0cb27fefe4756e16a535c096d69a](https://github.com/nodes777/flower-game-phaser3/commit/fde57906018c0cb27fefe4756e16a535c096d69a)

-   Removed the circular import `import { store } from "../index.js"` from determinePosition.js
-   Pulled out `screenSize` into it's own file utils/screenSize.js
    -   Used in index.js and exampleState.js
-   Started writing tests for determinePosition.js

---

# First steps in Jest setup - 7/3/2019 - master

## [65a06ce86d174ec177dabdc0713d185f56082b50](https://github.com/nodes777/flower-game-phaser3/commit/65a06ce86d174ec177dabdc0713d185f56082b50)

-   Worked with Phil to
    -   Npm installed [jest-canvas-mock](https://www.npmjs.com/package/jest-canvas-mock) to mock a canvas for jest
    -   Added mock files under test/mocks/fileMock.js and test/mocks/styleMock.js
        -   These return a `string` and empty `object` respectively

---

# Prep to merge to master - 6/23/2019 - geneDominance

## [3df4cf98ae4ad28672d9e8cf5d6d233337db95a0](https://github.com/nodes777/flower-game-phaser3/commit/3df4cf98ae4ad28672d9e8cf5d6d233337db95a0)

-   Minor refactor of `<RemoveRecessiveTrait>`
-   Prep to merge to master

---

# Recessive Genes Shown In Italics - 6/22/2019 - geneDominance

## [0361afa02ffc9e47b1a8879df7e9d2decf83bdc0](https://github.com/nodes777/flower-game-phaser3/commit/0361afa02ffc9e47b1a8879df7e9d2decf83bdc0)

-   Adds keys to option drop downs in `<Add/RemoveRecessiveTrait>`
-   Adds a method to show that a trait is recessive in `<Allele>`
    -   Recessive genes are shown in italics
-   Capitalizes Flower IDs in `<FlowerTableRows>`

### To Do

-   Create a table to display what's recessive
-   Reuse drop down custom select structure?

---

# Refactors adding and removing recessive traits - 6/21/2019 - geneDominance

## [9816e88c211edd0d10dc636e2868d7c095e36c65](https://github.com/nodes777/flower-game-phaser3/commit/9816e88c211edd0d10dc636e2868d7c095e36c65)

-   Refactored to `<RemoveRecessiveTrait>` and `<AddRecessiveTrait>` to make adding and removing recessive genes resuable
    -   requires a proptype of string
    -   updates actions and reducers to handle this
-   Only traits (colors) to mark as recessive are those that appear in punnett

### To Do

-   Create a table to display what's recessive

---

# Creates add recessive color - 6/21/2019 - geneDominance

## [be64dd2864724b9d73b7d645850dfcf19b5bc301](https://github.com/nodes777/flower-game-phaser3/commit/be64dd2864724b9d73b7d645850dfcf19b5bc301)

-   Fixed bug in configReducer - entire state was going into config substate
-   Added `recessive` object in `config`, contains each gene with an array of recessive traits
    -   determineColor handles comparision between recessive colors array and which color will appear(phenotype)
    -   "White" is a default recessivec color
-   Added actions `ADD_RECESSIVE_COLOR` and `REMOVE_RECESSIVE_COLOR` and corresponding action creators
-   Creates a simple select component to add recessive colors

### To Do

-   Add a client side method to remove recessive colors
-   Only use the colors that appear in the punnett as possible to make recessive?
-   refactor addRecessiveColor to be for any trait
-   Create a table to display what's recessive

---

# Set up gene dominance branch - 6/20/2019 - master

## [41249b6ee5ad908a64e376c27d66205826601826](https://github.com/nodes777/flower-game-phaser3/commit/41249b6ee5ad908a64e376c27d66205826601826)

-   Sets up branch geneDominance
-   Just updated the below commit

---

# Starts Panel - 6/10/2019 - master

## [5fb2ac427554f48d078b968a4b0faad555c2cd62](https://github.com/nodes777/flower-game-phaser3/commit/5fb2ac427554f48d078b968a4b0faad555c2cd62)

-   Starts a panel for options config on the right side of the screen
    -   Mostly css and html restructuring
-   Resolves a bug for buttons for creating new flowers - they were missing posInfo property

---

# Adds PropType check for genes - 6/10/2019 - master

## [a2998a7d85d077375da3f42ba2c7a62294fc816a](https://github.com/nodes777/flower-game-phaser3/commit/a2998a7d85d077375da3f42ba2c7a62294fc816a)

-   `<Allele>` now proptype checks to be one of the /allTypes.js

---

# Adds FlowerShapeIcon - 6/10/2019 - master

## [cd521f6203ec9056ec1926d75f7f60ec361fedfd](https://github.com/nodes777/flower-game-phaser3/commit/cd521f6203ec9056ec1926d75f7f60ec361fedfd)

-   Adds `<FlowerShapeIcon>` to `<Allele>` with switch case to determine `<ColorSquare>` or `<FlowerShapeIcon>`

---

# Adds bee pause button - 6/9/2019 - master

## [5663d2f6854767d3a061f00685bcef669b7ef617](https://github.com/nodes777/flower-game-phaser3/commit/5663d2f6854767d3a061f00685bcef669b7ef617)

-   Adds a `<BeeCanFlyButton>` to App.js
-   Adds a `config` property to the store with `config.beeCanFly`
-   checkStore.js now handles checking the store's config
-   Renamed `CHANGE_PARENT_ALLELE` to `CHANGE_FLOWER` in actions/types/reducers
-   Removed `connect` and `mapStateToProps` from `<Diploid>` as it was unneccessary

---

# Clamp flowers to canvas - 6/8/2019 - master

## [eda27b1c48784e19a16f8cd29542a470ff0853c6](https://github.com/nodes777/flower-game-phaser3/commit/eda27b1c48784e19a16f8cd29542a470ff0853c6)

-   In index.js and exampleState.js, `screenSize` has it's width and height - 20px to prevent scrollbar on bottom
-   Adds `isWithinBounds` to determinePosition.js to ensure flowers stay on canvas
-   Gitlog commits are heading 2 now

---

# Redo on flower position determination - 6/7/2019 - master

## [01a4a847e5a96688562258917a7025c845564759](https://github.com/nodes777/flower-game-phaser3/commit/01a4a847e5a96688562258917a7025c845564759)

-   `determineRandomXPos` and `determineRandomYPos` now take screenSize as an arguement. This fixes a bug where screenSize wasn't definied in game initialization
-   `determinePosition(parent2Position, allPositions)` in utils/determinePosition:
    -   Creates the 4 potential position objects from the second parent +/- 20 pixels
    -   Creates a `posInfo` object to hold `availableNewPositions`, `hasRoom`, and the new position to be given `newPos`
    -   Compares those 4 objects to allPositions - any that pass (AKA are not in that group) are pushed to `posInfo`
    -   From `availableNewPositions` pick a random one to be `newPos`
    -   If `availableNewPositions.length > 0` then there is room
        -   Call `store.dispatch(addFlower(info));` with info containing `posInfo.newPos`
        -   flowersReducer handles new object posInfo for positioning
    -   If there's no room, don't dispatch
-   Bee is still fast with `moveToObject` movement

---

# Adds Position determination - 6/4/2019 - master

## [ba88924ea6ce7ee6304d432703b25274edf8312d](https://github.com/nodes777/flower-game-phaser3/commit/ba88924ea6ce7ee6304d432703b25274edf8312d)

-   Adds position determination. Position is diagonal from the second parent +/- 20 pixels
    -   Adds `allPositions` to `flowers` in the store
    -   flowersReducer.js handles position
-   Increases Bee Speed from 90 to 400, to moveToObject, and turns off hack to reset bee accelleration, in order to speed testing,
-   Moves checkStore.js to phaser/utils instead of generic utils
-   BUG: There is no method for checking whether a flower is "full" and there are no more available positions

---

# Fixes colorlistbox select double click bug - 6/3/2019 - master

## [ced66997b4d2f2c0e4a34c1395dc9f6a9801fa39](https://github.com/nodes777/flower-game-phaser3/commit/ced66997b4d2f2c0e4a34c1395dc9f6a9801fa39)

-   Fixes bug where clicking on the custom select after the options are open causes a crash
-   Fixes README broken links

---

# improves visual formatting of tables - 6/2/2019 - master

## [170361bf521ea3e6492b3a66877d541ad16044e5](https://github.com/nodes777/flower-game-phaser3/commit/170361bf521ea3e6492b3a66877d541ad16044e5)

-   Adds a H1 to the beginning of each Punnett Table
-   Adds utils/visualFormatting.js to capitalize first letters
-   Adds a `<span> </span>` in Diploid and FlowerTableRows to provide space between words
-   Refactors FlowerTableRows to use Allele
-   Changes `shapes` to be camelCase, ie: `shapes.Diamond` to match style

---

# adds mode for 3d spritetesting - 6/1/2019 - master

## [d4d010aad9ff709897ed65638f79e243d9c3ef76](https://github.com/nodes777/flower-game-phaser3/commit/d4d010aad9ff709897ed65638f79e243d9c3ef76)

-   Adds a `this.spritestack = true` bool in preload.js to test different modes
-   Adds assets/spritestack folder
-   Fixes jsPrettier

---

# prep for 3d spritestacking - 6/1/2019 - master

## [eabc0bc67227d03270db78b4c5ee4d44ee61ea34](https://github.com/nodes777/flower-game-phaser3/commit/eabc0bc67227d03270db78b4c5ee4d44ee61ea34)

-   Adds a `this.spritestack = true` bool in preload.js to test different modes
-   JsPrettier broke - pausing to fix

---

# Adds spritestack assets - 5/31/2019 - master

## [16b0336c01dd27006c8be29c617107f551c130ba](https://github.com/nodes777/flower-game-phaser3/commit/16b0336c01dd27006c8be29c617107f551c130ba)

-   Adds spritestack assets

---

# Seperates Allele into TableAllele - 5/23/2019 - master

## [e9105625eb6e88aa85dc426751cdc2eb0323055e](https://github.com/nodes777/flower-game-phaser3/commit/e9105625eb6e88aa85dc426751cdc2eb0323055e)

-   `<Allele>` becomes pure component
-   `<TableAllele>` fills previous `<Allele>` purpose, updating as the Punnett Table Headers change
-   `<Allele>` can now be used everywhere, with functions to prettify allele names and conditionally add spacing, capitalization, and icons if needed
-   `<Allele>` replaces redundant code in `<AlleleListboxSelect>` and `<AlleleListboxOptions>`
-   Minor bug with color squares not appearing in listbox select _fixed_, was adding an unneccessary "s"
-   Kerfuffle making this commit - 2 commits made

---

# Puts AlleleListbox components into their own folder - 5/23/2019 - master

## [c4396a206683f4d63fb9f591e616304e0baec958](https://github.com/nodes777/flower-game-phaser3/commit/c4396a206683f4d63fb9f591e616304e0baec958)

-   Puts AlleleListbox components into their own folder
-   /handlers folder goes into /AlleleListbox as well
-   Deletes unneccessary `<PunnettTable>` as it became `<PunnettTableGene>`

---

# Generic Out Punnett Table - 5/23/2019 - master

## [8b306ab52d12e87cb179c04491125c9a6f59371b](https://github.com/nodes777/flower-game-phaser3/commit/8b306ab52d12e87cb179c04491125c9a6f59371b)

## Generics out ColorListboxContainer to `AlleleListboxContainer`

1. `<App>` passes `gene` to `<PunnettTableGene>`
2. `<PunnettTableGene >` to `<AlleleListboxContainer alleleType={gene}/>`
3. `<AlleleListboxContainer>` looks at punnett in store and uses `alleleType` to get `currentAllele`. `currentAllele` and `alleleType` are passed to `<AlleleListboxSelect>`.

    1. The`<AlleleListboxSelect>` displays `currentAllele`
    2. Conditional display of `<ColorSquare>` if `alleleType === "colors"`

4. `<AlleleListboxContainer>` passes `alleleType` to `<AlleleListboxOptions>`
    1. Created allTypes.js to export all flower gene types
    2. Get the correct alleleSet to display via `alleleSet = allTypes[`\${alleleType}s`]`, note the added "s"
    3. Conditional display of `<ColorSquare>`
5. Modified `<Allele>` to get the table cells to match the table headers AKA `AlleleListboxSelect`
    1. Now accepts `alleleType` from `<Diploid>`, which was previously present but unused
    2. Removes direct reference to color property of punnett in store, uses `alleleType`

### Side Effects

-   Changes `flowerShapes` to `shapes` in types/flowerShapes.js
    -   phaser/preload.js changes loading to `shapes.DEFAULT`
    -   utils/determineFlowerShape changes to `shapes`
-   Removes `ColorListboxContainer`, `ColorListboxOptions`, and `ColorListboxSelect` for `AlleleListboxContainer`, `AlleleListboxOptions`, and `AlleleListboxSelect`

### Accessibility:

-   Adds `scope="col"` to flower table headers
-   Adds `lang="en"` to html tag

---

# Resolves hidden colorlistboxoptions bug - 5/21/2019 - master

## [2689aca632f6a71c9a6c433915d20128a3fa57b3](https://github.com/nodes777/flower-game-phaser3/commit/2689aca632f6a71c9a6c433915d20128a3fa57b3)

-   Resolves bug where colorlistboxoptions do not appear visually, by setting `position:absolute` instead of `fixed` in listbox.css.
-   Issue remains for clicking on the listbox select after openOptions is already open.

---

# Sets up gitlog.md - 5/21/2019 - master

## [3816e54606c567c9749cf2abbc101b1fa9cbda59](https://github.com/nodes777/flower-game-phaser3/commit/3816e54606c567c9749cf2abbc101b1fa9cbda59)

-   Creates this gitlog
-   Discovered bug in dropdown selects

---

# Sets random initial starting pos for first flowers - 5/21/2019 - master

## [f6e68e4ab915f2346b17e30f3cf20a707ed642e5](https://github.com/nodes777/flower-game-phaser3/commit/f6e68e4ab915f2346b17e30f3cf20a707ed642e5)

-   Changes exampleState.js positions to be determined by deteminePosition.js
    `const parent1XPos = determineXPos();`
-   Issues with defining screen size. `screenSize` is now defined in both index.js and exampleState.js
-   The goal was to ensure the bee always faced the correct direction regardless of flower spawn, however, this was already the case.
