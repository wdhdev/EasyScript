/**
 * @function `log` - Quickly log any data to the console.
 * @param {any} input - *Required* The data that will be passed on to the console. Will throw an error if the input is undefined
 * @returns {Function} an Instance of console.log() that is executed instantly using `input` 
 */

export const log = (input: any): void => {
    if (!input) throw new Error("No input specified");

    console.log(input);
}

