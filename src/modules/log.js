/**
 * @function `log` - Quickly log any data to the console.
 * @param { any } [input] - *Required* The data that will be passed on to the console.
 * @returns { void } - An instance of console.log() that is executed using `input`.
 */

module.exports = function log(input) {
    if (!input) throw new SyntaxError("No input specified");

    return console.log(input);
}
