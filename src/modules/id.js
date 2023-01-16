const { customAlphabet } = require("nanoid");

/**
 * @function `id` - Generate a unique ID composed of random characters and numbers.
 * @param { Number } length - *Required* The length of the ID.
 * @returns { String } - A unique ID string of a specified length (e.g. abthvmyt3h1j3it)
 */

function id(length) {
    if (!length) throw new Error("No length specified");
    if (typeof length !== "number") throw new Error("Invalid type specified");

    const nanoid = customAlphabet(
        "1234567890abcdefghijklmnopqrstuvwxyz",
        length
    );
    const id = nanoid();

    return id;
}

module.exports = id;
