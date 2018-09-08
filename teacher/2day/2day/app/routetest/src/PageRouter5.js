import React, { Component } from 'react';
import {
 BrowserRouter as Router,
 Route,
 Link,
 Switch
} from 'react-router-dom'
import request from 'superagent'
const url = 'https://dapi.kakao.com/v2/search/image'

const Search = () => (
 <Router>
  <div style={{  margin:20 }}>    
   <div>
    <Switch>
     <Route path='/detail/:id' component={Detail}/>
     <Route component={SearchForm}/>
    </Switch>
   </div>    
  </div>
 </Router>
)
class SearchForm extends React.Component
{
 constructor (props) {
  super(props)
  this.state={
   keyword:'',
   res:null
  }
  // this 보정 처리
  this.onSeach  = this.onSeach.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
 }
 // 검색어 입력 이벤트
 onSeach (e) {
  // 별도 필터링 없음
  this.setState( { keyword:e.target.value } )
 }
 onSubmit (e) {
  e.preventDefault()
  // 검색
  request.get(url)
   .query({query:e.target.value})
   .set('Authorization', 'KakaoAK b9b38c3bd5a7a26d5b41537ba5dc14fc')
   .end((err, res)=>{
    if(err){
     // 더미 데이터를 준비하여서 (ajax의 크로스도메인문제로)
     const dumpData = 
     { 
      meta: { is_end: false, total_count: 1934786, pageable_count: 3912 },
       documents:
        [ { collection: 'blog',
            datetime: '2010-05-26T19:13:19.000+09:00',
            height: 450,
            width: 600,
            thumbnail_url: 'https://search1.kakaocdn.net/argon/130x130_85_c/C5gsvbHHOgC',
            image_url: 'http://www.hanatour.com/asp/travelinfo/view_image.asp?depth=W-PHOTO-1&objimg=image2&img_seq=P000013411',
            display_sitename: 'Daum블로그',
            doc_url: 'http://blog.daum.net/skd1027/14046581' },
          { collection: 'news',
            datetime: '2018-09-07T11:12:04.000+09:00',
            height: 360,
            width: 640,
            thumbnail_url: 'https://search2.kakaocdn.net/argon/130x130_85_c/x3PyXoJsl7',
            image_url: 'https://t1.daumcdn.net/news/201809/07/donga/20180907111204897wnpu.jpg',
            display_sitename: '동아일보',
            doc_url: 'http://v.media.daum.net/v/20180907111204201' }
        ]
     }
     this.setState( { res:dumpData} )  
    }else{
     console.log(res.body);
     this.setState( { res:res.body} )  
    }
  })
 }
 render () {
  var result = ''
  if( !this.state.res ){
   result = <div>검색어 입력후 검색하세요</div>
  }else{
   // 검색 결과 없음은 일단 배제
   result = this.state.res.documents.map( (item)=>{
    return <li key={item.doc_url}>
     <img src={item.thumbnail_url} />
     <strong>{item.display_sitename}</strong>
     <Link to={`/detail/${item.doc_url}`}>상세보기</Link>
    </li>
   } )
  }
  return (
   <div>
    <fieldset>
     <form onSubmit={this.onSubmit}>
      <input type='text' value={this.state.keyword} 
             onChange={this.onSeach}/>
      &nbsp;
      <input type='submit' value='검색' />
     </form>
    </fieldset>
    <fieldset>
     <ul>
      {/* 검색 결과 */}
      {result}
     </ul>
    </fieldset>
   </div>
  )
 }
}
class Detail extends React.Component
{
 constructor (props) {
  super(props)
  this.state={}
 }
 render () {
  return (
   <div></div>
  )
 }
}

export default Search