import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/sb-admin-2.min.css';
import './config/header';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import agentReducer from './reducers/agentReducer';
import productReducer from './reducers/productReducer';
const rootReducer = combineReducers({
  agent:agentReducer,
  product:productReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
