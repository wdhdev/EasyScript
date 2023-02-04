/**
 * @function `random` - Used to generate a random number between 1 and a max value.
 * @param { Number } [max] - The max value used. Condition: **`1 < max < 2_147_483_647`**
 * @returns { Number } - A random number between 1 and max (*parameter*). If max is *undefined*, will return a random number between 1 and 100.
 */

module.exports = function random(max) {
    let highest = 100;

    if (max && !isFinite(max)) throw new TypeError("Max number must be a number");
    if ((max && max <= 1) || (max && max >= 2147483647)) throw new RangeError("Max number must be higher than 1 and lower than 2,147,483,647");

    if (max) highest = max;

    const result = Math.floor(Math.random() * highest + 1);

    return result;
}
