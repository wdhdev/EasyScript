function numToStr(number) {
    if(typeof number !== "number") throw new Error("No number provided");

    return number.toString();
}

module.exports = numToStr;