import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from '../components/Form/Form';
import WeatherInfo from '../components/WeatherInfo';

const Create = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Overpass';
	color: #0077ff;
	span {
		padding-right: 5px;
		font-size: 14px;
		font-weight: 100;
	}
	i {
		font-size: 25px;
		color: #0077ff;
		font-weight: 300;
	}
`;

class App extends Component {
	render() {
		return (
			<div>
				<Create>
					<span>Application created on </span>
					<i className="fab fa-react" />
				</Create>

				<Form />

				<WeatherInfo {...this.props} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	weather: state.weather,
	alert: state.alert,
	loading: state.loading
});

export default connect(mapStateToProps)(App);
