function boolToNum(boolean) {
    if (typeof boolean !== "boolean") throw new Error("No boolean provided");

    let res;

    if (boolean) res = +true;
    if (!boolean) res = +false;

    return res;
}

module.exports = boolToNum;
