/**
 * @function `boolToNum` - Convert a boolean to a number.
 * @param { Boolean } boolean - *Required* The boolean to be converted.
 * @returns { Number } - The output of the conversion.
 */

function boolToNum(boolean) {
    if (typeof boolean !== "boolean") throw new TypeError("No boolean provided");

    let res;

    if (boolean) res = +true;
    if (!boolean) res = +false;

    return res;
}

module.exports = boolToNum;
