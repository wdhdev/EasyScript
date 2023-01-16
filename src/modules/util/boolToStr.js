function boolToStr(boolean) {
    if (typeof boolean !== "boolean") throw new Error("No boolean provided");

    return boolean.toString();
}

module.exports = boolToStr;
