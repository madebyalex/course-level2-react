import React from 'react';
import ReactDOM from 'react-dom';
// import '../node_modules/codyhouse-framework/main/assets/js/util.js';
import './index.scss';
// import App from './App';
import AppSpring from './AppSpring';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppSpring />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
