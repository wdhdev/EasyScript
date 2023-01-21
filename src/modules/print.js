/**
 * @function `print` - Quickly log any data to the console.
 * @param { any } input - *Required* The data that will be passed on to the console.
 * @returns { Function } - An instance of console.log() that is executed using `input`
 */

function print(input) {
    if (!input) throw new SyntaxError("No input specified");

    return console.log(input);
}

module.exports = print;
