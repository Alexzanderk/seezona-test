import { combineReducers } from 'redux';
import weather from './weather';
import alert from './alert';
import loading from './loading';

const rootReducer = combineReducers({
	weather,
	alert,
	loading
});

export default rootReducer;
