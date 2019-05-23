# Generic Out Punnett Table - 5/23/2019 - master - [tbd](https://github.com/nodes777/flower-game-phaser3/commit/2689aca632f6a71c9a6c433915d20128a3fa57b3)

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

# Resolves hidden colorlistboxoptions bug - 5/21/2019 - master - [2689aca632f6a71c9a6c433915d20128a3fa57b3](https://github.com/nodes777/flower-game-phaser3/commit/2689aca632f6a71c9a6c433915d20128a3fa57b3)

-   Resolves bug where colorlistboxoptions do not appear visually, by setting `position:absolute` instead of `fixed` in listbox.css.
-   Issue remains for clicking on the listbox select after openOptions is already open.

---

# Sets up gitlog.md - 5/21/2019 - master - [3816e54606c567c9749cf2abbc101b1fa9cbda59](https://github.com/nodes777/flower-game-phaser3/commit/3816e54606c567c9749cf2abbc101b1fa9cbda59)

-   Creates this gitlog
-   Discovered bug in dropdown selects

---

# Sets random initial starting pos for first flowers - 5/21/2019 - master - [f6e68e4ab915f2346b17e30f3cf20a707ed642e5](https://github.com/nodes777/flower-game-phaser3/commit/f6e68e4ab915f2346b17e30f3cf20a707ed642e5)

-   Changes exampleState.js positions to be determined by deteminePosition.js
    `const parent1XPos = determineXPos();`
-   Issues with defining screen size. `screenSize` is now defined in both index.js and exampleState.js
-   The goal was to ensure the bee always faced the correct direction regardless of flower spawn, however, this was already the case.
