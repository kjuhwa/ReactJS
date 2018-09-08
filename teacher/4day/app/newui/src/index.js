import React from 'react';
import ReactDOM from 'react-dom';
// 모든 컴포넌트들에게 css를 적용하고 싶다
import 'semantic-ui-css/semantic.min.css'
import './index.css';
// 모든 애니메이션도 여기서 설정
import './Animation.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

// promise 처리
import Promise from 'promise-polyfill'

// IE 구버전중에 Promise를 미지원하는 경우 Promise를 생성해줌
if(!window.Promise) {
 window.Promise = Promise
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
