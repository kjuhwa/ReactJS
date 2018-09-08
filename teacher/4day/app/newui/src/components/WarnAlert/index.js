import React, {Component} from 'react'
import './WarnAlert.css'

class WarnAlert extends Component
{
 constructor (props) {
  super(props)
  this.state={
   close:false
  }
 }
 componentWillReceiveProps(nextProps)
 {
  // 연타로 상황을 발생시키면 경고팝업이 비정상적으로 작동
  // 이미 경고창이 보이고 있다면 컷
  if( this.props.showFlag && !nextProps.showFlag ){
   this.setState( {close:true} )
   setTimeout( ()=>{
    this.setState( {close:false} )
   }, 1000)
  }

 }
 render () {
  const {showFlag, msg} = this.props
  const {close} = this.state
  // 경고 상태가 아니다
  if( !showFlag && !close) return null
  return (
   <div className='WarnAlertStyle'>
    {/* 애니메이션 사용법 class명 키프레임 animated */}
    <div className={`form ${ close? 'bounceOut':'bounceIn' } animated`}>
     {msg}
    </div>
   </div>
  )
 }
}

export default WarnAlert