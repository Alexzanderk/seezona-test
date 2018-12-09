import { GET_ALERT } from '../actions';

export default function(state = false, action) {
	switch (action.type) {
		case GET_ALERT:
			return action.payload;

		default:
			return state;
	}
}
