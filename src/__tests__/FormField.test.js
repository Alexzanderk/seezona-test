import React from 'react';
import { shallow } from 'enzyme';
import FormFields from '../components/Form/FormFields';

import { formdata } from '../utils/_mockData';

describe('<FormFields />', () => {
	it('renders component with type="text"', () => {
		const wrapper = shallow(
			<FormFields formdata={formdata.city} id="city" />
		);
		expect(wrapper.find('[data-test="component-formfield"]').length).toBe(
			1
		);
		expect(wrapper.find('input').length).toBe(1);
		expect(wrapper.find('span.label').length).toBe(1);
		expect(wrapper.find('span.label').text()).toEqual(
			formdata.city.config.placeholder
		);
	});
	it('test change input value', () => {
		const onChange = jest.fn();
		const wrapper = shallow(
			<FormFields
				formdata={{
					...formdata.city
				}}
				change={onChange}
				id="city"
			/>
		);
		wrapper.find('input').simulate('change', 'London');
		expect(onChange).toHaveBeenCalledWith('London');
	});

	it('renders component with type="select"', () => {
		const onChange = jest.fn();
		const wrapper = shallow(
			<FormFields formdata={formdata.units} change={onChange} id="unit" />
		);
		expect(wrapper.find('select').length).toBe(1);
		expect(wrapper.find('select').children().length).toBe(
			formdata.units.config.options.length
		);
		wrapper
			.find('select')
			.simulate('change', formdata.units.config.options[1]);
		expect(onChange).toHaveBeenCalledWith(formdata.units.config.options[1]);
	});
});
