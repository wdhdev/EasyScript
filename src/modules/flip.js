module.exports = function coinflip() {
    return Math.random() >= 0.5 ? "heads" : "tails";
}