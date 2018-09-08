import React, { Component } from 'react'
// connect 가져오기(연결하기위해)
import {connect} from 'react-redux'

class Counter extends Component
{
 constructor (props) {
  super(props)
  this.state = {

  }
 }
 render () {
  return (
   <div>
    <fieldset>
     <h1>카운트 : {this.props.counterValue}</h1>
    </fieldset>
   </div>
  )
 }
}
// 리덕스와 컴포넌트간의 소통을 하는 방법
let mapStateProps = ( state )=>{
 // state.리듀서.키(상태값)
 // counterValue=> props에 맴버로 세팅
 return { counterValue:state.counterReducer.value }
}
// Counter연결하여 다시 생성되서 받은 느낌(연결되어개조되어 리빌드된)
Counter = connect( mapStateProps )(Counter)

export default Counter