const { customAlphabet } = require("nanoid");

function id(length) {
    if(!length) throw new Error("No length specified");
    if(typeof length !== "number") throw new Error("Invalid type specified");

    if(length > 64) throw new Error("Length cannot be more than 64");

    const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", length);
    const id = nanoid();

    return id;
}

module.exports = id;