import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
 
const dumpDate = [
    { id:1, author:'홍길동', info:'책1번' },
    { id:2, author:'ncia', info:'책10034번' },
    { id:3, author:'양재', info:'책2번' }
]
// 파라미터 전달
// 요청한 페이지가 없다 -> 404 -> Switch를 사용하면 기본페이지를
// 지정할수 있다 (404를 만들어도 좋고, 특정 페이지로 가게 설정)
const Intro = ()=>(
    <Router>
            <div style={ {mLinkrgin:20} }>
                <div>
                    <Switch>
                        <Route path='/detail/:id/:author' component={Detail} />
                        <Route component={Home} />
                    </Switch>
                </div>
            </div>
    </Router>
)

const Home = ()=>{
    const infos = dumpDate.map((item)=>{
        return (
            <li key={item.id}>
                <Link to={`/detail/${item.id}/${item.author}`}>{item.author}</Link>
            </li>
        )
    })
    return (
        <div>
            <h2>책목록</h2>
            <ul>
                {infos}
            </ul>
        </div>
    )
}

const Detail = (props)=>{
    // props.match.params.id
    const curID = parseInt( props.match.params.id )
    // 책정보 획득
    const bookInfo = dumpDate.filter( e => e.id === curID )[0]
    return (
        <div>
            <h2>상세 정보</h2>
            <p>작가 : {bookInfo.author}</p>
            <p>정보 : {bookInfo.info}</p>
            <Link to='/'>홈으로</Link>
        </div>
    )
}

export default Intro