function numToBool(number) {
    if(typeof number !== "number") throw new Error("No number provided");
    if(number !== 1 && number !== 0) throw new Error("Number must be either 0 or 1");

    let res;

    if(number === 1) res = true;
    if(number === 0) res = false;

    return res;
}

module.exports = numToBool;