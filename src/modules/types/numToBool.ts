export const numToBool = (number: number): boolean => {
    if (typeof number !== "number") throw new Error("No number provided");
    if (number !== 1 && number !== 0) throw new Error("Number must be either 0 or 1");

    return number === 1;
}
