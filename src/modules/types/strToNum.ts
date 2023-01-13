export const strToNum = (string: string): number => {
    if (!string || (typeof string !== "string")) throw new Error("No string provided");
    if (isNaN(Number(string))) throw new Error("No valid string provided");

    return Number(string);
}
