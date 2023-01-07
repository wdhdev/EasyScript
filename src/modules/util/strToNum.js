module.exports = function strToNum(string) {
    if(!string || (typeof string !== "string")) throw new Error("No string provided");

    if(!isFinite(string)) throw new Error("No valid string provided");

    return Number(string);
}