import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension())}>
    <App />
  </Provider>,
  document.getElementById('app')
);
