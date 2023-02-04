/**
 * @function `numToStr` - Convert a number to a string.
 * @param { Number } [number] - *Required* The number to be converted.
 * @returns { String } - The output of the conversion.
 */

export function numToStr(number) {
    if (typeof number !== "number") throw new TypeError("No number provided");

    return number.toString();
}
