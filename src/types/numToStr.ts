export function numToStr(number: number): string {
	if (typeof number !== 'number') throw new Error('No number provided');

	return number.toString();
}
