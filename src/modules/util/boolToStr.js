/**
 * @function `boolToStr` - Convert a boolean to a string.
 * @param { Boolean } boolean - *Required* The boolean to be converted.
 * @returns { String } - The output of the conversion.
 */

function boolToStr(boolean) {
    if (typeof boolean !== "boolean") throw new TypeError("No boolean provided");

    return boolean.toString();
}

module.exports = boolToStr;
