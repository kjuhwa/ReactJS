import React, { Component } from 'react';
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'

// Link로 화면이동 구성
const Intro = ()=>(
 <Router>
  <div style={{  margin:20 }}>
   {/* exact 정확하게 url이 일치할때만 작동 */}
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
const Join = ()=>(
 <div>
  <h2>회원가입 페이지</h2>
  <Link to='/'>홈으로</Link>
 </div>
)

export default Intro