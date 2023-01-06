module.exports = function log(input) {
    if(!input) {
        throw new Error("No input specified!");
    }

    return console.log(input);
}