/**
 * @function `flip` - Quickly execute a heads or tails decision randomly
 * @returns { String } - Returns "heads" or "tails" (*as a string*)
 */

function flip() {
    return Math.random() >= 0.5 ? "heads" : "tails";
}

module.exports = flip;
