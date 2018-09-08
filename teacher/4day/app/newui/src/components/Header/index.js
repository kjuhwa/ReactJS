import React from  'react'
import './Header.css'

// 단순한 props를 보여주는 경우나 이벤트가 전혀 없는 컴포넌트들
// 함수형 컴포넌트가 적합
const Header = () => (
 <div className='HeaderStyle'>
  나의 포스팅
 </div>
)
/*
class Header extends Component
{
 constructor (props) {
  super(props)
  this.state={}
 }
 render () {
  return (
   <div className='HeaderStyle'>
    나의 포스팅
   </div>
  )
 }
}
*/
export default Header