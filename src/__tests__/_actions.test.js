import thunk from 'redux-thunk';
import promise from 'redux-promise';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import moxios from 'moxios';

import {
	GET_ALERT,
	GET_WEATHER,
	REQUEST_WEATHER,
	requestWeather,
	getWeather,
	addAlert,
	removeAlert
} from '../store/actions';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
	const city = 'london';
	const unit = 'default';
	beforeEach(function() {
		moxios.install();
	});

	afterEach(function() {
		moxios.uninstall();
	});

	it('Async action test', async () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: { name: 'London' }
			});
		});

		const expectedActions = [
			{ type: GET_ALERT, payload: false },
			{ type: GET_WEATHER, payload: { name: 'London' }, unit: 'kelvin' }
		];

		const store = mockStore({ weather: {} });

		return store.dispatch(getWeather(city, unit)).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('redux actions ', () => {
	it('should add and remove alert', () => {
		const expectedAction = {
			type: GET_ALERT,
			payload: true
		};

		expect(addAlert(alert)).toEqual(expectedAction);
		expectedAction.payload = false;
		expect(removeAlert(alert)).toEqual(expectedAction);
	});

	it('should change loading when request weather', () => {
		const expectedAction = {
			type: REQUEST_WEATHER,
			payload: true
		};

		expect(requestWeather(true)).toEqual(expectedAction);
		expectedAction.payload = false;
		expect(requestWeather(false)).toEqual(expectedAction);
	});
});
