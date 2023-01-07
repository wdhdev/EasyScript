module.exports = function boolToStr(boolean) {
    if(!boolean || (typeof boolean !== "boolean")) throw new Error("No boolean provided");

    return boolean.toString();
}