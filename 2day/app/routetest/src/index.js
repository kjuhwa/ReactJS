import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Intro from './PageRouter1'
// import Intro from './PageRouter2'
// import Intro from './PageRouter3'
// import Intro from './PageRouter4'
import Search from './PageRouter5'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Intro />, document.getElementById('root'));
ReactDOM.render(<Search />, document.getElementById('root'));
registerServiceWorker();
