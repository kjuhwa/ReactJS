import React from 'react'
import './CommentList.css'
import {Comment} from '../../components'

// comments : 댓글을 구조분해서 바로 받은것 
// const {comments} = props
const CommentList = ({comments}) => {
 // 댓글 목록 만들기 
 const list = comments.map( (item, idx)=>(
   <Comment name={ item.email.split('@')[0] } 
            body={ item.body } key={idx}/>
 ) )
 return (
  <ul className="CommentListStyle">
   {list}
  </ul>
 )
}

export default CommentList
