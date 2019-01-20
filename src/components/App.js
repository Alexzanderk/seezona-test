import React from 'react';
import styled from 'styled-components';

import Form from '../containers/FormContainer';
import WeatherInfo from './WeatherInfo';

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

const App = props => {
	return (
		<div>
			<Create>
				<span>Application created on </span>
				<i className="fab fa-react" />
			</Create>

			<Form />

			<WeatherInfo {...props} />
		</div>
	);
};

export default App;
