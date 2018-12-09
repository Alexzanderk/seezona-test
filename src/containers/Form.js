import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather, requestWeather, removeAlert } from '../actions';
import FormFields from '../components/Form/FormFields';

class Form extends Component {
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
			<div className="search">
				<h1>Look the weather in your city!</h1>
				<form className="form-search" onSubmit={this.submitForm}>
					<FormFields
						alert={this.props.alert}
						formdata={this.state.formdata.city}
						change={e => {
							e.persist();
							this.handleChange(e);
						}}
					/>
					<FormFields
						formdata={this.state.formdata.units}
						change={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	weather: state.weather,
	alert: state.alert,
	loading: state.loading
});

export default connect(mapStateToProps)(Form);
