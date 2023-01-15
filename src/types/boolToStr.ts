export function boolToStr(boolean: boolean): string {
	if (typeof boolean !== 'boolean') throw new Error('No boolean provided');

	return boolean.toString();
}
