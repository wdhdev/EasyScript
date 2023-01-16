/**
 * @function `id` - Randomly generate a unique ID composed of random characters and numbers
 * @param {Number} length - (*Required*) The length of the ID. Condition: *`1 <= length <= 64`*
 * @returns {String} A unique ID string of a specified length (e.g. *abthvmyt3h1j3it*)
 */

export function uuid(): string {
	var d = new Date().getTime();

	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16;

		r = (d + r) % 16 | 0;
		d = Math.floor(d / 16);

		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
}
