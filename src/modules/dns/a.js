/**
 * @function `validateARecord` - Validate an A record
 * @param { String } [record] - *Required* The record to be validated.
 * @returns { Boolean } - Returns true if valid, returns false if invalid
 */

module.exports = function validateARecord(record) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    return regex.test(record);
}
