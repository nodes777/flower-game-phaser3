# Prep to merge to master - 6/23/2019 - geneDominance

## [9816e88c211edd0d10dc636e2868d7c095e36c65](https://github.com/nodes777/flower-game-phaser3/commit/9816e88c211edd0d10dc636e2868d7c095e36c65)

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
