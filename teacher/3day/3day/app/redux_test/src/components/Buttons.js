import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions'

class Buttons extends Component
{
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div style={{ margin:10}}>
                <button onClick={ this.props.onDecrement }>감소</button>
                &nbsp;
                <button onClick={ this.props.onIncrement }>증가</button>
            </div>
        )
    }
}

// 액션 발생 함수를 props의 특정 함수로 연결
let mapDispatchToProps= ( dispatch )=>{
    return {
        onIncrement: ()=>{ dispatch( increment() ) },
        onDecrement: ()=>{ dispatch( decrement() ) }
    }
}
Buttons = connect( undefined, mapDispatchToProps )(Buttons)

export default Buttons