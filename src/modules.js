module.exports = {
    "flip": require("./modules/flip"),
    "id": require("./modules/id"),
    "log": require("./modules/log"),
    "print": require("./modules/print"),
    "random": require("./modules/random"),
    "types": {
        "boolToNum": require("./modules/types/boolToNum"),
        "boolToStr": require("./modules/types/boolToStr"),
        "numToStr": require("./modules/types/numToStr"),
        "strToBool": require("./modules/types/strToBool"),
        "strToNum": require("./modules/types/strToNum")
    },
    "util": {
        "removeDuplicates": require("./modules/util/removeDuplicates")
    },
    "removeDuplicates": require("./modules/removeDuplicates"),
    "uuid": require("./modules/uuid")
}
