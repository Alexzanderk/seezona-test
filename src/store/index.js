import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const initialState = {
	weather: null,
	alert: false,
	loading: false,
	unit: undefined
};

export default createStore(
	reducer,
	initialState,
	applyMiddleware(
		promise,
		thunk,
		logger
	)
);
