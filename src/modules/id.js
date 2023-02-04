/**
 * @function `id` - Generate a unique ID composed of random characters and numbers.
 * @param { Number } [length] - The length of each ID.
 * @param { Number } [amount] - The amount of IDs to generate. Condition: **`1 < amount < 64`**
 * @returns { string | string[] } - Returns an array if the amount inputted is above 1, else returns a string.
 */

const { customAlphabet } = require("nanoid");

module.exports = function id(length, amount) {
    if (!length) throw new SyntaxError("No length specified");
    if (typeof length !== "number") throw new TypeError("Length must be Number type");

    let ids = 1;

    if (amount && !isFinite(amount)) throw new TypeError("Amount must be Number type");
    if ((amount && amount < 1) || (amount && amount >= 64)) throw new RangeError("Amount must be equal or higher than 1 and lower than 64");

    if (amount) ids = amount;

    let generatedIds = [];

    let i = 0;

    do {
        const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", length );
        const id = nanoid();

        generatedIds.push(id);

        i++;
    } while (i < amount);

    if (generatedIds.length === 1) return generatedIds[0];

    return generatedIds;
}
