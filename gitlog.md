# Seperates Allele into TableAllele - 5/23/2019 - master - [e9105625eb6e88aa85dc426751cdc2eb0323055e](https://github.com/nodes777/flower-game-phaser3/commit/e9105625eb6e88aa85dc426751cdc2eb0323055e)

-   `<Allele>` becomes pure component
-   `<TableAllele>` fills previous `<Allele>` purpose, updating as the Punnett Table Headers change
-   `<Allele>` can now be used everywhere, with functions to prettify allele names and conditionally add spacing, capitalization, and icons if needed
-   `<Allele>` replaces redundant code in `<AlleleListboxSelect>` and `<AlleleListboxOptions>`
-   Minor bug with color squares not appearing in listbox select _fixed_, was adding an unneccessary "s"
-   Kerfuffle making this commit - 2 commits made

---

# Puts AlleleListbox components into their own folder - 5/23/2019 - master - [c4396a206683f4d63fb9f591e616304e0baec958](https://github.com/nodes777/flower-game-phaser3/commit/c4396a206683f4d63fb9f591e616304e0baec958)

-   Puts AlleleListbox components into their own folder
-   /handlers folder goes into /AlleleListbox as well
-   Deletes unneccessary `<PunnettTable>` as it became `<PunnettTableGene>`

---

# Generic Out Punnett Table - 5/23/2019 - master - [8b306ab52d12e87cb179c04491125c9a6f59371b](https://github.com/nodes777/flower-game-phaser3/commit/8b306ab52d12e87cb179c04491125c9a6f59371b)

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
