/**
 * @function `numToBool` - Convert a number to a boolean.
 * @param { Number } [number] - *Required* The number to be converted.
 * @returns { Boolean } - The output of the conversion.
 */

module.exports = function numToBool(number) {
    if (typeof number !== "number") throw new TypeError("No number provided");
    if (number !== 1 && number !== 0) throw new SyntaxError("Number must be either 0 or 1");

    return number === 1;
}
