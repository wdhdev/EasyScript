/**
 * @function `validateCNAMERecord` - Validate a CNAME record
 * @param { String } [record] - *Required* The record to be validated.
 * @returns { Boolean } - Returns true if valid, returns false if invalid
 */

module.exports = function validateCNAMERecord(record) {
    const regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

    return regex.test(record);
}
