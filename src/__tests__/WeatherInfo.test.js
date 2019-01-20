import React from 'react';
import { mount } from 'enzyme';
import WeaherInfo from '../components/WeatherInfo';
import { weather } from '../utils/_mockData';

const defaultProps = {
	loading: true,
	weather,
	unit: ''
};

describe('<WeatherInfo />', () => {
	it('render without error', () => {
		const wrapper = mount(<WeaherInfo {...defaultProps} />);
		const renderComponent = wrapper.find(
			"[data-test='component-weatherInfo']"
		);
		expect(renderComponent.length).toBe(1);
	});

	it('check component props', () => {
		const wrapper = mount(<WeaherInfo {...defaultProps} loading={false} />);
		const expectedProps = ['loading', 'weather', 'unit'];

		expect(Object.keys(wrapper.props())).toEqual(expectedProps);
		expect(wrapper.find('.weather').length).toBe(1);
	});

	it('check render Alert', () => {
		const wrapper = mount(<WeaherInfo weather={{}} loading={false} />);

		expect(wrapper.find('Alert').length).toBe(1);
	});
});
