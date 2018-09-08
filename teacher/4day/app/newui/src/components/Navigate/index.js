// 네비게이터
// 이전글 불러오기, 다음글 불러오기 => 이벤트
// 단순 함수형 컴포넌트로 구성
import React from 'react'
import {Button} from 'semantic-ui-react'
import './Navigate.css'

//const Navigate = (props) => (
// props. 을 생략하고 싶다 => 객체구조분해
// 통신중에는 버튼을 비활성 => fetching
const Navigate = ( {postId, fetching, onClick} ) => ( 
 <div className='Navigate'>
  {/* 왼쪽 버튼   */}
  <Button onClick={ ()=>onClick('PREV') }
          content='이전글'
          color='teal'
          icon='left arrow'
          labelPosition="left"
          disabled={fetching}
  />
  {/* 센터        */}
  <div className='Navigate-page-num'>{postId}</div>
  {/* 오른쪽 버튼 */}
  <Button className="Navigate-right-button"
          onClick={ ()=>onClick('NEXT') }
          content='다음글'
          color='red'
          icon='right arrow'
          labelPosition="right"
          disabled={fetching}
          
  />
 </div>
)

export default Navigate
