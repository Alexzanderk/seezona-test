import { GET_WEATHER, REQUEST_WEATHER, GET_ALERT } from './actions';

// export default function(state = { loading: false, unit: null }, action) {
export default function(state, action) {
	switch (action.type) {
		case GET_WEATHER:
			return {
				...state,
				weather: action.payload,
				unit: action.unit
			};

		case REQUEST_WEATHER:
			return {
				loading: action.payload
			};

		case GET_ALERT:
			return {
				alert: action.payload
			};
		default:
			return { ...state };
	}
}
