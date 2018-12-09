import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';
export const GET_ALERT = 'GET_ALERT';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

export const getWeather = (city, unit) => {
	const request = axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=040d409174c754d7cb6ab9137c5c40a1`
	);
	return dispatch => {
		request
			.then(({ data }) => {
				dispatch({
					type: GET_ALERT,
					payload: false
				});
				dispatch({
					type: GET_WEATHER,
					payload: data,
					unit:
						unit === 'default' || unit === undefined
							? 'kelvin'
							: unit
				});
			})
			.catch(err => {
				dispatch({
					type: GET_ALERT,
					payload: true
				});
				let error = new Error(
					'Not valid city name, please write correct city name'
				);
				error.code = 404;
				error.err = err;
				dispatch({
					type: GET_WEATHER,
					payload: error
				});
			});
	};
};

export const requestWeather = loading => {
	return {
		type: REQUEST_WEATHER,
		payload: loading
	};
};

export const addAlert = () => {
	return {
		type: GET_ALERT,
		payload: true
	};
};

export const removeAlert = () => {
	return {
		type: GET_ALERT,
		payload: false
	};
};
