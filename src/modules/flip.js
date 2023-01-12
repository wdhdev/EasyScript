/**
 * 
 * @function `flip` - Quickly execute a heads or tails decision randomly 
 * @returns {string} Returns "heads" or "tails" (*as string*)
 */

function flip() {
    return Math.random() >= 0.5 ? "heads" : "tails";
}

module.exports = flip;
