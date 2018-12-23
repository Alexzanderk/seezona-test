import { GET_WEATHER } from '../actions';


export default function(state = { loading: false, unit: null }, action) {
	switch (action.type) {
		case GET_WEATHER:
			return {
				...state,
				weather: action.payload,
				unit: action.unit
			};
		
		// case 

		default:
			return { ...state };
	}
}
