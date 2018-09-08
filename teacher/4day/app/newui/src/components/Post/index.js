import React, {Component} from  'react'
import './Post.css'
import {CommentList} from '../../containers'

class Post extends Component
{
 constructor (props) {
  super(props)
  console.log('Post call');
  
  this.state={
   // 글정보
   postInfo:{
    title:null,
    body:null,
    comments:[]
   },
   animate:false,
   direction:'left'
  }
 }
 // props가 변경될려고 한다 => props를 전달받으면 호출
 componentWillReceiveProps(nextProps)
 {
  // 글을 꾸며주기
  // 전달받은 데이터는 구조 분해
  const {postId, title, body, comments} = nextProps
  // 현재 보여지는 글과 새로 들어온 글이 다를 경우
  if( this.props.postId !== nextProps.postId)
  {
   // 이전글인지, 다음글인지 체크하여 반향 설정
   const direction = this.props.postId < nextProps.postId ? 'left' : 'right'
   // 연출이 진행되도록 상태값 변경하여 화면 갱신 유도
   this.setState( {
    direction,
    animate:true
   })
   // 글변화에 따른 기존글을 제거하는 연출이 발생되는 시간을 번다
   setTimeout( ()=>{
    // 데이터 설정
    this.setState( {
     postInfo:{
      title, body, comments
     },
     animate:false
    })
   }, 600)
    
   return
  }
  // 만약 글번호는 동일한데 내용이 달라질수 있다
  this.setState( {
   postInfo:{
    title, body, comments
   }
  })
 }
 render () {
  const {title, body, comments} = this.state.postInfo
  // 그려질 글이 없다 화면 제거
  if( title === null ) return null

  // 현재 연출상황 및 방향
  const { animate, direction} = this.state

  // 연출 상황
  // bounceInLeft, bounceOutLeft, bounceInRight, bounceOutRight
  const animation = animate 
                    ? direction === 'left'  ? 'bounceOutLeft' : 'bounceOutRight' 
                    : direction === 'left' ? 'bounceInRight' : 'bounceInLeft'

  return (
   <div className={`PostStyle ${animation} animated`}>
    <h1>{ title }</h1>
    <p>{ body }</p>
    {/* 댓글리스트 */}
    <CommentList comments={comments}/>
   </div>
  )
 }
}

export default Post