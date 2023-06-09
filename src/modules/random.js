/**
 * @function `random` - Used to generate a random number between 1 and a max value.
 * @param { Number } [min] - The min value used.
 * @param { Number } [max] - The max value used.
 * @returns { Number } - A random number between 1 and max (*parameter*). If max is *undefined*, will return a random number between 1 and 100.
 */

module.exports = function random(min, max) {
    if ((max && !isFinite(max)) || (min && !isFinite(min))) throw new TypeError("Parameter number must be a number");
    if (min >= max) throw new RangeError("Parameter min must be less than max");
    if (min <= 0 && min >= max) throw new RangeError("Parameter max must be greater than min");

    return Math.floor(Math.random() * (max - min + 1) + min);
};
