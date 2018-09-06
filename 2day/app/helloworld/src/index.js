import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import MyInput from './MyInput'
// import MySelect from './MySelect'
// import MyRadio from './MyRadio'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<MyInput />, document.getElementById('root'));
// ReactDOM.render(<MySelect items={ ['김치찌게', '순대국', '된장찌게'] } value='순대국' />, document.getElementById('root'));
// ReactDOM.render(<MyRadio items={ ['김치찌게', '순대국', '된장찌게'] } />, document.getElementById('root'));
registerServiceWorker();
