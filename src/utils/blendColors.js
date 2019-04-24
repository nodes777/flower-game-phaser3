/*
    From https://coderwall.com/p/z8uxzw/javascript-color-blender
    blend two colors to create the color that is at the percentage away from the first color
    this is a 5 step process
        1: validate input
        2: convert input to 6 char hex
        3: convert hex to rgb
        4: take the percentage to create a ratio between the two colors
        5: convert blend to hex
    @param: color1      => the first color, hex (ie: #000000)
    @param: color2      => the second color, hex (ie: #ffffff)
    @param: percentage  => the distance from the first color, as a decimal between 0 and 1 (ie: 0.5)
    @returns: string    => the third color, hex, represenatation of the blend between color1 and color2 at the given percentage
*/
export function blendColors(
    color1 = "#000000",
    color2 = "#ffffff",
    percentage = 0.5,
    debug = false
) {
    // 1: validate input, make sure we have provided a valid hex
    // ^ match beginning
    // # a hash
    // [a-f0-9] any letter from a-f and 0-9
    // {6} the previous group appears exactly 6 times
    // $ match end
    // i ignore case
    const isHex = /^#[0-9A-F]{6}$/i;

    if (!isHex.test(color1))
        throw new error("First color must be provided as a 6 decimal hex");

    if (!isHex.test(color2))
        throw new error("Second color must be provided as a 6 decimal hex");

    if (percentage > 1 || percentage < 0)
        throw new error("percentage must be between 0 and 1");

    // 2: slice off hash
    color1 = color1.substring(1);
    color2 = color2.substring(1);

    // 3: we have valid input, convert colors to rgb
    color1 = [
        parseInt(color1[0] + color1[1], 16),
        parseInt(color1[2] + color1[3], 16),
        parseInt(color1[4] + color1[5], 16)
    ];
    color2 = [
        parseInt(color2[0] + color2[1], 16),
        parseInt(color2[2] + color2[3], 16),
        parseInt(color2[4] + color2[5], 16)
    ];

    // 4: blend https://www.w3.org/TR/compositing-1/#blending
    var color3 = [
        (1 - percentage) * color1[0] + percentage * color2[0],
        (1 - percentage) * color1[1] + percentage * color2[1],
        (1 - percentage) * color1[2] + percentage * color2[2]
    ];

    // 5: convert to hex
    color3 = `#${int_to_hex(color3[0])}${int_to_hex(color3[1])}${int_to_hex(
        color3[2]
    )}`;

    if (debug) {
        console.log("valid: c1 => " + color1 + ", c2 => " + color2);
        console.log(
            "hex -> rgba: c1 => [" +
                color1.join(", ") +
                "], c2 => [" +
                color2.join(", ") +
                "]"
        );
        console.log("c3 => [" + color3.join(", ") + "]");
        console.log(color3);

        // output to canvas for proof
        var cvs = document.createElement("canvas");
        var ctx = cvs.getContext("2d");
        cvs.width = 90;
        cvs.height = 25;
        document.body.appendChild(cvs);

        // color1 on the left
        ctx.fillStyle = color1;
        ctx.fillRect(0, 0, 30, 25);

        // color2 on the right
        ctx.fillStyle = color2;
        ctx.fillRect(60, 0, 30, 25);

        // color3 in the middle
        ctx.fillStyle = color3;
        ctx.fillRect(30, 0, 30, 25);
    }

    // return hex
    return color3;
}

/*
    convert a Number to a two character hex string
    must round, or we will end up with more digits than expected (2)
    note: can also result in single digit, which will need to be padded with a 0 to the left
    @param: num         => the number to conver to hex
    @returns: string    => the hex representation of the provided number
*/
function int_to_hex(num) {
    var hex = Math.round(num).toString(16);
    if (hex.length == 1) hex = "0" + hex;
    return hex;
}
