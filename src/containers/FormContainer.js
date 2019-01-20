import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather, requestWeather } from '../store/actions';
import Form from '../components/Form/Form';

class FormContainer extends Component {
	state = {
		formdata: {
			city: {
				element: 'input',
				value: '',
				config: {
					name: 'city',
					type: 'text',
					placeholder: 'Find your city'
				}
			},
			units: {
				element: 'select',
				value: '',
				config: {
					name: 'units',
					placeholder: 'Units format',
					options: [
						['Select units format'],
						['Kelvin', 'default'],
						['Celsius', 'metric'],
						['Fahrenheit', 'imperial']
					]
				}
			}
		}
	};

	submitForm = e => {
		e.preventDefault();
		const { city, units } = this.state.formdata;
		if (city.value) {
			this.props.dispatch(requestWeather(true));
			this.props.dispatch(getWeather(city.value, units.value));
		}
	};

	handleChange = e => {
		const { name, value } = e.target;
		const newFormData = { ...this.state.formdata };
		newFormData[name].value = value;
		this.setState({ newFormData });

		if (name === 'units') {
			this.props.dispatch(
				getWeather(newFormData.city.value, newFormData.units.value)
			);
		}
	};

	render() {
		return (
			<Form
				data-test="container-form"
				alert={this.props.alert}
				state={this.state}
				change={e => this.handleChange(e)}
				submitForm={this.submitForm}
			/>
		);
	}
}

const mapStateToProps = state => ({
	weather: state.weather,
	unit: state.weather,
	alert: state.alert,
	loading: state.loading
});

export default connect(mapStateToProps)(FormContainer);
