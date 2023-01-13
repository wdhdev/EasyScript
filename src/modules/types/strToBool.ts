export const strToBool = (string: string): boolean => {
    if (!string || (typeof string !== "string")) throw new Error("No string provided");
    if (string !== "true" && string !== "false") throw new Error("No valid string provided");

    return string === "true";
}
