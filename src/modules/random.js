function random(max) {
    let highest = 100;

    if(max && !isFinite(max)) throw new Error("Max number must be a number");
    if(max && max <= 1 || max && max >= 2147483647) throw new Error("Max number must be higher than 1 and lower than 2,147,483,647");

    if(max) highest = max;

    const result = Math.floor((Math.random() * highest) + 1);

    return result;
}

module.exports = random;