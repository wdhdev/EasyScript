function strToBool(string) {
    if(!string || (typeof string !== "string")) throw new Error("No string provided");

    if(string !== "true" && string !== "false") throw new Error("No valid string provided");

    let res;

    if(string === "true") res = Boolean(true);
    if(string === "false") res = Boolean(false);

    return res;
}

module.exports = strToBool;