import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const storeWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

ReactDOM.render(
	<Provider store={storeWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
