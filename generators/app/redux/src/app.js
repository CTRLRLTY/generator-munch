import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Hello from './components/hello.jsx';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root')
);
