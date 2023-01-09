module.exports = function (number) {
    if(typeof number !== "number") throw new Error("No number provided");

    return number.toString();
}