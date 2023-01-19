const modules = {
    flip: require("./modules/flip"),
    id: require("./modules/id"),
    log: require("./modules/log"),
    print: require("./modules/print"),
    random: require("./modules/random"),
    util: {
        boolToNum: require("./modules/util/boolToNum"),
        boolToStr: require("./modules/util/boolToStr"),
        numToStr: require("./modules/util/numToStr"),
        strToBool: require("./modules/util/strToBool"),
        strToNum: require("./modules/util/strToNum"),
        removeDuplicates: require("./modules/util/removeDuplicates")
    },
    uuid: require("./modules/uuid")
}

module.exports = modules;
