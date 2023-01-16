/**
 * @function `log` - Quickly log any data to the console.
 * @param { any } input - *Required* The data that will be passed on to the console.
 * @returns { Function } - An instance of console.log() that is executed using `input`
 */

function log(input) {
    if (!input) throw new Error("No input specified");

    return console.log(input);
}

module.exports = log;
