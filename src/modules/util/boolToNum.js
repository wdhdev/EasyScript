/**
 * @function `boolToNum` - Convert a boolean to a number.
 * @param { Boolean } [boolean] - *Required* The boolean to be converted.
 * @returns { Number } - The output of the conversion.
 */

module.exports = function boolToNum(boolean) {
    if (typeof boolean !== "boolean") throw new TypeError("No boolean provided");

    return boolean === true ? 1 : 0;
}
