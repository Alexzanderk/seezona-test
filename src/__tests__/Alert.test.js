import React from 'react';
import { shallow, mount } from 'enzyme';
import Alert from '../components/Alert';

const state = { message: 'error message', isVisible: true };
const props = { alert: true, message: 'Error ' };

describe('<Alert />', () => {
	const wrapper = mount(<Alert alert={false} />);
	it('render component without error and after change state', () => {
		const renderComponent = wrapper.find('[data-test="component-alert"]');
		expect(renderComponent.length).toBe(0);
		wrapper.setState({ isVisible: true });
		expect(wrapper.find('[data-test="component-alert"]').length).toBe(1);
	});

	it('check component state ', () => {
		const wrapper = shallow(<Alert />);
		expect(wrapper.state().message).toBe(null);
		expect(wrapper.state().duration).toBe(2000);
		expect(wrapper.state().isVisible).toBeFalsy();
		wrapper.setState(state);
		expect(wrapper.state().message).toBe(state.message);
		expect(wrapper.state().isVisible).toBe(state.isVisible);
	});

	it('renders error text when state change', () => {
		const wrapper = shallow(<Alert />);
		expect(wrapper.find('[data-test="component-alert"]').length).toBe(0);
		wrapper.setState(state)
		expect(wrapper.find('[data-test="component-alert"]').length).toBe(1);
		expect(wrapper.find('[data-test="component-alert"]').text()).toBe(state.message);
	});
});
