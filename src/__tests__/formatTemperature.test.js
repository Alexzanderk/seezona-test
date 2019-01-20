import { formatTemperature } from '../utils/formatTemperature';

describe('formatTemperature function', () => {
	it('Works with units to return value of unit', () => {
		const imperial = 'imperial';
		const metric = 'metric';

		expect(formatTemperature(imperial)).toEqual('℉');
		expect(formatTemperature(metric)).toEqual('℃');
		expect(formatTemperature()).toEqual('°');
		expect(formatTemperature(undefined)).toEqual('°');
	});
});
