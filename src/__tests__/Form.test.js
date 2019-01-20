import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import FormContainer from '../containers/FormContainer';
import { initialState } from '../utils/_mockData';

const middleware = [thunk, promise];
const mockStore = configureMockStore(middleware);

describe('<FormContainer />', () => {
	const store = mockStore(initialState);

	it('render without error', () => {
		const wrapper = mount(
			<Provider store={store}>
				<FormContainer />
			</Provider>
		);

		const container = wrapper.find('FormContainer');
		const component = container.find('Form');

		expect(container.length).toBe(1);
		expect(component.length).toBe(1);
	});

	it('check props', () => {
		const wrapper = mount(
			<Provider store={store}>
				<FormContainer />
			</Provider>
		);

		const container = wrapper.find('FormContainer');
		const component = container.find('Form');

		const expectedComponentPropKeys = [
			'data-test',
			'alert',
			'state',
			'change',
			'submitForm'
		];

		const expectedContainerPropKeys = [
			'weather',
			'unit',
			'alert',
			'loading',
			'dispatch'
		];

		expect(Object.keys(container.props())).toEqual(expectedContainerPropKeys);
		expect(Object.keys(component.props())).toEqual(expectedComponentPropKeys);
	});
});
