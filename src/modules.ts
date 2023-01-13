import * as flip from './modules/flip';
import * as id from './modules/id';
import * as log from './modules/log';
import * as print from './modules/print';
import * as random from './modules/random';
import * as boolToNum from './modules/types/boolToNum';
import * as boolToStr from './modules/types/boolToStr';
import * as numToStr from './modules/types/numToStr';
import * as strToBool from './modules/types/strToBool';
import * as strToNum from './modules/types/strToNum';
import * as removeDuplicates from './modules/util/removeDuplicates';
import * as uuid from './modules/uuid';

export default {
    flip,
    id,
    log,
    print,
    random,
    types: {
        boolToNum,
        boolToStr,
        numToStr,
        strToBool,
        strToNum
    },
    util: {
        removeDuplicates
    },
    uuid
}
