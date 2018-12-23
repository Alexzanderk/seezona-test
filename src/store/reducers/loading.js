import { REQUEST_WEATHER, GET_WEATHER } from '../actions';

export default function(state = false, action) {
	switch (action.type) {
		case REQUEST_WEATHER:
			return action.payload;

		case GET_WEATHER:
			return false;

		default:
			return state;
	}
}
