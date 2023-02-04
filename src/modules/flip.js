/**
 * @function `flip` - Quickly execute a heads or tails decision randomly
 * @returns { Number } - Returns 1 for heads or 0 for tails
 */

module.exports = function flip() {
    return Math.random() >= 0.5 ? 1 : 0;
}
