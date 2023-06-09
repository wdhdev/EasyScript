/**
 * @function `uuid` - Generate a unique UUID using the RFC 4122 version 4 UUID standard.
 * @param { Number } [number] - The amount of UUIDs to generate. Condition: **`1 < amount < 64`**
 * @returns { string | string[] } - Returns an array if the amount inputted is above 1, else returns a string.
 */

module.exports = function uuid(number) {
    let amount = 1;

    if (number && !isFinite(number)) throw new TypeError("Max number must be a number");
    if ((number && number < 1) || (number && number >= 64)) throw new RangeError("Amount must be equal or higher than 1 and lower than 64");

    if (number) amount = number;

    let uuids = [];

    for (var i = 0; i < amount; i++) {
        const uuid = require("crypto").randomUUID();

        uuids.push(uuid);
    }

    if (uuids.length === 1) return uuids[0];

    return uuids;
};
