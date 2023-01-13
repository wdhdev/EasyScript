export const boolToNum = (boolean: boolean): number => {
    if (typeof boolean !== "boolean") throw new Error("No boolean provided");

    return boolean ? 1 : 0;
}
