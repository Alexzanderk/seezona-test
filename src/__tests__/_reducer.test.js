import regeneratorRuntime from 'regenerator-runtime';
import reducer from '../store/reducer';
import { GET_ALERT, GET_WEATHER, REQUEST_WEATHER } from '../store/actions';
import { initialState } from '../store';

describe('reducer test', () => {
	it('test REQUEST_WEATHER', () => {
		const action = {
			type: REQUEST_WEATHER,
			payload: true
		};
		expect(reducer(initialState, action)).toEqual({
			loading: true
		});
	});

	it('test GET_WEATHER', () => {
		const action = {
			type: GET_WEATHER,
			payload: { name: 'London' },
			unit: 'metric'
		};
		expect(reducer(initialState, action)).toEqual({
			...initialState,
			loading: false,
			weather: action.payload,
			unit: action.unit
		});
	});

	it('test GET_ALERT', () => {
		const action = {
			type: GET_ALERT,
			payload: true
		};
		expect(reducer(initialState, action)).toEqual({
			alert: true
		});
	});
});
