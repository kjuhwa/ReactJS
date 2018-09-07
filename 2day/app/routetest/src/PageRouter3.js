import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// 위, 아래로 공통 화면 구성
const Intro = ()=>(
    <Router>
        <div>
            <CommonHeader />
            <div style={ {mLinkrgin:20} }>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/join' component={Join}/>
                </div>
            </div>
            <CommonFooter />
        </div>
    </Router>
)
// ================================================================
const CommonHeader = ()=>(
    <div style={commonStyle}>
        <h2>페이지 상단</h2>
    </div>
)
const CommonFooter = ()=>(
    <div style={commonStyle}>
        <h2>페이지 하단</h2>
    </div>
)
const commonStyle = {
    backgroundColor:'lightgreen',
    color:'gray',
    padding:10
}
// ================================================================
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