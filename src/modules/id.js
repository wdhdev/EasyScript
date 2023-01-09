const { types } = require("../index").modules;

function generateId(length) {
    return parseInt(Math.ceil(Math.random() * 9999999999999999).toPrecision(length).toString().replace(".", ""));
}

function id(input) {
    let length = input;

    if(!input) throw new Error("No length specified");
    if(typeof input !== "number" && typeof input !== "string") throw new Error("Invalid type specified\nValid types: number, string");

    if(typeof input === "string") {
        len = types.strToNum(input);
    }

    if(length > 16) throw new Error("Length cannot be more than 16");

    const id = generateId(length);

    return id;
}

module.exports = id;