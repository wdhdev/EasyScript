/**
 * @function `strToBool` - Convert a string to a boolean.
 * @param { String } number - *Required* The string to be converted.
 * @returns { Boolean } - The output of the conversion.
 */

function strToBool(string) {
    if (!string || typeof string !== "string")
        throw new Error("No string provided");

    if (string !== "true" && string !== "false" && string !== "1" && string !== "0")
        throw new Error("No valid string provided");

    let res;

    if (string === "true" || string === "1") res = Boolean(true);
    if (string === "false" || string === "0") res = Boolean(false);

    return res;
}

module.exports = strToBool;
