module.exports = function numToStr(number) {
    if(!number || (typeof number !== "number")) throw new Error("No number provided");

    return number.toString();
}