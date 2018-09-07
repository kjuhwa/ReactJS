import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// SPLink 취지상 <a href='...'> 이부분 화면을 새로 고치는
// 리로드 하는 문제때문에 적합하지 않다 -> Link를 사용
// 메인 시작점(시작 컴포넌트)에서 여러개의 페이지들을
// 묶어서 구성 (url과 컴포넌트들을)
const Intro = ()=>(
    <Router>
        <div style={ {mLinkrgin:20} }>
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
            <li><Link to='/login'>로그인</Link></li>
            <li><Link to='/join'>회원가입</Link></li>
            <li><Link to='/'>메인</Link></li>
        </ul>
    </div>
)

// 로그인
const Login = ()=>(
    <div>
        <h2>로그인 페이지</h2>
        <Link to='/'>홈으로</Link>
    </div>
)

// 회원가입
const Join = ()=>(
    <div>
        <h2>회원가입 페이지</h2>
        <Link to='/'>홈으로</Link>
    </div>
)

export default Intro