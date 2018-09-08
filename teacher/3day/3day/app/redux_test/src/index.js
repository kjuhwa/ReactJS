import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// 0. redux 관련 모듈 추가
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducerTotal from './reducers'

// 1. 스토어 생성 (리듀서를 넣어서)
const store = createStore(reducerTotal)
// 2. 스토어를 컴포넌트들이 connect를 통해서 접근할수 있게 세팅
const jsx   = <Provider store={store}><App /></Provider>
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
