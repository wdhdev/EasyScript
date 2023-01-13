/**
 * 
 * @function `flip` - Quickly execute a heads or tails decision randomly 
 * @returns {string} Returns "heads" or "tails" (*as string*)
 */

export const flip = (): string => {
    return Math.random() >= 0.5 ? "heads" : "tails";
}
