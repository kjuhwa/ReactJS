import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// SPA 취지상 <a href='...'> 이부분 화면을 새로 고치는
// 리로드 하는 문제때문에 적합하지 않다 -> Link를 사용
// 메인 시작점(시작 컴포넌트)에서 여러개의 페이지들을
// 묶어서 구성 (url과 컴포넌트들을)
const Intro = ()=>(
    <Router>
        <div style={ {margin:20} }>
            {/* exact 정확하게 url이 일치할때문 작동 */}
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/join' component={Join}/>
        </div>
    </Router>
)

// 홈페이지
const Home = ()=>(
    <div>
        <h2>리액트 홈페이지</h2>
        <ul>
            <li><a href='/login'>로그인</a></li>
            <li><a href='/join'>회원가입</a></li>
            <li><a href='/'>메인</a></li>
        </ul>
    </div>
)

// 로그인
const Login = ()=>(
    <div>
        <h2>로그인 페이지</h2>
        <a href='/'>홈으로</a>
    </div>
)

// 회원가입
const Join = ()=>(
    <div>
        <h2>회원가입 페이지</h2>
        <a href='/'>홈으로</a>
    </div>
)

export default Intro