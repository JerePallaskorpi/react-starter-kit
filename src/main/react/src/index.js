import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
