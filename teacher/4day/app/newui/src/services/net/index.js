// 네트워크 모둘
// 통신에 관련된 모든 함수들을 정리
import axios from 'axios'

// 글가져오기
// https://jsonplaceholder.typicode.com/posts/1
// 글번호가 동적 파리미터로 지원
export function getMyPost( postId ) 
{
 const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
 return axios.get( url )
}

// 댓글 가져오기
// https://jsonplaceholder.typicode.com/posts/1/comments
// 글번호가 동적 파리미터로 지원
export function getComments( postId ) 
{
 const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
 return axios.get( url )
}