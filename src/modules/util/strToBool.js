/**
 * @function `strToBool` - Convert a string to a boolean.
 * @param { String } [number] - *Required* The string to be converted.
 * @returns { Boolean } - The output of the conversion.
 */

module.exports = function strToBool(string) {
    if (!string || typeof string !== "string") throw new TypeError("No string provided");
    if (string !== "true" && string !== "false" && string !== "1" && string !== "0") throw new SyntaxError("No valid string provided");

    return string === "false" || string === "0" ? false : true;
};
