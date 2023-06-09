/**
 * @function `strToNum` - Convert a string to a number.
 * @param { String } [string] - *Required* The string to be converted.
 * @returns { Number } - The output of the conversion.
 */

module.exports = function strToNum(string) {
    if (!string || typeof string !== "string") throw new TypeError("No string provided");
    if (!isFinite(string)) throw new SyntaxError("No valid string provided");

    return Number(string);
};
