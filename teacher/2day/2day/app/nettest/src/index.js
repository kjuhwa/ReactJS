import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ExchangeCal from './ExchangeCal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExchangeCal />, document.getElementById('root'));
registerServiceWorker();
