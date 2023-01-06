module.exports = function print(input) {
    if(!input) {
        throw new Error("No input specified");
    }

    return console.log(input);
}