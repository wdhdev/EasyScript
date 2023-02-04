module.exports = {
    dns: {
        a: require("./modules/dns/a"),
        cname: require("./modules/dns/cname")
    },
    flip: require("./modules/flip"),
    id: require("./modules/id"),
    log: require("./modules/log"),
    print: require("./modules/print"),
    random: require("./modules/random"),
    util: {
        boolToNum: require("./modules/util/boolToNum"),
        boolToStr: require("./modules/util/boolToStr"),
        numToBool: require("./modules/util/numToBool"),
        numToStr: require("./modules/util/numToStr"),
        removeDuplicates: require("./modules/util/removeDuplicates"),
        strToBool: require("./modules/util/strToBool"),
        strToNum: require("./modules/util/strToNum")
    },
    uuid: require("./modules/uuid")
}
