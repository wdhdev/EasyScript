const { customAlphabet } = require("nanoid");

/**
 * @function `id` - Generate a unique ID composed of random characters and numbers.
 * @param { Number } [length] - The length of each ID.
 * @param { Number } [amount] - The amount of IDs to generate. Condition: **`1 < amount < 64`**
 * @returns { Array } - Returns an array if the amount inputted is above 1.
 * @returns { String } - Returns a string if the amount inputted is equal to 1.
 */

function generateId(length, amount) {
    let ids = [];

    let i = 0;

    do {
        const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", length );
        const id = nanoid();

        ids.push(id);

        i++;
    } while (i < amount);

    if (ids.length === 1) ids = ids[0];

    return ids;
}

function id(length, amount) {
    if (!length) throw new SyntaxError("No length specified");
    if (typeof length !== "number") throw new TypeError("Length must be Number type");

    let ids = 1;

    if (amount && !isFinite(amount)) throw new TypeError("Amount must be Number type");
    if ((amount && amount < 1) || (amount && amount >= 64)) throw new RangeError("Amount must be equal or higher than 1 and lower than 64");

    if (amount) ids = amount;

    return generateId(length, amount);
}

module.exports = id;
