import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import AppContainer from './containers/AppContainer';
import reducers from './reducers';

import logger from 'redux-logger'

const storeWithMiddleware = applyMiddleware(promiseMiddleware, thunk, logger)(createStore);

ReactDOM.render(
	<Provider store={storeWithMiddleware(reducers)}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
