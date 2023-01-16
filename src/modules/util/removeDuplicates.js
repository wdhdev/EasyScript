function MethodException(message) {
    this.message = message;
    this.name = "Method Error";
}

/**
 * @function removeDuplicates - Return an array that has no duplicate values
 * @param { Array<> } arr - An array of entries to be cleaned
 * @param { Boolean } [multi_dim=true] - Turn multi-dimensional arrays to one-dimensional before removing duplicates - Default: True (Optional)
 * @param { Boolean } [truthy_only=true] - Remove falsy values (empty string " ", undefined, null, false, true, empty arrays [], empty objects {}, functions) - Default: True (Optional)
 * @param { ( 'none' | ['alphabetic' | 'numeric' | 'lengthwise'] ) } [sort_by] - Sort the returned array by one or a combination of options - If multiple options exist will sort method by method - Default: 'none' (Optional)
 * @returns { Array } New array that has no duplicate values
 */

const removeDuplicates = (
    arr,
    multi_dim = true,
    truthy_only = true,
    sort_by = "none"
) => {
    // Flatten multi-dimensional arrays
    if (!Array.isArray(arr))
        throw new MethodException(
            `Illegal use of parameter arr - Expected Array - Found: ${typeof arr}`
        );

    let newArray = arr;

    if (multi_dim === true) {
        while (newArray.filter((e) => Array.isArray(e)).length > 0) {
            newArray = newArray.flat();
        }
    } else if (typeof multi_dim !== "boolean")
        throw new MethodException(
            `Illegal use of parameter multi_dim - Expected true or false - Found: ${multi_dim}`
        );

    // Filter falsy values
    if (truthy_only === true) {
        newArray = newArray.filter((e) => {
            if (typeof e === "string") {
                if (e.trim() === "") /** empty strings */ return false;
                return true; // Not empty strings
            } else if (Array.isArray(e)) {
                if (e.length > 0) return true; // Check if empty
                return false; // Array not empty
            } else if (!e && e !== 0) {
                // false, null or undefined NOT 0 (number) ref#1
                return false;
            } else if (typeof e === "boolean") {
                // Boolean: true or false
                return false;
            } else if (typeof e === "object") {
                // Object or null (can't be null because ref#1 was checked)
                if (Object.keys(e).length > 0) return true; // Object not empty
                return false; // Empty object
            } else if (typeof e === "function") {
                // Is function
                return false;
            } else if (typeof e === "number") {
                return true;
            } else {
                return false; // Default
            }
        });
    } else if (typeof truthy_only !== "boolean")
        throw new MethodException(
            `Illegal use of parameter truthy_only  - Expected true or false - Found: ${truthy_only}`
        );

    // Sort
    if (Array.isArray(sort_by)) {
        // Check if unacceptable values exist
        const params_unknown = sort_by.filter(
            (e) => e !== "alphabetic" && e !== "lengthwise" && e !== "numeric"
        );

        if (params_unknown.length > 0)
            throw new MethodException(
                `Illegal use of parameter sort_by - Expected ["alphabetic","numeric","lengthwise"] - Found: ${params_unknown}`
            ); // Illegal sort method(s)

        // Check for no methods in array
        if (sort_by.length <= 0)
            throw new MethodException(
                `Illegal use of parameter sort_by - Expected ["alphabetic","numeric","lengthwise"] - Found empty array`
            );

        // Check for more than 3 methods
        if (sort_by.length > 3)
            throw new MethodException(
                `Illegal use of parameter sort_by - Expected ["alphabetic","numeric","lengthwise"] - Overflow of methods`
            );

        // Check for repetitive methods
        const methodsHashMap = {};

        sort_by.forEach((e) =>
            methodsHashMap[e] > 0
                ? (methodsHashMap[`${e}`] = methodsHashMap[`${e}`] + 1)
                : (methodsHashMap[`${e}`] = 1)
        );

        for (const method in methodsHashMap) {
            if (methodsHashMap[method] > 1) {
                throw new MethodException(
                    `Illegal use of parameter sort_by - Cannot use a method more than once - Duplicate methods : (${method})`
                );
            }
        }

        // Sorting
        sort_by.forEach((e) => {
            if (e === "alphabetic") {
                newArray.sort((a, b) =>
                    typeof a === "string" && typeof b === "string"
                        ? a.localeCompare(b)
                        : -1
                );
            } else if (e === "numeric") {
                newArray.sort((a, b) => a - b);
            } else if (e === "lengthwise") {
                newArray.sort((a, b) =>
                    (typeof a === "string" && typeof b == "string") ||
                    (Array.isArray(a) && Array.isArray(b))
                        ? a.length - b.length
                        : -1
                );
            }
        });
    } else if (sort_by === "none") {
    } // Okay
    else
        throw new MethodException(
            `Illegal use of parameter sort_by - Expected "none" or ["alphabetic","numeric","lengthwise"] - Found: ${sort_by}`
        );

    return Array.from(new Set(newArray));
};

module.exports = removeDuplicates;
