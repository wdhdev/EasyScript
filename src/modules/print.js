/**
 * @function `print` - Quickly log any data to the console.
 * @param {any} input - *Required* The data that will be passed on to the console. Will throw an error if the input is undefined
 * @returns {Function} An instance of console.log() that is executed instantly using `input` 
 */

function print(input) {
    if (!input) {
        throw new Error("No input specified");
    }

    return console.log(input);
}

module.exports = print;