module.exports = function (input) {
    if(!input) {
        throw new Error("No input specified");
    }

    return console.log(input);
}